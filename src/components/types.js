import {
	element,
	elementType,
	func,
	instanceOf,
	number,
	object,
	oneOf,
	oneOfType,
	shape,
	string,
} from 'prop-types';

/**
 * @returns {Requireable<NonNullable<InferType<T>>>}
 */
const elementOrType = oneOfType([element, elementType]);
const icon = elementOrType;

/**
 * @returns { Requireable<T> }
 */
const color = oneOf([
	'default',
	'primary',
	'secondary',
	'error',
	'warning',
	'info',
	'success',
]);

/**
 * @returns { Requireable<T> }
 */
const direction = oneOf(['top', 'right', 'bottom', 'left']);

/**
 * @returns { Requireable<T> }
 */
const size = oneOf(['small', 'medium', 'large']);

/**
 * @returns { Requireable<T> }
 */
const iconSize = oneOf(['default', 'inherit', 'large', 'small']);

/**
 * @returns { Requireable<T> }
 */
const buttonVariant = oneOf(['text', 'outlined', 'contained']);

/**
 * @returns {Requireable<NonNullable<InferType<T>>>}
 */
const numberOrString = oneOfType([number, string]);

const refType = oneOfType([func, shape({ current: instanceOf(Element) })]);

// TODO: Fill this out properly
const theme = object;

export {
	elementOrType,
	icon,
	color,
	direction,
	size,
	buttonVariant,
	numberOrString,
	refType,
	theme,
	iconSize,
};
