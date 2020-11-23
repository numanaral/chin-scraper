import { bool, node } from 'prop-types';

const propTypes = {
	children: node.isRequired,
	horizontal: bool,
	vertical: bool,
};

const defaultProps = {
	horizontal: true,
	vertical: false,
};

export { propTypes, defaultProps };
