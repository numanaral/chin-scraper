import styled from 'styled-components';
import { motion } from 'framer-motion';

import ForwardingDiv from 'components/ForwardingDiv';

const CardInnerContainerFront = styled(motion.custom(ForwardingDiv))`
	backface-visibility: hidden;
	position: relative;
`;

export default CardInnerContainerFront;
