import React, { memo } from 'react';

import { propTypes, defaultProps } from './types';
import Background from './Background';

const Hanzi = memo(({ innerRef, size, riceGrid }) => (
	<Background size={size} riceGrid={riceGrid} ref={innerRef} />
));

Hanzi.propTypes = propTypes;
Hanzi.defaultProps = defaultProps;

export default Hanzi;
