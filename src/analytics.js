// GA & Timer Src: https://www.simoahava.com/analytics/track-autocomplete-search-google-tag-manager/
const Analytics = (function() {
	// Set searchField to the search input field.
	// Set timeout to the time you want to wait after the last character in milliseconds.
	// Set minLength to the minimum number of characters that constitutes a valid search.
	const searchField = document.querySelector(
		'input[name="chinese-character"]'
	);
	const timeout = 2000;
	const REGEX_CHINESE = /\p{Script=Han}/u;

	let textEntered = false;

	let timer;
	let lastSearchText;
	let searchText;
	const isChinese = text => REGEX_CHINESE.test(text);

	const send = text => {
		console.log('ga:sent', text);
		window.dataLayer.push({
			event: 'chineseInputSearch',
			chineseInput: text,
		});
	};

	const handleInput = () => {
		searchText = searchField ? searchField.value : '';
		if (!searchText) return;

		// Only grab the chinese text
		searchText = searchText
			.split('')
			.filter(isChinese)
			.join('');

		// Meaning all the chars were non-chinese
		if (!searchText) return;

		// Don't send the repeated word in a row
		if (lastSearchText === searchText) return;

		lastSearchText = searchText;
		send(searchText);
		textEntered = false;
	};

	const startTimer = e => {
		textEntered = true;
		window.clearTimeout(timer);
		if (e.keyCode === 13) {
			handleInput();
			return;
		}
		timer = setTimeout(handleInput, timeout);
	};

	const clearTimer = () => {
		if (textEntered) {
			window.clearTimeout(timer);
			handleInput();
		}
	};

	const init = () => {
		if (searchField === null) return;
		searchField.addEventListener('keydown', startTimer, true);
		searchField.addEventListener('blur', clearTimer, true);
		console.log('Analytics initialized');
	};

	const end = () => {
		searchField.removeEventListener('keydown', startTimer, true);
		searchField.removeEventListener('blur', clearTimer, true);
	};

	return { init, end, send };
})();

export default Analytics;
