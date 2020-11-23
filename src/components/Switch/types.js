import { string, bool, func } from 'prop-types';

const propTypes = {
	label: string.isRequired,
	name: string.isRequired,
	checked: bool.isRequired,
	onCheck: func.isRequired,
	color: string,
};

const defaultProps = {
	color: 'primary',
};

export { propTypes, defaultProps };
