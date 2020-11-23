import styled from 'styled-components';

import Menu from 'components/Menu';

const MenuAsBottomNavigationAction = styled(Menu)`
	${({ theme, $isActive }) => {
		const color = `${
			($isActive && theme.palette.primary.main) ||
			theme.palette.text.secondary
		}`;
		return `
			& .MuiListItem-root {
				max-width: 168px;
				min-width: 80px;
				color: ${color};
				flex-direction: column;
				padding: 0;
				${($isActive && 'opacity: 1') || 'opacity: 0.7'}
			}
			& .MuiListItemIcon-root {
				color: ${color};
				justify-content: center;
				min-width: 40px;
			}
			& .MuiListItemText-root {
				margin: 0;
			}
			& .MuiListItemText-primary {
				font-family: ${theme.typography.fontFamily};
				font-size: ${theme.typography.pxToRem(($isActive && 14) || 12)};
				opacity: 1;
				transition: font-size 0.2s, opacity 0.2s;
				transition-delay: 0.1s;
				text-transform: capitalize;
			}
		`;
	}}
`;

export default MenuAsBottomNavigationAction;
