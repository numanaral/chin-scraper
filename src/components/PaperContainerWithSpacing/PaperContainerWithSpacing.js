import React, { useState } from 'react';
import { Box, Paper } from '@material-ui/core';
import styled from 'styled-components';

import ContainerWithCenteredItems from 'components/ContainerWithCenteredItems';

const PaperWrapper = styled(Paper)`
	width: 100%;
	text-align: left;
	${({ theme }) => `
		margin-bottom: ${theme.spacing(2)}px;
		background-color: ${theme.palette.background.level1};
	`}
`;

const PaperContainerWithSpacing = props => {
	const [isHovering, setIsHovering] = useState(false);
	const onEnter = () => setIsHovering(true);
	const onLeave = () => setIsHovering(false);

	return (
		<ContainerWithCenteredItems>
			<PaperWrapper
				elevation={(isHovering && 3) || 0}
				onMouseEnter={onEnter}
				onMouseLeave={onLeave}
			>
				<Box py={2} px={4} textAlign="left" {...props} />
			</PaperWrapper>
		</ContainerWithCenteredItems>
	);
};

PaperContainerWithSpacing.propTypes = {};
PaperContainerWithSpacing.defaultProps = {};

export default PaperContainerWithSpacing;
