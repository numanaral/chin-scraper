import { firstCapital } from 'utils';
import { stripNonChineseChars } from 'utils/chinese';
import translate from 'api/translateApi';

const splitAndTrim = w => w.split('|').map(s => s.trim());

const getWordListAndSentenceFromTranslation = maskedWord => {
	const group = splitAndTrim(maskedWord.toLowerCase());
	const sentence = firstCapital(group[0]);
	const wordList = group.slice(1);
	return {
		sentence,
		wordList,
	};
};

const generateCards = (hanziList, translationList, pinyinList) =>
	Array(hanziList.length)
		.fill(0)
		.map((_, ind) => ({
			text: hanziList[ind],
			id: ind + hanziList[ind],
			hanzi: hanziList[ind],
			translation: translationList[ind],
			pinyin: pinyinList[ind],
		}));

const fetchAndParseTranslationResult = async currentChars => {
	const hanziGroup = stripNonChineseChars(currentChars).split('');
	const res = await translate(currentChars);
	const {
		sentence: translation,
		wordList: translationGroup,
	} = getWordListAndSentenceFromTranslation(res.translation);
	const {
		sentence: pinyin,
		wordList: pinyinGroup,
	} = getWordListAndSentenceFromTranslation(res.transcription);

	return {
		translation,
		pinyin,
		cards: generateCards(hanziGroup, translationGroup, pinyinGroup),
	};
};

export { fetchAndParseTranslationResult };
