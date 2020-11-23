import { isValidElement, createElement } from 'react';

/**
 * Takes in an element or elementType and returns the element or
 * creates it
 *
 * @example
 ```jsx
 * const IconWrapper = ({ icon }) => (
 * 	<SomeWrapper>
 * 		{icon}
 * 	</SomeWrapper>
 * );
 * 
 * import Icon from 'some-icon-lib';
 * 
 * // When you need the default component
 * <IconWrapper icon={Icon} />
 * 
 * // When you need to customize the component
 * <IconWrapper icon={<Icon color="#123456" />} />
 ```
 *
 * @param {import('react').FunctionComponent<P>|import('react').ComponentClass<P, any>|String} elementOrType
 * - Element or Type
 * @template P
 * 
 * @returns {JSX.Element|null}
 */
const getElementFromElementOrType = elementOrType =>
	elementOrType
		? (isValidElement(elementOrType) && elementOrType) ||
		  createElement(elementOrType)
		: null;

export { getElementFromElementOrType };
