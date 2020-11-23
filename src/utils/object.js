const addToArray = (arr, item, where = 'first') =>
	where === 'first' ? [item, ...arr] : [...arr, item];

const editItemInArray = (arr, ind, newItem) => [
	...arr.slice(0, ind),
	newItem,
	...arr.slice(ind + 1),
];

const removeItemInArray = (arr, ind) => [
	...arr.slice(0, ind),
	...arr.slice(ind + 1),
];

const isEmptyObject = obj => {
	if (!obj) return true;
	if (Array.isArray(obj)) return obj.length < 1;
	return Object.keys(obj).length < 1;
};

/** @see https://stackoverflow.com/a/12646864/13161405 */
const shuffleArray = array => {
	const clone = [...array];
	for (let i = clone.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[clone[i], clone[j]] = [clone[j], clone[i]];
	}
	return clone;
};

const getSmallest = (...args) => args.sort((a, b) => a - b)[0];

/**
 * Returns true if at least one source value is contained in the
 * from array
 *
 * @example
 * // Does user have any roles that match access roles?
 * const userRoles = ['A'];
 * const canAccessRoles = ['A', 'B'];
 * hasAnyFrom(canAccessRoles, userRoles) === true // true
 * @param {Array} source - List to match at least 1 element with
 * @param {Array} list - List to check if the element exists
 */
const hasAnyFrom = (source, from) =>
	source?.length === 0 || source.some(e => from.indexOf(e) >= 0);

export {
	addToArray,
	editItemInArray,
	isEmptyObject,
	removeItemInArray,
	shuffleArray,
	getSmallest,
	hasAnyFrom,
};
