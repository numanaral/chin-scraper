import React, { useEffect, useState } from 'react';

import { isChinese, getEscapedChar, speak, isAnalyticsDisabled } from 'utils';
import Frames from 'components/Frames';
import SearchForm from 'components/SearchForm';

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

	useEffect(() => {
		const initAnalytics = async () => {
			const { default: Analytics } = await import('analytics');
			Analytics.init();
		};

		// Ignore analytics on url w/ ?ga=false
		if (!isAnalyticsDisabled() && process.env.NODE_ENV === 'production') {
			initAnalytics();
		}
	}, []);

	return (
		<>
			<SearchForm onChange={handleChange} />
			<Frames
				currentCharsWithEscapedPairs={currentCharsWithEscapedPairs}
			/>
		</>
	);
};

export default Scraper;
