import { useEffect, useState } from 'react';

import useInput from 'hooks/useInput';
import { shuffleArray } from 'utils/object';
import { stripNonChineseChars } from 'utils/chinese';
import usePrevious from 'hooks/usePrevious';
import useSearchQueries from 'store/firebase/hooks/useSearchQueries';

const useInputWithCharacterList = (initialValue, shuffle, label) => {
	const { add } = useSearchQueries();
	const { input, setInput, onChange, ...rest } = useInput(initialValue);
	const [characters, setCharacters] = useState([]);
	const previousHanzi = usePrevious(input);

	const getCharacterList = (text = input) =>
		(shuffle && shuffleArray(text)) || text.split('');

	const restart = () => {
		setCharacters(v => getCharacterList((shuffle && v) || input));
	};

	const onSubmit = async e => {
		e.preventDefault();

		const currentHanzi = stripNonChineseChars(input);
		// Filter out non-hanzi characters from the input
		if (stripNonChineseChars(previousHanzi) === currentHanzi) {
			if (previousHanzi !== input) setInput(currentHanzi);
			if (!currentHanzi) setCharacters([]);
			return;
		}

		if (currentHanzi) {
			add(currentHanzi);
			setInput(currentHanzi);
			setCharacters(getCharacterList(currentHanzi));
			return;
		}

		// If all non-hanzi characters, reset to empty
		setCharacters([]);
		setInput('');
	};

	useEffect(() => {
		setCharacters(getCharacterList());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return {
		characters,
		input,
		restart,
		onChange,
		onSubmit,
		label,
		...rest,
	};
};

export default useInputWithCharacterList;
