import React from 'react';
import { Divider } from '@material-ui/core';

import DetailTitle from './DetailTitle';
import DetailGroupBody from './DetailGroupBody';

const Details = ({ details }) =>
	details.map(({ title, body }) => (
		<div key={title}>
			{/* GROUP TITLE */}
			<DetailTitle>{title}</DetailTitle>
			<Divider />
			{/* KEY & VALUES */}
			{<DetailGroupBody body={body} />}
			<br />
		</div>
	));

export default Details;
