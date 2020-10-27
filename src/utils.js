import {
	REGEX_CHINESE,
	CORS_BYPASS_URL,
	REGEX_PINYIN,
	PINYIN_URL_PREFIX,
	PINYIN_URL_POSTFIX,
	PUPPETEER_URL,
} from 'consts';

export const isChinese = text => REGEX_CHINESE.test(text);
export const getEscapedChar = char =>
	escape(char).toLowerCase().replace(/%u/g, '');

export const corsBypassedFetch = async url => {
	const res = await fetch(CORS_BYPASS_URL + url, {
		method: 'GET',
	});

	// Cannot extract text
	// Failed to execute 'text' on 'Response': Illegal invocation
	const { ok, status } = res;
	if (!ok) throw new Error(`HTTP Error ${status}`);

	return res.text();
};
export const fetchPinyin = async (escapedCharacter, setPinyin) => {
	try {
		const resposeText = await corsBypassedFetch(
				PINYIN_URL_PREFIX +
				escapedCharacter +
				PINYIN_URL_POSTFIX
		);

		const match = REGEX_PINYIN.exec(resposeText);
		if (match === null) {
			console.log('Scraping failed for the pinyin');
			return;
		}
		setPinyin(match[1]);
	} catch (err) {
		console.log('Failed to fetch pinyin');
		console.log({ err });
	}
};

export const getEnglishTranslation = async (
	chineseText,
	setEnglishTranslation
) => {
	try {
		const res = await fetch(
			CORS_BYPASS_URL + PUPPETEER_URL,
			{
				headers: {
					accept: '*/*',
					'accept-language': 'en',
					'content-type':
						'multipart/form-data; boundary=----WebKitFormBoundary8HRvFx6KkZQPoCAm',
					'sec-fetch-dest': 'empty',
					'sec-fetch-mode': 'cors',
					'sec-fetch-site': 'cross-site',
				},
				referrer: 'https://try-puppeteer.appspot.com/',
				referrerPolicy: 'strict-origin-when-cross-origin',
				body: `------WebKitFormBoundary8HRvFx6KkZQPoCAm\r\nContent-Disposition: form-data; name="file"; filename="blob"\r\nContent-Type: text/javascript\r\n\r\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n\n  await page.goto('https://translate.google.com/#zh-CN|en|${chineseText}');\n\n  // Extract the results from the page.\n  const result = await page.evaluate(() => {\n     console.log('here')\n    return [...document.querySelectorAll('.tlid-translation')][0].textContent;\n  });\n\nconsole.log(result);\n\n  await browser.close();\r\n------WebKitFormBoundary8HRvFx6KkZQPoCAm--\r\n`,
				method: 'POST',
				mode: 'cors',
				credentials: 'omit',
			}
		);

		// Cannot extract text
		// Failed to execute 'text' on 'Response': Illegal invocation
		const { ok, status } = res;
		if (!ok) throw new Error(`HTTP Error ${status}`);

		const data = await res.json();

		setEnglishTranslation(data.log);
	} catch (err) {
		console.log('Error translating');
		console.error(err);
	}
};

// Don't recreate these on each speak
const synth = window.speechSynthesis;
const utterance = new SpeechSynthesisUtterance();
utterance.pitch = 1;
utterance.rate = 0.8;

export const speak = text => {
	if (synth.speaking || text === '') return;
	
	// For some reason this fails in the first time
	if(!utterance.voice) {
		utterance.voice = synth.getVoices().find(v => v.lang === 'zh-CN');
	}
	utterance.text = text;
	synth.speak(utterance);
};

export const isAnalyticsDisabled = () => window.location.search === '?ga=false';