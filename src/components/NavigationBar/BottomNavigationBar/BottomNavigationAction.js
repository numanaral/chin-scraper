import styled from 'styled-components';
import { BottomNavigationAction as MuiBottomNavigationAction } from '@material-ui/core';

const BottomNavigationAction = styled(MuiBottomNavigationAction)`
	${({ theme, $disabled }) => `
		${
			($disabled &&
				`
					& svg {
						fill: ${theme.palette.action.disabled};
					}
					color: ${theme.palette.action.disabled};
				`) ||
			''
		}
	`}
`;

export default BottomNavigationAction;
