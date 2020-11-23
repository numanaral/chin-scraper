import { useTheme } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';
import HanziWriter from 'hanzi-writer';

import Hanzi from './Hanzi';

import {
	getDefaultHanziWriterOptions,
	DEFAULT_OPTIONS,
	START_MODES,
} from './constants';

/**
 * Creates and returns a re-writeable and configurable Hanzi
 * @param {String} character Single Hanzi.
 * @param {Object} options Options for building the hanzi
 * - size, startMode, riceGrid
 */
const useHanzi = (character, options = DEFAULT_OPTIONS) => {
	/** @type {[Writer, SetStateAction<Writer>]} */
	const [bgSize, setBgSize] = useState(options.size || 150);
	const [writer, setWriter] = useState(null);
	const theme = useTheme();

	/** @type {import('react').Ref<HTMLElement>} */
	const charRef = useRef();

	const writeHanzi = (newCharacter = character, newOptions = options) => {
		const _options = {
			...DEFAULT_OPTIONS,
			...newOptions,
			hanziWriterOptions: {
				width: newOptions.width || newOptions.size,
				height: newOptions.height || newOptions.size,
				showOutline:
					(options || DEFAULT_OPTIONS).startMode !==
					START_MODES.QUIZ_CHALLENGE,
				showCharacter:
					(options || DEFAULT_OPTIONS).startMode !==
					START_MODES.QUIZ_CHALLENGE,
			},
		};

		if (bgSize !== _options.size) setBgSize(_options.size);

		if (charRef.current) {
			// Clear the previous writing first
			if (writer) {
				charRef.current
					.querySelectorAll((options.riceGrid && 'defs, g') || 'svg')
					.forEach(e => e.remove());
			}

			/** @type {Writer} */
			const hanziWriter = HanziWriter.create(
				charRef.current,
				newCharacter,
				{
					...getDefaultHanziWriterOptions(theme),
					..._options.hanziWriterOptions,
				}
			);

			const recursiveQuiz = () => {
				hanziWriter.quiz({
					onComplete: () => {
						setTimeout(() => {
							recursiveQuiz();
						}, 1200);
					},
				});
			};

			setWriter(hanziWriter);
			switch (newOptions.startMode) {
				case START_MODES.LOOP:
					hanziWriter.loopCharacterAnimation();
					break;
				case START_MODES.QUIZ:
					recursiveQuiz();
					break;
				case START_MODES.QUIZ_CHALLENGE_HIGHLIGHT_ONCE:
					recursiveQuiz();
					break;
				case START_MODES.QUIZ_CHALLENGE:
					recursiveQuiz();
					break;
				default:
					// No Default
					// DRAW_ONCE
					break;
			}
		}
	};

	useEffect(() => {
		writeHanzi();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return {
		hanzi: (
			<Hanzi
				innerRef={charRef}
				size={bgSize}
				riceGrid={options.riceGrid}
			/>
		),
		rewrite: writeHanzi,
		writer,
	};
};

export default useHanzi;
