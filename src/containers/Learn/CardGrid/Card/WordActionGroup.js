import React from 'react';

import { AnimatePresence } from 'framer-motion';
import TooltipButton from 'components/TooltipButton';
import { noop } from 'utils';
import {
	CancelIcon,
	FavoriteIcon,
	GestureIcon,
	InfoIcon,
	MedalIcon,
	SpeakIcon,
} from 'icons';
import { trySpeakNative } from 'utils/speech';
import { dropFromTheSky, wordActionGroupExit } from './transitions';
import ExtrasContainer from './ExtrasContainer';
import { wordActionGroupPropTypes, wordActionGroupDefaultProps } from './types';

const WordActionGroup = ({
	/** @type {HanziWriter} */
	writer,
	isParentHovering,
	isHovering,
	theme,
	isFlipped,
	setIsFlipped,
	isChallengeMode,
	setIsChallengeMode,
	isFocusMode,
	onSetFocusMode,
	cardProps,
}) => {
	const { pinyin, hanzi } = cardProps;

	const startQuiz = () => {
		writer.quiz({
			onComplete: () => {
				setTimeout(() => {
					startQuiz();
				}, 1200);
			},
		});
	};
	const onSpeak = () => trySpeakNative(hanzi, pinyin);
	const onMoreInfo = () => setIsFlipped(v => !v);
	const onFocusMode = () => {
		if (isFocusMode) {
			onSetFocusMode(false);
			writer.cancelQuiz();
			writer.loopCharacterAnimation();
		} else {
			onSetFocusMode(true);
			if (isFlipped) setIsFlipped(false);
			startQuiz();
		}
	};
	const onHideOutline = () => {
		if (isChallengeMode) writer.showOutline();
		else writer.hideOutline();
		setIsChallengeMode(!isChallengeMode);
		startQuiz();
	};

	const fallDistance = 200 - theme.spacing(3);

	return (
		<AnimatePresence>
			{isHovering && (
				<ExtrasContainer
					$position="bottom"
					$isParentHovering={isParentHovering}
					$isHovering={isHovering}
					{...dropFromTheSky(fallDistance)}
					exit={wordActionGroupExit}
				>
					{(!isFocusMode && (
						<>
							<TooltipButton
								tooltip="Add to favorites - Coming Soon -"
								onClick={noop}
								icon={FavoriteIcon}
								disabled
							/>
							<TooltipButton
								tooltip="Hear it"
								onClick={onSpeak}
								icon={SpeakIcon}
							/>
							<TooltipButton
								tooltip="More Info"
								onClick={onMoreInfo}
								icon={InfoIcon}
							/>
						</>
					)) || (
						<TooltipButton
							{...(isChallengeMode && { bg: 'primary' })}
							tooltip={
								(isChallengeMode &&
									'Practice Mode (Shows Outline)') ||
								'Challenge Mode! (Hides Outline)'
							}
							onClick={onHideOutline}
							icon={MedalIcon}
						/>
					)}
					<TooltipButton
						{...(isFocusMode && { bg: 'primary' })}
						tooltip={
							(isFocusMode && 'Exit!') ||
							`Practice Writing. Use the mouse or your finger to draw.`
						}
						onClick={onFocusMode}
						icon={(isFocusMode && CancelIcon) || GestureIcon}
					/>
				</ExtrasContainer>
			)}
		</AnimatePresence>
	);
};

WordActionGroup.propTypes = wordActionGroupPropTypes;
WordActionGroup.defaultProps = wordActionGroupDefaultProps;

export default WordActionGroup;
