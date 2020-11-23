import styled from 'styled-components';

const StyledContainer = styled.div`
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

export default StyledContainer;
