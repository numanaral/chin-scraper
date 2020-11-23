import React from 'react';
import { LinearProgress, CircularProgress } from '@material-ui/core';
import styled from 'styled-components';

import { propTypes, defaultProps } from './types';

const StyledDiv = styled.div`
	justify-content: center;
	align-items: center;
	display: flex;
	vertical-align: middle;
`;

const LoadingIndicator = ({ type, size, ...rest }) => {
	let iconSize = 40;
	if (size === 'small') iconSize = 20;
	else if (size === 'large') iconSize = 80;

	return (
		<StyledDiv>
			{type === 'linear' ? (
				<LinearProgress size={iconSize} {...rest} />
			) : (
				<CircularProgress size={iconSize} {...rest} />
			)}
		</StyledDiv>
	);
};

LoadingIndicator.propTypes = propTypes;
LoadingIndicator.defaultProps = defaultProps;

export default LoadingIndicator;
