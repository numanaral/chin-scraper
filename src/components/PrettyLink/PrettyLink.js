import styled from 'styled-components';

const PrettyLink = styled.a`
	${({ theme, $arrow, $color }) => `
		position: relative;
		display: inline-block;
		color: ${$color || theme.palette.primary.main};
		text-decoration: none;
		${
			$arrow
				? `
					&::after {
						position: absolute;
						margin-left: 5px;
						transition: margin 0.25s ease-out;
						content: '→';
					}
					&:hover::after {
						margin-left: 10px;
					}
				`
				: ''
		}
				

		&::before {
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 1.5px;
			background-color: ${$color || theme.palette.primary.main};
			transform: scaleX(0);
			transform-origin: bottom right;
			transition: transform 0.25s ease-out;
			content: '';
		}
		&:hover::before {
			height: 1.5px;
			transform: scaleX(1);
			transform-origin: bottom left;
		}
	`}
`;

export default PrettyLink;
