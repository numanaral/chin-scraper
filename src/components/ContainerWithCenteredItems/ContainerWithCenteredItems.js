import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';

import { propTypes, defaultProps } from './types';

const StyledGrid = styled(Grid)`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	${({ $horizontal, $vertical }) => `
		${$horizontal && 'justify-content: center;'}
		${$vertical && 'height: 100%; align-items: center;'}
	`}
`;

/**
 * Centered Grid
 *
 * @component
 * @param {import('@material-ui/core').GridProps|import('react').HtmlHTMLAttributes}
 */
const ContainerWithCenteredItems = ({
	children,
	horizontal,
	vertical,
	...rest
}) => (
	<StyledGrid $horizontal={horizontal} $vertical={vertical} {...rest}>
		{children}
	</StyledGrid>
);

ContainerWithCenteredItems.propTypes = propTypes;
ContainerWithCenteredItems.defaultProps = defaultProps;

export default ContainerWithCenteredItems;
