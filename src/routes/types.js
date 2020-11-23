import { arrayOf, element, string } from 'prop-types';

const routeWrapperPropTypes = {
	component: element.isRequired,
	roles: arrayOf(string),
	title: string,
	description: string,
};
const routeWrapperDefaultProps = {
	roles: [],
	title: '',
	description: '',
};

export { routeWrapperPropTypes, routeWrapperDefaultProps };
