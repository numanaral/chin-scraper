import {
	element,
	elementType,
	func,
	instanceOf,
	number,
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
 * @implements { ReadonlyArray<T>, Color }
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
 * @implements { ReadonlyArray<T>, ButtonSize }
 * @returns { Requireable<T> }
 */
const size = oneOf(['small', 'medium', 'large']);

/**
 * @implements { ReadonlyArray<T>, ButtonVariant }
 * @returns { Requireable<T> }
 */
const buttonVariant = oneOf(['text', 'outlined', 'contained']);

/**
 * @returns {Requireable<NonNullable<InferType<T>>>}
 */
const numberOrString = oneOfType([number, string]);

const refType = oneOfType([func, shape({ current: instanceOf(Element) })]);

export {
	elementOrType,
	icon,
	color,
	direction,
	size,
	buttonVariant,
	numberOrString,
	refType,
};
