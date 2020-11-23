import styled from 'styled-components';

const StyledWrapper = styled.span`
	/* To ensure that the spacer properly exists to space around it */
	width: 1px;
	${({ theme, $direction, $spacing }) => `
		margin-${$direction}: ${theme.spacing($spacing)}px;
	`}
`;

export default StyledWrapper;
