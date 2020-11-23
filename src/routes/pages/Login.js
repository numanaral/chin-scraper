import React from 'react';
import styled from 'styled-components';
import { Divider, Grid, Typography } from '@material-ui/core';

import { SadIcon } from 'icons';
import LoadingIndicator from 'components/LoadingIndicator';
import { routerBasePropTypes, routerBaseDefaultProps } from './types';
import Container from '../PageContainer';

const StyledSadIcon = styled(SadIcon)`
	font-size: 3rem;
	margin-left: 10px;
`;

const Login = ({ error }) => {
	return (
		<Container>
			<Grid container item alignItems="center" justify="center">
				<Typography variant="h3" component="h1">
					{(error && 'AUTHENTICATION FAILED') || 'AUTHENTICATING'}
				</Typography>
				{(error && <StyledSadIcon />) || <LoadingIndicator />}
			</Grid>
			{error && (
				<>
					<br />
					<Divider />
					<br />
					<Typography>{error}</Typography>
					<br />
					<Divider />
				</>
			)}
		</Container>
	);
};

Login.propTypes = routerBasePropTypes;
Login.defaultProps = routerBaseDefaultProps;

export default Login;
