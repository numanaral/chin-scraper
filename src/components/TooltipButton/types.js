import { bool, func, oneOf, string } from 'prop-types';

import { icon, color, iconSize, buttonVariant } from 'components/types';

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
	 * - 'default' | 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'
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
	// ========== IconButton props ==========
	/**
	 * - Icon size
	 * - 'small' | 'large' | 'inherit' | 'default'
	 * - 'inherit' loading size is same as default
	 */
	iconSize,
};
const defaultProps = {
	// Tooltip defaultProps
	interactive: false,
	// Button defaultProps
	onClick: null,
	bg: 'default',
	icon: null,
	disabled: false,
	type: 'button',
	preventDefaultEvent: false,
	displayTooltipOnClickForMobile: true,
	loading: false,
	// TextButton defaultProps
	text: null,
	variant: 'contained',
	// IconButton defaultProps
	iconSize: 'default',
};

export { buttonTypes, propTypes, defaultProps };
