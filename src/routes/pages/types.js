const { shape, string } = require('prop-types');

const routerBasePropTypes = {
	location: shape({
		search: string,
		state: shape({
			referrer: string,
			to: string,
		}),
	}).isRequired,
	error: string,
};

const routerBaseDefaultProps = {
	error: '',
};

export { routerBasePropTypes, routerBaseDefaultProps };
