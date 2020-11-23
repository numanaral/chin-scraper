import styled from 'styled-components';
import { motion } from 'framer-motion';

import ForwardingDiv from 'components/ForwardingDiv';

const CardContainer = styled(motion.custom(ForwardingDiv))`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	${({ theme }) => `
		padding: ${theme.spacing(1)}px;
		background-color: ${theme.palette.background.level1};
		background-color: ${theme.palette.background.level1};
	`}
`;

export default CardContainer;
