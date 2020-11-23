import React from 'react';
import { Link } from '@material-ui/core';
import { Link as ReactRouterLink } from 'react-router-dom';

const WrappedLink = props => (
	<Link
		component={ReactRouterLink}
		underline="none"
		color="textPrimary"
		{...props}
	/>
);

export default WrappedLink;
