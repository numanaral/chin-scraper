import { CARD_BASE_SIZE, CARD_FOCUS_MODE_SIZE } from './constants';

/** @returns {{initial: TargetAndTransition, animate: TargetAndTransition}} */
const dropFromTheSky = (distance = 250, reverse = false) => ({
	initial: {
		y: !reverse ? -distance : 0,
		opacity: !reverse ? 0 : 1,
		pointerEvents: 'none',
	},
	animate: {
		y: !reverse ? 0 : -distance,
		opacity: !reverse ? 1 : 0,
		pointerEvents: 'initial',
	},
});

/** @type {TargetAndTransition} */
const exit = {
	scale: 20,
	opacity: 0,
	pointerEvents: 'none',
	transition: {
		ease: 'easeIn',
		delay: 0.2,
		// duration: 1,
		transitionEnd: { display: 'none' },
	},
};

const spring = {
	type: 'spring',
	stiffness: 1000,
	// damping: 5,
	duration: 0,
};

const easeOut = {
	ease: 'easeOut',
	duration: 0.2,
};

const cardAnimationVariants = {
	/**
	 * @param {MuiTheme} theme - MuiTheme
	 * @returns {TargetAndTransition}
	 */
	isFocusMode: () => ({
		// width: '100% !important',
		// height: '100% !important',
		// position: 'absolute',
		// top: 0,
		// left: 0,
		scale: 1,
	}),
	/**
	 * @param {MuiTheme} theme - MuiTheme
	 * @returns {TargetAndTransition}
	 */
	isHovering: () => ({
		rotate: [0, 5, -5, 5, -5, 0, 0],
		scale: [1, 1, 1.8],
		zIndex: 3,
	}),
	/**
	 * @param {MuiTheme} theme - MuiTheme
	 * @returns {TargetAndTransition}
	 */
	isNotHovering: () => ({
		rotate: 0,
		scale: 1,
		zIndex: 1,
	}),
	/**
	 * @param {MuiTheme} theme - MuiTheme
	 * @returns {TargetAndTransition}
	 */
	isParentHovering: theme => ({
		margin: `${theme.spacing(1)}px`,
		/* NOTE: This will be dynamic i.e. use wants to see the translation and pinyin, then there will be margin */
		marginBottom: `${theme.spacing(1) + 20}px`,
		width: theme.spacing(23),
		height: theme.spacing(23),
		borderRadius: `${theme.shape.borderRadius}px`,
		transition: spring,
	}),
	/**
	 * @param {MuiTheme} theme - MuiTheme
	 * @returns {TargetAndTransition}
	 */
	isParentNotHovering: theme => ({
		margin: `${0}px`,
		/* NOTE: This will be dynamic i.e. use wants to see the translation and pinyin, then there will be margin */
		marginBottom: '20px',
		width: theme.spacing(25),
		height: theme.spacing(25),
		borderRadius: `${0}px`,
		transition: easeOut,
	}),
};

const cardInnerContainerFrontAnimationVariants = {
	isFlipped: {
		rotateY: -180,
	},
	isNotFlipped: {
		rotateY: 0,
	},
	isFocusMode: {
		width: CARD_FOCUS_MODE_SIZE,
		height: CARD_FOCUS_MODE_SIZE,
	},
	isNotFocusMode: {
		width: CARD_BASE_SIZE,
		height: CARD_BASE_SIZE,
	},
};

const cardInnerContainerBackAnimationVariants = {
	isFlipped: {
		rotateY: 0,
	},
	isNotFlipped: {
		rotateY: 180,
	},
};

const wordActionGroupExit = {
	height: 0,
	opacity: 0,
	overflow: 'hidden',
	transition: { duration: 0.3 },
};

export {
	dropFromTheSky,
	exit,
	spring,
	easeOut,
	cardAnimationVariants,
	cardInnerContainerFrontAnimationVariants,
	cardInnerContainerBackAnimationVariants,
	wordActionGroupExit,
};
