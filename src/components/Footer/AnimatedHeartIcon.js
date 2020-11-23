import styled, { keyframes } from 'styled-components';
import { HeartIcon } from 'icons';

const heartPumpingKeyframes = keyframes`
	0% {
		transform: scale(1);
	}
	20% {
		transform: scale(1.3);
	}
	32% {
		transform: scale(1);
	}
	48% {
		transform: scale(1.3);
	}
	80% {
		transform: scale(1);
	}
	100% {
		transform: scale(1);
	}
`;

const AnimatedHeartIcon = styled(HeartIcon)`
	${({ theme }) => `
		width: ${theme.spacing(2)}px;
	`}
	&.MuiSvgIcon-root {
		fill: #fb4a59;
		margin: 0 5px;
		animation: ${heartPumpingKeyframes} 0.8s infinite;
	}
`;

export default AnimatedHeartIcon;
