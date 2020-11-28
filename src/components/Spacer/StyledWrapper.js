import styled from 'styled-components';

const StyledWrapper = styled.span`
	display: block;
	width: 100%;
	${({ theme, $direction, $spacing }) => `
		margin-${$direction}: ${theme.spacing($spacing)}px;
	`}
`;

export default StyledWrapper;
