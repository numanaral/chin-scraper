import { isEmptyObject } from 'utils/object';
import { parseHtmlFromResponse, matchElementByText } from 'utils/dom';
import proxy from './proxyApi';
import hanziTrainerCharLinks from './hanziTrainerCharLinks.json';

const API_NAME = 'Hanzi Trainer Pro';
const API_URL_PREFIX =
	'https://dictionary.hantrainerpro.com/chinese-english/translation-';
const API_URL_POSTFIX = '.htm';
const MATCH_WORD_TRANSLATIONS = 'English translations';
const MATCH_WORD_EXAMPLE = 'Chinese Pinyin example sentence with';
const MATCH_WORD_WORDS_CONTAINING =
	'Chinese example words containing the character';

const getApiUrl = async hanzi => {
	const linkId = hanziTrainerCharLinks[hanzi];
	return `${API_URL_PREFIX}${linkId}${API_URL_POSTFIX}`;
};

/**
 * @see
 *
 * @param {String} hanzi Hanzi to search
 */
const proxyPage = async hanzi => {
	const hanTrainerProUrl = await getApiUrl(hanzi);
	const response = await proxy(hanTrainerProUrl);

	return response;
};

const getKeyDomNode = (html, text, exact = true) =>
	matchElementByText(html, 'b', text, exact);

const getValueDomNode = matchedKeyDomNode =>
	matchedKeyDomNode.closest('div').nextElementSibling;

const logInnerError = (err, failedFor) => {
	console.warn(`Error parsing the ${failedFor} from ${API_NAME}`, {
		err,
	});
};

const getHanziTrainerDetails = async hanzi => {
	const details = {
		translations: [],
		example: {},
		wordsContaining: [],
	};

	try {
		const response = await proxyPage(hanzi);
		if (!response) throw new Error('Failed to proxy.');

		const html = parseHtmlFromResponse(response);
		if (!html) throw new Error('Failed to parse the html.');

		const getMatchedNode = (text, exact = true) =>
			getValueDomNode(getKeyDomNode(html, text, exact));

		// English Translations
		/**
		 * [
		 * 	'good,
		 * 	'kind',
		 * 	'very',
		 * ]
		 */
		try {
			const translationMatch = getMatchedNode(MATCH_WORD_TRANSLATIONS);
			details.translations = translationMatch
				.querySelector('p')
				// eslint-disable-next-line prettier/prettier
				.innerText.replace(/\n/, '')
				.split(',')
				.map(w => w.trim());
		} catch (err) {
			logInnerError(err, 'translations');
		}

		// Example
		/**
		 * {
		 * 	pinyin: "Zhè fēicháng hăo.",
		 * 	translation: "This is very good."
		 * }
		 */
		try {
			const exampleMatch = getMatchedNode(MATCH_WORD_EXAMPLE, false);
			const exampleNodes = [...exampleMatch.querySelectorAll('i')];

			details.example = {
				pinyin: `${exampleNodes[0].innerText.split('.')[1]}.`,
				translation: exampleNodes[1].children[0].innerText,
			};
		} catch (err) {
			logInnerError(err, 'example');
		}

		// Other words containing this hanzi
		/**
		 * [
		 * 	{
		 * 		hanzi: "不好意思",
		 * 		pinyin: "bùhăoyìsi",
		 * 		translation: "to feel embarrassed"
		 * 	},
		 * ]
		 */
		try {
			const wordsContainingMatch = getMatchedNode(
				MATCH_WORD_WORDS_CONTAINING,
				false
			);
			const wordsContainingMatchNodes = [
				...wordsContainingMatch.children,
			];
			details.wordsContaining = wordsContainingMatchNodes.map(node => {
				// This doesn't work as some pinyin are separate
				// const match = node.innerText.match(/([^\s()=,]+)/g);

				// Temp solution, I should try a better regex
				const split = node.innerText.split('(');
				const split2 = split[1].split('=');
				const split3 = split2[1].split(')');

				return {
					hanzi: split[0].trim(),
					pinyin: split2[0].trim(),
					translation: split3[0].trim(),
				};
			});
		} catch (err) {
			logInnerError(err, 'words containing');
		}
	} catch (err) {
		console.error(err.message, { err });
	}
	return details;
};

const generateDetail = (title, body) => ({ title, body });

const normalizeHanziTrainerDetails = (
	{ translations, example, wordsContaining },
	hanzi
) => {
	const generatedDetails = [];

	try {
		if (!isEmptyObject(translations)) {
			generatedDetails.push(generateDetail('Translations', translations));
		}
		if (!isEmptyObject(example)) {
			generatedDetails.push(
				generateDetail(`Example using ${hanzi}`, {
					pinyin: example.pinyin,
					translation: example.translation,
				})
			);
		}
		if (!isEmptyObject(wordsContaining)) {
			generatedDetails.push(
				generateDetail(
					`Words containing ${hanzi}`,
					wordsContaining.reduce(
						(acc, { hanzi: wordHanzi, pinyin, translation }) => {
							acc[wordHanzi] = `${translation} (${pinyin})`;
							return acc;
						},
						{}
					)
				)
			);
		}
	} catch (err) {
		console.error(`Failed to normalize ${API_NAME} details`);
	}

	return generatedDetails;
};

export { normalizeHanziTrainerDetails };
export default getHanziTrainerDetails;
