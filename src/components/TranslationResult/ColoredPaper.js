import { Paper } from '@material-ui/core';
import styled from 'styled-components';

const ColoredPaper = styled(Paper)`
	${({ theme }) => `
		margin: ${theme.spacing(2, 0)};
		background-color: ${theme.palette.background.level1};
		text-align: left;
	`}
`;

export default ColoredPaper;
