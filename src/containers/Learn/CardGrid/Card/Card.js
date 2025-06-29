import React, { useState } from 'react';
import { useTheme } from '@material-ui/core';

import useHanzi from 'components/Hanzi/useHanzi';
import useOuterClick from 'hooks/useOuterClick';
import { START_MODES } from 'components/Hanzi/constants';
import { CARD_BASE_SIZE, CARD_FOCUS_MODE_SIZE } from './constants';
import {
	cardAnimationVariants,
	cardInnerContainerFrontAnimationVariants,
	cardInnerContainerBackAnimationVariants,
} from './transitions';
import { cardPropTypes, cardDefaultProps } from './types';
import CardPlaceholder from './CardPlaceholder';
import CardWrapper from './CardWrapper';
import CardContainer from './CardContainer';
import MoreInfoContainer from './MoreInfoContainer';
import WordInfoGroup from './WordInfoGroup';
import WordActionGroup from './WordActionGroup';
import FocusModeInfoText from './FocusModeInfoText';
import CardInnerContainerFront from './CardInnerContainerFront';
import CardInnerContainerBack from './CardInnerContainerBack';

const Card = ({
	text,
	isParentHovering,
	isChildInFocusMode,
	setIsChildInFocusMode,
	smAndDown,
	...cardProps
}) => {
	const theme = useTheme();
	const { hanzi, writer, rewrite } = useHanzi(text);

	const [isHovering, setIsHovering] = useState(false);
	const [isFlipped, setIsFlipped] = useState(false);
	const [isFocusMode, setIsFocusMode] = useState(false);
	const [isChallengeMode, setIsChallengeMode] = useState(false);
	const [moreInfo, setMoreInfo] = useState([]);

	const onSetFocusMode = v => {
		rewrite(text, {
			size: (v && CARD_FOCUS_MODE_SIZE) || CARD_BASE_SIZE,
			startMode: (v && START_MODES.QUIZ) || START_MODES.LOOP,
		});
		setIsChildInFocusMode(v);
		setIsFocusMode(v);
	};

	// Close open cards when when clicked elsewhere
	const currentCard = useOuterClick(() => {
		// We are only concerned with this on mobile
		if (!smAndDown) return;

		// If we are in focus mode, ignore it
		if (isChildInFocusMode) return;

		// Else if the card is not hovered anyway, don't touch it
		if (!isHovering) return;

		// Onl the cards that are open when we click outside should close
		setIsHovering(false);
	});

	// Focus mode overrides the hovering
	// If it's in focus mode but it's not this child, don't allow hover
	let _isHovering = isHovering;
	if (isChildInFocusMode) _isHovering = isFocusMode;

	const _isParentHovering = isParentHovering;

	const animate = (isFocusMode && 'isFocusMode') || [
		(_isParentHovering && 'isParentHovering') || 'isParentNotHovering',
		(_isParentHovering && _isHovering && 'isHovering') || 'isNotHovering',
	];

	const onClick = () => {
		if (isFocusMode || isFlipped) return;

		// eslint-disable-next-line no-unused-expressions
		currentCard.current?.scrollIntoView({
			block: 'center',
			behavior: 'smooth',
			// inline: 'end',
		});
		setIsHovering(!_isHovering);
	};

	const onTapCancel = () => {
		if (isFocusMode || isFlipped) return;
		setIsHovering(false);
	};

	return (
		<CardPlaceholder
			ref={currentCard}
			layout
			initial={false}
			custom={theme}
			variants={cardAnimationVariants}
			animate={animate}
			$isParentHovering={_isParentHovering}
			$isFocusMode={isFocusMode}
			onHoverStart={() => {
				setIsHovering(true);
			}}
			onHoverEnd={() => {
				setIsHovering(false);
			}}
		>
			<CardWrapper layout $isParentHovering={_isParentHovering}>
				{writer && (
					<WordInfoGroup
						theme={theme}
						isParentHovering={isParentHovering}
						isHovering={_isHovering}
						visible
						cardProps={cardProps}
					/>
				)}
				<CardContainer>
					<CardInnerContainerFront
						onClick={onClick}
						onTapCancel={onTapCancel}
						variants={cardInnerContainerFrontAnimationVariants}
						animate={[
							(isFlipped && 'isFlipped') || 'isNotFlipped',
							(isFocusMode && 'isFocusMode') || 'isNotFocusMode',
						]}
					>
						{isFocusMode && (
							<FocusModeInfoText>
								Practice writing using your mouse or finger
							</FocusModeInfoText>
						)}
						<div
							style={{
								visibility: isFlipped ? 'hidden' : 'visible',
							}}
						>
							{hanzi}
						</div>
					</CardInnerContainerFront>
					<CardInnerContainerBack
						onClick={onClick}
						onTapCancel={onTapCancel}
						$isFlipped={isFlipped}
						variants={cardInnerContainerBackAnimationVariants}
						animate={(isFlipped && 'isFlipped') || 'isNotFlipped'}
					>
						<MoreInfoContainer details={moreInfo} />
					</CardInnerContainerBack>
				</CardContainer>
				{writer && (
					<WordActionGroup
						writer={writer}
						isParentHovering={isParentHovering}
						isHovering={_isHovering}
						theme={theme}
						isFlipped={isFlipped}
						setIsFlipped={setIsFlipped}
						moreInfo={moreInfo}
						setMoreInfo={setMoreInfo}
						isFocusMode={isFocusMode}
						onSetFocusMode={onSetFocusMode}
						isChallengeMode={isChallengeMode}
						setIsChallengeMode={setIsChallengeMode}
						cardProps={cardProps}
					/>
				)}
			</CardWrapper>
		</CardPlaceholder>
	);
};

Card.propTypes = cardPropTypes;
Card.defaultProps = cardDefaultProps;

export default Card;
