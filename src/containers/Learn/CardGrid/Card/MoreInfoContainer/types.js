import { array, bool, node, object, oneOfType } from 'prop-types';

import { cardProps } from '../../types';

const detailGroupBodyPropTypes = {
	body: oneOfType([object, array]),
};
const detailGroupBodyDefaultProps = {
	body: [],
};

const detailTitlePropTypes = {
	isKey: bool,
	children: node,
};
const detailTitleDefaultProps = {
	isKey: false,
	children: '',
};

const moreInfoContainerPropTypes = {
	isVisible: bool.isRequired,
	...cardProps,
};
const moreInfoContainerDefaultProps = {};

export {
	detailGroupBodyPropTypes,
	detailGroupBodyDefaultProps,
	detailTitlePropTypes,
	detailTitleDefaultProps,
	moreInfoContainerPropTypes,
	moreInfoContainerDefaultProps,
};
