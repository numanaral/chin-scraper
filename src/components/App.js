import React, { useEffect, useState } from 'react';

import './styles.css';
import Source from 'components/Source';
import Frames from 'components/Frames';
import SearchBox from 'components/SearchBox';
import { isChinese, getEscapedChar } from 'utils';

const App = () => {
	const [currentChars, setCurrentChars] = useState('');
	const [currentEscapedChars, setCurrentEscapedChars] = useState([]);

	const handleKeyPress = e => {
		const input = e.target.value;
		if (!isChinese(input)) return;
		setCurrentChars(input);
	};

	useEffect(() => {
		const escapedChars = currentChars.split('').map(getEscapedChar);
		setCurrentEscapedChars(escapedChars);
	}, [currentChars]);

	return (
		<div className="App">
			<Source />
			<SearchBox />
			<Frames escapedChars={currentEscapedChars} />
		</div>
	);
};

export default App;
