import styled from 'styled-components';
import { motion } from 'framer-motion';

import ForwardingDiv from 'components/ForwardingDiv';

const CardInnerContainerBack = styled(motion.custom(ForwardingDiv))`
	height: 100%;
	width: 100%;
	position: absolute;
	backface-visibility: hidden;
	overflow: auto;
	${({ theme, $isFlipped }) => `
		padding: ${theme.spacing(1)}px 0;
		display: ${($isFlipped && 'flex') || 'none'}
	`}
`;

export default CardInnerContainerBack;
