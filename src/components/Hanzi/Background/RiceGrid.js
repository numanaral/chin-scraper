import React, { forwardRef, memo } from 'react';

import { propTypes, defaultProps } from './types';

const RiceGrid = memo(
	forwardRef(({ size, color, opacity }, ref) => {
		const StyledLine = props => (
			<line {...props} stroke={color} strokeOpacity={opacity} />
		);
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={size}
				height={size}
				ref={ref}
			>
				<StyledLine x1="0" y1="0" x2={size} y2={size} />
				<StyledLine x1={size} y1="0" x2="0" y2={size} />
				<StyledLine x1={size / 2} y1="0" x2={size / 2} y2={size} />
				<StyledLine x1="0" y1={size / 2} x2={size} y2={size / 2} />
			</svg>
		);
	})
);

RiceGrid.propTypes = propTypes;
RiceGrid.defaultProps = defaultProps;

export default RiceGrid;
