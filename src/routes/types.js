import { arrayOf, element, string } from 'prop-types';

const routeWrapperPropTypes = {
	component: element.isRequired,
	roles: arrayOf(string),
};
const routeWrapperDefaultProps = {
	roles: [],
};

export { routeWrapperPropTypes, routeWrapperDefaultProps };
