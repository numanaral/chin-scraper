import React from 'react';
import { Link } from '@material-ui/core';
import { Link as ReactRouterLink } from 'react-router-dom';
import { BASE_PATH } from 'routes/constants';

const WrappedLink = ({ to, ...rest }) => (
	<Link
		component={ReactRouterLink}
		underline="none"
		color="textPrimary"
		to={BASE_PATH + to}
		{...rest}
	/>
);

export default WrappedLink;
