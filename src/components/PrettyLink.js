import styled from 'styled-components';

const PrettyLink = styled.a`
	position: relative;
	display: inline-block;

	/* color: #d36ac2; */
	color: #2196f3;
	text-decoration: none;

	/* .pretty-link:hover {
		color: #c865b9;
		color: #ff4081;
	*/
	${({ arrow }) =>
		arrow
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
			: ''}

	&::before {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;

		/* height: 3px; */
		height: 1.5px;

		/* background-color: #d36ac2; */

		/* background-color: #ff4081; */
		background-color: #2196f3;
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
`;

export default PrettyLink;
