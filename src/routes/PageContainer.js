import { Paper, useMediaQuery } from '@material-ui/core';
import styled from 'styled-components';

const PageContainer = styled(Paper)`
	${({ theme }) => {
		const smAndDown = useMediaQuery(t => t.breakpoints.down('sm'));
		const xsAndDown = useMediaQuery(t => t.breakpoints.down('xs'));
		// This always appears
		const topNavbarDiff = '64px';
		// This only appears on small device
		const bottomNavbarDiff = (smAndDown && ' + 56px') || '';
		// This only appears on bigger device
		const footerDiff = (!smAndDown && ' + 30px') || '';
		// Extra padding
		const extraPadding = 10;
		const extraPaddingDiff = ` + ${
			((xsAndDown && 1) || 2) * extraPadding
		}px`;

		return `
			// Navigation + Footer + BottomNavbar (if mobile)
			height: calc(100% - (${topNavbarDiff}${bottomNavbarDiff}${footerDiff}${extraPaddingDiff}));
			top: ${extraPadding}px;
			padding: ${theme.spacing(2)}px;
			${theme.breakpoints.up('md')} {
				padding: ${theme.spacing(10, 5)};
			}
		`;
	}}
	position: relative;
	width: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	text-align: center;
	justify-content: center;
	overflow-y: auto;
	overflow-x: hidden;
`;

export default PageContainer;
