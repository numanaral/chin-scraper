import { bool, string, func } from 'prop-types';

import { icon } from 'components/types';

const navigationItemProps = {
	label: string.isRequired,
	tooltip: string,
	to: string,
	icon,
	onClick: func,
	disabled: bool,
};

const sharedNavigationPropTypes = {
	pathname: string.isRequired,
	onLocationPush: func.isRequired,
};

const sharedNavigationTypesDefaultProps = {
	disabled: false,
	icon: null,
};

const topNavigationPropTypes = {
	...sharedNavigationPropTypes,
	smAndDown: bool.isRequired,
};

const topNavigationDefaultProps = {};

export {
	navigationItemProps,
	sharedNavigationPropTypes,
	sharedNavigationTypesDefaultProps,
	topNavigationPropTypes,
	topNavigationDefaultProps,
};
