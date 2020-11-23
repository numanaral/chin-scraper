import { oneOf } from 'prop-types';

const propTypes = {
	size: oneOf(['small', 'medium', 'large']),
	type: oneOf(['linear', 'circular']),
};
const defaultProps = {
	size: 'medium',
	type: 'circular',
};

export { propTypes, defaultProps };
