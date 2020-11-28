import React from 'react';
import { Typography } from '@material-ui/core';

import ResponsiveCenteredContainer from 'components/ResponsiveCenteredContainer';
import ContainerWithCenteredItems from 'components/ContainerWithCenteredItems';
import PaperContainerWithSpacing from 'components/PaperContainerWithSpacing';
import { propTypes, defaultProps } from './types';

const TranslationResult = ({ original, translation, pinyin }) => (
	<ResponsiveCenteredContainer>
		<ContainerWithCenteredItems>
			<PaperContainerWithSpacing textAlign="center">
				<Typography> {original} </Typography>
				<Typography> {pinyin} </Typography>
				<Typography> {translation} </Typography>
			</PaperContainerWithSpacing>
		</ContainerWithCenteredItems>
	</ResponsiveCenteredContainer>
);

TranslationResult.propTypes = propTypes;
TranslationResult.defaultProps = defaultProps;

export default TranslationResult;
