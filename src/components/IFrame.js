import React, { useEffect, useState } from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

import { GIF_URL_PREFIX, GIF_URL_POSTFIX } from 'consts';
import { fetchPinyin, getEnglishTranslation, speak } from 'utils';

const Container = styled.div`
	position: relative;
	display: inline-block;
`;

const StyledIframe = styled.iframe`
	height: 300px;
	border: none;
	/* transition: transform 0.5s;
	:hover {
		transform: scale(1.3);
	} */
`;

const Pinyin = styled.span`
	position: absolute;
	left: 0;
	right: 0;
	bottom: 10px;
	margin: auto;
	font-weight: bold;
	font-size: 20px;
	border: 2px dashed;
`;

const EnglishTranslation = styled.span`
	position: absolute;
	left: 0;
	right: 0;
	bottom: 40px;
	margin: auto;
	font-weight: bold;
	font-size: 20px;
	border: 2px dashed;
`;

const Speak = styled.button`
	position: absolute;
	right: 10px;
	top: 10px;
	margin: auto;
	border-radius: 4px;
`;

const IFrame = ({ escapedChar, originalChar }) => {
	const [pinyin, setPinyin] = useState('');
	const [englishTranslation, setEnglishTranslation] = useState('');

	useEffect(() => {
		fetchPinyin(escapedChar, setPinyin);
		getEnglishTranslation(originalChar, setEnglishTranslation);
	}, [escapedChar, originalChar]);

	return (
		<Container>
			<Speak onClick={() => speak(originalChar)}> Speak </Speak>
			<StyledIframe
				title={`gif-${escapedChar}`}
				src={GIF_URL_PREFIX + escapedChar + GIF_URL_POSTFIX}
			/>
			{pinyin && <Pinyin> {pinyin} </Pinyin>}
			{englishTranslation && (
				<EnglishTranslation> {englishTranslation} </EnglishTranslation>
			)}
		</Container>
	);
};

IFrame.propTypes = {
	originalChar: string.isRequired,
	escapedChar: string.isRequired,
};

export default IFrame;
