import React from 'react';
import StyledWrapper from './StyledWrapper';
import { defaultProps, propTypes } from './types';

/**
 * Element that adds margin to the given direction based on the
 * spacing amount. The amount is passed in to the spacing method
 * of Mui. By default 1-unit-spacing = 8px
 *
 * @example
 * ```js
 * <Spacer direction="right" spacing="5" />
 * ```
 *
 * @component
 */
const Spacer = ({ direction, spacing }) => (
	<StyledWrapper
		$direction={direction}
		$spacing={
			(typeof spacing === 'string' && parseInt(spacing, 10)) || spacing
		}
	/>
);

Spacer.propTypes = propTypes;
Spacer.defaultProps = defaultProps;

export default Spacer;
