import { direction, numberOrString } from 'components/types';

const propTypes = {
	/**
	 * - Which direction do you want to apply margin to
	 */
	direction: direction.isRequired,
	/**
	 * - The amount is passed in to the spacing method of Mui.
	 * - By default 1-unit-spacing = 8px
	 */
	spacing: numberOrString,
};
const defaultProps = {
	spacing: 1,
};

export { propTypes, defaultProps };
