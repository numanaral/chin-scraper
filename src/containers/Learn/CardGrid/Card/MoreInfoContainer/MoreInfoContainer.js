import React, { memo } from 'react';
import { Box } from '@material-ui/core';

import Details from './Details';
import {
	moreInfoContainerPropTypes,
	moreInfoContainerDefaultProps,
} from './types';

const MoreInfoContainer = memo(({ details }) => (
	<Box p={1} width="100%" height="100%">
		<Details details={details} />
	</Box>
));

MoreInfoContainer.propTypes = moreInfoContainerPropTypes;
MoreInfoContainer.defaultProps = moreInfoContainerDefaultProps;

export default MoreInfoContainer;
