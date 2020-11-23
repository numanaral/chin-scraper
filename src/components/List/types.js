import {
	arrayOf,
	bool,
	element,
	number,
	object,
	oneOfType,
	shape,
	string,
} from 'prop-types';

const sectionTitlePropTypes = {
	id: string.isRequired,
	primary: string.isRequired,
	secondary: string,
};

const sectionTitleDefaultProps = {
	secondary: '',
};

const listPropTypes = shape({
	list: arrayOf(oneOfType([string, number, bool, element])).isRequired,
	/* eslint-disable react/forbid-prop-types */
	listProps: object,
	listItemProps: object,
	/* eslint-enable react/forbid-prop-types */
}).isRequired;

const listDefaultProps = {
	list: [],
	listProps: {},
	listItemProps: {},
};

export {
	sectionTitlePropTypes,
	sectionTitleDefaultProps,
	listPropTypes,
	listDefaultProps,
};
