import React from 'react';
import styled from 'styled-components';
import { Typography, Divider, Grid, Link } from '@material-ui/core';

import { SadIcon } from 'icons';
import { routerBasePropTypes, routerBaseDefaultProps } from './types';
import Container from '../PageContainer';

const StyledSadIcon = styled(SadIcon)`
	font-size: 3rem;
	margin-left: 10px;
`;

const NotFound = ({ location }) => {
	const referrer = location?.state?.referrer;
	return (
		<Container>
			<Grid container item alignItems="center" justify="center">
				<Typography variant="h3" component="h1">
					404 - PAGE NOT FOUND
				</Typography>
				<StyledSadIcon />
			</Grid>
			<br />
			<Divider />
			<br />
			<Typography>
				The page you are looking for might have been removed had its
				name changed or is temporarily unavailable.
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

NotFound.propTypes = routerBasePropTypes;
NotFound.defaultProps = routerBaseDefaultProps;

export default NotFound;
