import React, { memo, forwardRef } from 'react';

import Plain from './Plain';
import RiceGrid from './RiceGrid';
import { propTypes, defaultProps } from './types';

const Background = memo(
	forwardRef(({ riceGrid, ...rest }, ref) => {
		const Bg = (riceGrid && RiceGrid) || Plain;
		return <Bg {...rest} ref={ref} />;
	})
);

Background.propTypes = propTypes;
Background.defaultProps = defaultProps;

export default Background;
