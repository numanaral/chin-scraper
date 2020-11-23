import { Grid } from '@material-ui/core';
import styled from 'styled-components';

const Background = styled(Grid)`
	${({ theme }) => `
		background-color: ${theme.palette.background.default};
		height: 100%;
	`}
`;

export default Background;
