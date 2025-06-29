import React, { useState } from 'react';
import HanziWriter from 'hanzi-writer';

import getHanziTrainerDetails, {
	normalizeHanziTrainerDetails,
} from 'api/hanziTrainerProApi';
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
	moreInfo,
	setMoreInfo,
	isChallengeMode,
	setIsChallengeMode,
	isFocusMode,
	onSetFocusMode,
	cardProps,
}) => {
	const [pendingSpeechScraper, setPendingSpeechScraper] = useState(false);
	const [pendingMoreInfo, setPendingMoreInfo] = useState(false);

	const { hanzi, pinyin, translation } = cardProps;

	const startQuiz = () => {
		writer.quiz({
			onComplete: () => {
				setTimeout(() => {
					startQuiz();
				}, 1200);
			},
		});
	};

	const onSpeak = async () => {
		try {
			setPendingSpeechScraper(true);
			await trySpeakNative(hanzi, pinyin);
		} catch (err) {
			console.error('Failed to speak');
		} finally {
			setPendingSpeechScraper(false);
		}
	};

	const onMoreInfo = async () => {
		// We only run this if it's not yet fetched and it's just being flipped
		if (!isFlipped && !moreInfo.length) {
			try {
				setPendingMoreInfo(true);
				// Get stroke details
				const {
					radStrokes,
					strokes,
				} = await HanziWriter.loadCharacterData(hanzi);

				// Get more info
				const hanziTrainerDetails = await getHanziTrainerDetails(hanzi);

				setMoreInfo([
					{
						title: 'Stroke Details',
						body: {
							totalStrokeCount: strokes?.length || 'N/A',
							radicalStrokeCount: radStrokes?.length || 'N/A',
						},
					},
					...normalizeHanziTrainerDetails(hanziTrainerDetails, hanzi),
				]);
			} catch (err) {
				console.error('Failed to load more info');
			} finally {
				setPendingMoreInfo(false);
			}
		}

		setIsFlipped(v => !v);
	};

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
								loading={pendingSpeechScraper}
							/>
							<TooltipButton
								tooltip="More Info"
								onClick={onMoreInfo}
								icon={InfoIcon}
								loading={pendingMoreInfo}
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
