import React, { useEffect, useState } from 'react';

import { isChinese, getEscapedChar, speak } from 'utils';
import Frames from 'components/Frames';
import SearchBox from 'components/SearchBox';

// Run once as for some reason the first speak is muted
speak('');

const Scraper = () => {
	const [currentChars, setCurrentChars] = useState('');
	const [
		currentCharsWithEscapedPairs,
		setCurrentCharsWithEscapedPairs,
	] = useState([]);

	const handleChange = e => {
		const input = e.target.value;
		if (!isChinese(input)) return;
		setCurrentChars(input);
	};

	useEffect(() => {
		const escapedChars = currentChars
			.split('')
			.filter(isChinese)
			.map(char => ({
				escapedChar: getEscapedChar(char),
				originalChar: char,
			}));
		setCurrentCharsWithEscapedPairs(escapedChars);
	}, [currentChars]);

	return (
		<>
			<SearchBox onChange={handleChange} />
			<br />
			<Frames
				currentCharsWithEscapedPairs={currentCharsWithEscapedPairs}
			/>
		</>
	);
};

export default Scraper;
