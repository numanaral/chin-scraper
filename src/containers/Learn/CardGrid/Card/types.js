import { string, bool, object, func } from 'prop-types';
import { theme } from 'components/types';
import { cardType } from '../types';

const cardPropTypes = {
	text: string.isRequired,
	isParentHovering: bool.isRequired,
};
const cardDefaultProps = {};

const wordInfoGroupPropTypes = {
	isParentHovering: bool.isRequired,
	isHovering: bool.isRequired,
	cardProps: cardType.isRequired,
	visible: bool.isRequired,
};

const wordInfoGroupDefaultProps = {};

const writerType = object;

const wordActionGroupPropTypes = {
	writer: writerType.isRequired,
	isParentHovering: bool.isRequired,
	isHovering: bool.isRequired,
	theme,
	isFlipped: bool.isRequired,
	setIsFlipped: func.isRequired,
	isChallengeMode: bool.isRequired,
	setIsChallengeMode: func.isRequired,
	isFocusMode: bool.isRequired,
	onSetFocusMode: func.isRequired,
	cardProps: cardType.isRequired,
};
const wordActionGroupDefaultProps = {};

export {
	cardPropTypes,
	cardDefaultProps,
	wordInfoGroupPropTypes,
	wordInfoGroupDefaultProps,
	writerType,
	wordActionGroupPropTypes,
	wordActionGroupDefaultProps,
};
