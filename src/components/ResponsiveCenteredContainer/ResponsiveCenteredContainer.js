import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	width: 100%;
`;

const CenteredContainer = styled.div`
	margin: auto;
	width: 90%;
	${({ theme }) => `
		${theme.breakpoints.up('sm')} {
			width: 70%;
		}
		${theme.breakpoints.up('md')} {
			width: 50%;
		}
		${theme.breakpoints.up('lg')} {
			width: 50%;
		}
	`}
`;

const ResponsiveCenteredContainer = props => (
	<Wrapper>
		<CenteredContainer {...props} />
	</Wrapper>
);

export default ResponsiveCenteredContainer;
