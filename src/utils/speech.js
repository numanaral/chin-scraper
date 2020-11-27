// #region CONSTANTS

import { get } from 'api/rest';

/** @see https://github.com/sxei/pinyinjs/blob/3f0013841ba62a6d1af38e50839ea196b27369cb/pinyinUtil.js#L16 */
const TONE_MAP = {
	ā: 'a1',
	á: 'a2',
	ǎ: 'a3',
	à: 'a4',
	ō: 'o1',
	ó: 'o2',
	ǒ: 'o3',
	ò: 'o4',
	ē: 'e1',
	é: 'e2',
	ě: 'e3',
	è: 'e4',
	ī: 'i1',
	í: 'i2',
	ǐ: 'i3',
	ì: 'i4',
	ū: 'u1',
	ú: 'u2',
	ǔ: 'u3',
	ù: 'u4',
	ü: 'v0',
	ǖ: 'v1',
	ǘ: 'v2',
	ǚ: 'v3',
	ǜ: 'v4',
	ń: 'n2',
	ň: 'n3',
	'': 'm2',
};

const HAN_TRAINER_PRO_PREFIX = `https://www.hantrainerpro.de/resources/pronunciations/`;
const HAN_TRAINER_PRO_POSTFIX = '.mp3';

// Don't recreate these on each speak
let synth;
let utterance;
if (window.speechSynthesis || window.SpeechSynthesisUtterance) {
	synth = window.speechSynthesis;
	utterance = new SpeechSynthesisUtterance();
	utterance.pitch = 1;
	utterance.rate = 0.8;
}

const PINYIN_JS_URL = `https://cdn.jsdelivr.net/gh/sxei/pinyinjs/pinyinUtil.js`;
const PINYIN_JS_DICTIONARY_URL = `https://cdn.jsdelivr.net/gh/sxei/pinyinjs/dict/pinyin_dict_withtone.js`;

// #endregion

/**
 * HanTrainerPro uses direct mark to tone conversion, so we need to
 * parse single tone marks to their respective numbered tones.
 * - As an example, for hǎo:
 * 	- We would normally want hao3
 * 		- @see https://hantrainerpro.de/resources/pronunciations/hao3.mp3 (Error)
 * 	- But the api works with ha3o
 * 		- @see https://hantrainerpro.de/resources/pronunciations/ha3o.mp3 (Working)
 *
 * @see https://github.com/sxei/pinyinjs/blob/3f0013841ba62a6d1af38e50839ea196b27369cb/pinyinUtil.js#L260 (Algorithm)
 *
 * @example
 * markToNumberForHanTrainerPro(hǎo);
 * // returns ha3o
 *
 * @param {String} pinyin Pinyin to parse
 */
const markToNumberForHanTrainerPro = pinyin =>
	pinyin.replace(/[āáǎàōóǒòēéěèīíǐìūúǔùüǖǘǚǜńň]/g, match => TONE_MAP[match]);

/**
 * Speaks the given word using SpeechSynthesisUtterance
 *
 * @param {String} text Hanzi to speak.
 */
const speak = text => {
	if (!text) return;
	if (!synth || !utterance) {
		// eslint-disable-next-line no-alert
		alert(
			`You browser doesn't support native speec, please upgrade or try somewhere else for now.`
		);
		return;
	}
	if (synth.speaking) synth.cancel();

	// For some reason this fails in the first time
	if (!utterance.voice) {
		utterance.voice = synth.getVoices().find(v => v.lang === 'zh-CN');
	}
	utterance.text = text;
	synth.speak(utterance);
};

/**
 * Imports pinyinJS dictionary and utility once
 *
 * @see https://github.com/sxei/pinyinjs
 */
const importPinyinJsIfNeeded = async () => {
	if (!window.pinyin_dict_withtone) {
		const { data } = await get(PINYIN_JS_DICTIONARY_URL, {
			headers: {
				accept: 'text/js',
			},
		});
		window.pinyin_dict_withtone = data.replace(
			/var pinyin_dict_withtone = |"|;/g,
			''
		);
	}
	if (!window.pinyinUtil) {
		// await import('./pinyinUtil');
		const { data } = await get(PINYIN_JS_URL, {
			headers: {
				accept: 'text/js',
			},
		});

		// eslint-disable-next-line no-eval
		eval(data);
	}
};

/**
 * Tries a native speech via Han Trainer Pro w/ a fallback to
 * SpeechSynthesisUtterance
 *
 * @param {String} hanzi Hanzi character to speak.
 * @param {String} pinyin Pinyin for the given hanzi.
 */
const trySpeakNative = async (hanzi, pinyin = '') => {
	if (!hanzi) return;

	// If no pinyin was passed in, then we use pinyinjs rather than making
	// a google-translate api call, this can be cached later so it's ok
	// to make a rather bigger request
	let _pinyin = pinyin;
	if (!_pinyin) {
		await importPinyinJsIfNeeded();
		_pinyin = window.pinyinUtil.getPinyin(hanzi);
	}
	const numberedPinyin = markToNumberForHanTrainerPro(_pinyin);
	const audioUrl =
		HAN_TRAINER_PRO_PREFIX + numberedPinyin + HAN_TRAINER_PRO_POSTFIX;
	try {
		const audio = new Audio(audioUrl);
		await audio.play();
	} catch (e) {
		console.warn(
			`Failed to fetch native speech, will play default speech. Failed on the following:`,
			{
				pinyin: _pinyin,
				hanzi,
				numberedPinyin,
				audioUrl,
			}
		);
		speak(hanzi);
	}
};

export { speak, trySpeakNative };
