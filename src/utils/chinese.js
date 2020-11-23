const REGEX_CHINESE = /\p{Script=Han}/u;
const REGEX_PINYIN = /<td class="hanzi5-article-hanzi-info-td2">(.*)<\/td>/;
const REGEX_STRIP_NON_CHINESE_CHARS = /[^\p{Script=Han}]+/gu;
const REGEX_STRIP_NON_CHINESE_AND_NON_SET_PUNCTUATION_CHARS = /[^\p{Script=Han},.?!，、。？！]+/gu;

const isChinese = text => REGEX_CHINESE.test(text);
const stripNonChineseChars = text =>
	text.replace(REGEX_STRIP_NON_CHINESE_CHARS, '');
const stripNonChineseAndNonSetPunctionationChars = text =>
	text.replace(REGEX_STRIP_NON_CHINESE_AND_NON_SET_PUNCTUATION_CHARS, '');
const removeTones = pinyin =>
	pinyin.replace(/[āáǎàōóǒòēéěèīíǐìūúǔùüǖǘǚǜńň]/g, '');

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
