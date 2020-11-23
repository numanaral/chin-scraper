import styled from 'styled-components';
import { motion } from 'framer-motion';

import ForwardingDiv from 'components/ForwardingDiv';

const ExtrasContainer = styled(motion.custom(ForwardingDiv))`
	${({ theme, $position, $isHovering, $isParentHovering }) => `
		background-color: ${theme.palette.background.level2};
		${($position !== 'top' && `box-shadow: ${theme.shadows[3]};`) || ''}
		${
			($isParentHovering &&
				`
			border-${$position}-right-radius: ${theme.shape.borderRadius}px;
			border-${$position}-left-radius: ${theme.shape.borderRadius}px;
		`) ||
			''
		}
		${$position}: -${($position === 'top' && (($isHovering && 11) || 20)) || 35}px;
	`}
	& .MuiIconButton-root {
		padding: 10px;
	}
	width: 100%;
	/* height: auto !important; */
	display: flex;
	justify-content: space-evenly;
	z-index: 1;
	position: absolute;
`;

export default ExtrasContainer;
