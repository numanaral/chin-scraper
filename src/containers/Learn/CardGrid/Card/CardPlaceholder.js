import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@material-ui/core';
import ForwardingDiv from 'components/ForwardingDiv';

const CardPlaceholder = styled(motion.custom(ForwardingDiv))`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	margin: 0px;
	${({ theme, $isParentHovering, $isFocusMode }) => {
		const smAndDown = useMediaQuery(t => t.breakpoints.down('sm'));
		// This always appears
		const topNavbarDiff = '64px';
		// This only appears on small device
		const bottomNavbarDiff = (smAndDown && ' + 56px') || '';
		// This only appears on bigger device
		const footerDiff = (!smAndDown && ' + 30px') || '';

		// Translation & Pinyin height
		const translationAndPinyinDiff = ' + 20px';
		// Extra buttons height
		const extraButtonsDiff = ' + 35px';

		return `		
			border-color: ${theme.palette.background.level1};
			background-color: ${theme.palette.background.level1};
			box-shadow: ${($isParentHovering && theme.shadows[3]) || 'none'};
			${
				($isFocusMode &&
					`
				// Navigation + Footer (if desktop) + BottomNavbar (if mobile)
				height: calc(100% - (${topNavbarDiff}${bottomNavbarDiff}${footerDiff}${translationAndPinyinDiff}${extraButtonsDiff})) !important;
				// some extra push from the top
				top: calc(${topNavbarDiff} + 15px);
				width: 100% !important;
				position: fixed;
				left: 0;
				margin: 0 !important;
			`) ||
				''
			}
		`;
	}}
`;

export default CardPlaceholder;
