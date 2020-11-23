import { shape, string, bool, arrayOf, func, any } from 'prop-types';

import { icon, size } from 'components/types';

const toggleOptionItemType = shape({
	// eslint-disable-next-line react/forbid-prop-types
	value: any.isRequired,
	label: string.isRequired,
	icon,
	disabled: bool,
}).isRequired;

const toggleOptionsType = arrayOf(toggleOptionItemType);

const propTypes = {
	value: any.isRequired,
	onChange: func.isRequired,
	/**
	 * - [
	 *     {
	 *         value: 'dark',
	 *         label: 'Dark',
	 *         icon: <DarkThemeIcon color="primary" />,
	 *     },
	 *     {
	 *         value: 'light',
	 *         label: 'Light',
	 *         icon: <LightThemeIcon style={{ color: yellow[500] }} />,
	 *     },
	 * ]
	 */
	options: toggleOptionsType.isRequired,
	exclusive: bool,
	size,
};

const defaultProps = {
	exclusive: true,
	size: 'small',
};

export { toggleOptionItemType, toggleOptionsType, propTypes, defaultProps };
