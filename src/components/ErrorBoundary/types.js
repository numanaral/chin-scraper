import { element, string } from 'prop-types';

const propTypes = {
	title: string,
	children: element.isRequired,
};

const defaultProps = {
	title: 'Error fetching the module.',
};

export { propTypes, defaultProps };
