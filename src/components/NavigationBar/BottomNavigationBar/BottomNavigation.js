import styled from 'styled-components';
import { BottomNavigation as MuiBottomNavigation } from '@material-ui/core';

const BottomNavigation = styled(MuiBottomNavigation)`
	${({ theme }) => `
		background-color: ${theme.palette.background.paper};
	`}
	position: fixed;
	bottom: 0;
	width: 100%;
	z-index: 5;
`;

export default BottomNavigation;
