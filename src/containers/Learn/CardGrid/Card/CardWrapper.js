import styled from 'styled-components';
import { motion } from 'framer-motion';

import ForwardingDiv from 'components/ForwardingDiv';

const CardWrapper = styled(motion.custom(ForwardingDiv))`
	width: 100%;
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	position: relative;
	${({ theme, $isParentHovering }) => `
		border-radius: ${($isParentHovering && theme.shape.borderRadius) || 0}px;
	`}
`;

export default CardWrapper;
