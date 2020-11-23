import React, { useEffect, useState } from 'react';

import useSearchQueries from 'store/firebase/hooks/useSearchQueries';
import {
	stripNonChineseChars,
	stripNonChineseAndNonSetPunctionationChars,
} from 'utils/chinese';
import usePrevious from 'hooks/usePrevious';
import SearchForm from 'components/SearchForm';
import TranslationResult from 'components/TranslationResult';
import Spacer from 'components/Spacer';
import ContainerWithCenteredItems from 'components/ContainerWithCenteredItems';
import { fetchAndParseTranslationResult } from './utils';
import LazyCardGrid from './CardGrid/Lazy';
import Body from './Body';

const Learn = () => {
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
		<Body>
			<ContainerWithCenteredItems>
				<SearchForm
					input={input}
					onChange={onChange}
					onSubmit={onSubmit}
				/>
				{sentences.translation && <TranslationResult {...sentences} />}
				<Spacer direction="bottom" spacing="2" />
				<LazyCardGrid cards={cards} />
			</ContainerWithCenteredItems>
		</Body>
	);
};

export default Learn;
