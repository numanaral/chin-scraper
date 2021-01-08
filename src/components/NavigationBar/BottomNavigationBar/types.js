import { arrayOf, bool, shape, string } from 'prop-types';

import {
	navigationItemProps,
	sharedNavigationPropTypes,
	sharedNavigationTypesDefaultProps,
} from '../types';

const bottomNavigationPropTypes = {
	...sharedNavigationPropTypes,
};

const bottomNavigationDefaultProps = {
	...sharedNavigationTypesDefaultProps,
};

const bottomNavigationActionType = shape(navigationItemProps);

const bottomNavigationBarItemsPropTypes = {
	...sharedNavigationPropTypes,
	...navigationItemProps,
	menuItems: arrayOf(bottomNavigationActionType),
};

const bottomNavigationBarItemsDefaultProps = {
	...sharedNavigationTypesDefaultProps,
};

const otherPagesMenuPropTypes = {
	menuItems: arrayOf(bottomNavigationActionType),
	isActive: bool.isRequired,
	pathname: string.isRequired,
};

const otherPagesMenuDefaultProps = {};

export {
	bottomNavigationBarItemsPropTypes,
	bottomNavigationBarItemsDefaultProps,
	bottomNavigationPropTypes,
	bottomNavigationDefaultProps,
	otherPagesMenuPropTypes,
	otherPagesMenuDefaultProps,
};
