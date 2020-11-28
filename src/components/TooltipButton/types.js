import { bool, func, oneOf, string } from 'prop-types';

import { icon, color, buttonVariant } from 'components/types';

const buttonTypes = oneOf(['submit', 'reset', 'button']);

/** PropTypes */
const propTypes = {
	// ========== Tooltip props ==========
	/**
	 * - Tooltip to display
	 */
	tooltip: string.isRequired,
	interactive: bool,
	// ========== Button props ==========
	onClick: func,
	/**
	 * - Background color variant
	 * - 'default' | 'primary' | 'secondary' |
	 * 'error' | 'warning' | 'info' | 'success'
	 */
	bg: color,
	icon,
	disabled: bool,
	type: buttonTypes,
	preventDefaultEvent: bool,
	displayTooltipOnClickForMobile: bool,
	loading: bool,
	// ========== TextButton props ==========
	/**
	 * - Text to display in a text button
	 * - If filled, generates a TextTooltipButton
	 */
	text: string,
	variant: buttonVariant,
};
const defaultProps = {
	// Tooltip props
	interactive: false,
	// Button props
	onClick: null,
	bg: 'default',
	icon: null,
	disabled: false,
	type: 'button',
	preventDefaultEvent: false,
	displayTooltipOnClickForMobile: true,
	loading: false,
	// TextButton props
	text: null,
	variant: 'contained',
};

export { buttonTypes, propTypes, defaultProps };
