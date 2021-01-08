import {
	bool,
	string,
	shape,
	oneOfType,
	arrayOf,
	func,
	object,
} from 'prop-types';

import { icon } from 'components/types';

const optionType = oneOfType([
	shape({
		label: string,
		value: string.isRequired,
		icon,
	}),
	string,
]);
const selectedOptionType = oneOfType([string, arrayOf(string)]);
const optionsType = arrayOf(optionType);

const propTypes = {
	label: string.isRequired,
	options: optionsType.isRequired,
	onClick: func.isRequired,
	selected: selectedOptionType,
	icon,
	displaySelected: bool,
	multi: bool,
	small: bool,
	labelKey: string,
	valueKey: string,
	iconMenu: bool,
	menuProps: object,
};

const defaultProps = {
	selected: null,
	icon: null,
	displaySelected: false,
	multi: false,
	small: false,
	labelKey: 'label',
	valueKey: 'value',
	iconMenu: false,
	menuProps: {},
};

export { optionType, selectedOptionType, optionsType, propTypes, defaultProps };
