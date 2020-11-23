import React from 'react';
import { Typography, Divider, Grid, Link } from '@material-ui/core';
import styled from 'styled-components';

import { SadIcon } from 'icons';
import Container from '../PageContainer';
import { routerBasePropTypes, routerBaseDefaultProps } from './types';

const StyledSadIcon = styled(SadIcon)`
	font-size: 3rem;
	margin-left: 10px;
`;

const Unauthorized = ({ location }) => {
	const referrer = location?.state?.referrer;
	return (
		<Container>
			<Grid container item alignItems="center" justify="center">
				<Typography variant="h3" component="h1">
					403 - FORBIDDEN
				</Typography>
				<StyledSadIcon />
			</Grid>
			<br />
			<Divider />
			<br />
			<Typography>
				You do not have access to this page!
				{referrer && (
					<>
						<br />
						<br />
						You requested the following url:
						<br />
						<Link href={referrer}>{referrer}</Link>
					</>
				)}
			</Typography>
			<br />
			<Divider />
		</Container>
	);
};

Unauthorized.propTypes = routerBasePropTypes;
Unauthorized.defaultProps = routerBaseDefaultProps;

export default Unauthorized;
