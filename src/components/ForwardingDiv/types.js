import { elementType, string } from 'prop-types';

const propTypes = {
	className: string,
	component: elementType,
};
const defaultProps = {
	className: '',
	component: 'div',
};

export { propTypes, defaultProps };
