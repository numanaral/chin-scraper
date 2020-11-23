import { Grid, useMediaQuery } from '@material-ui/core';
import styled from 'styled-components';

const Body = styled(Grid)`
	${({ theme }) => {
		const smAndDown = useMediaQuery(t => t.breakpoints.down('sm'));
		// This always appears
		const topNavbarDiff = '64px';
		// This only appears on small device
		const bottomNavbarDiff = (smAndDown && ' + 56px') || '';
		// This only appears on bigger device
		const footerDiff = (!smAndDown && ' + 30px') || '';

		return `
		&.MuiGrid-root {
			// Navigation + Footer + BottomNavbar (if mobile)
			height: calc(100% - (${topNavbarDiff}${bottomNavbarDiff}${footerDiff}));
		}
		padding: ${theme.spacing(3, 0, (smAndDown && 15) || 3)};
	`;
	}}
	position: relative;
	width: 100%;
	overflow: auto;
`;

export default Body;
