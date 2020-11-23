import React, { useEffect, useState } from 'react';

import useSearchQueries from 'store/firebase/hooks/useSearchQueries';
import { firstCapital } from 'utils';
import {
	stripNonChineseChars,
	stripNonChineseAndNonSetPunctionationChars,
} from 'utils/chinese';
import usePrevious from 'hooks/usePrevious';
import { speak } from 'utils/speech';
import SearchForm from 'components/SearchForm';
// import useAnalytics from 'hooks/useAnalytics';
import CardGrid from 'components/CardGrid/index';
import translate from 'api/translateApi';
import TranslationResult from 'components/TranslationResult';
import Spacer from 'components/Spacer';

// Run once as for some reason the first speak is muted
speak('');

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

const Scraper = () => {
	const [input, setInput] = useState('');
	const [sentences, setSentences] = useState({});
	const [cards, setCards] = useState([]);
	const previousInput = usePrevious(input);
	const { add } = useSearchQueries();

	const resetCards = () => {
		setCards([]);
		setSentences({});
	};

	const onChange = e => {
		const { value } = e.target;
		setInput(value);
		if (!value && cards.length) resetCards();
	};

	const onSubmit = async e => {
		e.preventDefault();

		// eslint-disable-next-line max-len
		const previousChineseInputWithPunctuation = stripNonChineseAndNonSetPunctionationChars(
			previousInput
		);
		// eslint-disable-next-line max-len
		const chineseInputWithPunctuation = stripNonChineseAndNonSetPunctionationChars(
			input
		);

		// Don't search twice using the same query
		// eslint-disable-next-line max-len
		if (
			previousChineseInputWithPunctuation === chineseInputWithPunctuation
		) {
			// If there are unrecognized chars, reset them
			if (input !== chineseInputWithPunctuation) {
				setInput(chineseInputWithPunctuation);
			}
			return;
		}

		const chineseInput = stripNonChineseChars(chineseInputWithPunctuation);

		if (chineseInput) {
			add(chineseInput);
			setInput(chineseInputWithPunctuation);
			const {
				translation,
				pinyin,
				cards: resultCards,
			} = await fetchAndParseTranslationResult(
				chineseInputWithPunctuation
			);

			setSentences({
				original: chineseInputWithPunctuation,
				translation,
				pinyin,
			});
			setCards(resultCards);
			return;
		}
		if (cards.length) resetCards();
		setInput('');
	};

	useEffect(() => {}, [input]);

	return (
		<>
			<SearchForm input={input} onChange={onChange} onSubmit={onSubmit} />
			{sentences.translation && <TranslationResult {...sentences} />}
			<Spacer direction="bottom" spacing="2" />
			<CardGrid cards={cards} />
		</>
	);
};

export default Scraper;
