import { array, arrayOf, bool, node, object, oneOfType } from 'prop-types';

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
	details: arrayOf(object),
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
