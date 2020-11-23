import React, { useState } from 'react';
import { Box, Typography } from '@material-ui/core';

import ContainerWithCenteredItems from 'components/ContainerWithCenteredItems';
import { propTypes, defaultProps } from './types';
import ColoredPaper from './ColoredPaper';

const TranslationResult = ({ original, translation, pinyin }) => {
	const [isHovering, setIsHovering] = useState(false);
	const onEnter = () => setIsHovering(true);
	const onLeave = () => setIsHovering(false);

	return (
		<ContainerWithCenteredItems>
			<ColoredPaper
				elevation={(isHovering && 3) || 0}
				onMouseEnter={onEnter}
				onMouseLeave={onLeave}
			>
				<Box py={2} px={4} textAlign="left">
					<Typography> {original} </Typography>
					<Typography> {pinyin} </Typography>
					<Typography> {translation} </Typography>
				</Box>
			</ColoredPaper>
		</ContainerWithCenteredItems>
	);
};

TranslationResult.propTypes = propTypes;
TranslationResult.defaultProps = defaultProps;

export default TranslationResult;
