const REGEX_CHINESE = /\p{Script=Han}/u;
const REGEX_PINYIN = /<td class="hanzi5-article-hanzi-info-td2">(.*)<\/td>/;
const REGEX_STRIP_NON_CHINESE_CHARS = /[^\p{Script=Han}]+/gu;
const REGEX_STRIP_NON_CHINESE_AND_NON_SET_PUNCTUATION_CHARS = /[^\p{Script=Han},.?!，、。？！]+/gu;

/** @see https://github.com/sxei/pinyinjs/blob/3f0013841ba62a6d1af38e50839ea196b27369cb/pinyinUtil.js#L16 */
const TONE_MAP = {
	ā: 'a',
	á: 'a',
	ǎ: 'a',
	à: 'a',
	ō: 'o',
	ó: 'o',
	ǒ: 'o',
	ò: 'o',
	ē: 'e',
	é: 'e',
	ě: 'e',
	è: 'e',
	ī: 'i',
	í: 'i',
	ǐ: 'i',
	ì: 'i',
	ū: 'u',
	ú: 'u',
	ǔ: 'u',
	ù: 'u',
	ü: 'v',
	ǖ: 'v',
	ǘ: 'v',
	ǚ: 'v',
	ǜ: 'v',
	ń: 'n',
	ň: 'n',
	'': 'm',
};

const isChinese = text => REGEX_CHINESE.test(text);
const stripNonChineseChars = text =>
	text.replace(REGEX_STRIP_NON_CHINESE_CHARS, '');
const stripNonChineseAndNonSetPunctionationChars = text =>
	text.replace(REGEX_STRIP_NON_CHINESE_AND_NON_SET_PUNCTUATION_CHARS, '');
const removeTones = pinyin =>
	pinyin.replace(/[āáǎàōóǒòēéěèīíǐìūúǔùüǖǘǚǜńň]/g, match => TONE_MAP[match]);

export {
	REGEX_CHINESE,
	REGEX_PINYIN,
	REGEX_STRIP_NON_CHINESE_CHARS,
	REGEX_STRIP_NON_CHINESE_AND_NON_SET_PUNCTUATION_CHARS,
	isChinese,
	stripNonChineseChars,
	stripNonChineseAndNonSetPunctionationChars,
	removeTones,
};
