import React from 'react';
import styled from 'styled-components';

import PrettyLink from 'components/PrettyLink';

const Container = styled.div`
	margin-top: 10px;
	right: 10px;
	font-size: 12px;
	@media (min-width: 769px) {
		margin-top: 0;
		top: 10px;
		position: absolute;
	}
`;

const Source = () => (
	<Container>
		<span> Scraped from: </span>
		<PrettyLink href="https://www.hanzi5.com/">Hanzi 5</PrettyLink>
		&nbsp;&&nbsp;
		<PrettyLink href="https://translate.google.com/">
			Google Translate
		</PrettyLink>
		<br />
		Favicon made by&nbsp;
		<PrettyLink
			href="https://www.flaticon.com/authors/freepik"
			title="Freepik"
		>
			Freepik
		</PrettyLink>
		&nbsp;from&nbsp;
		<PrettyLink href="https://www.flaticon.com/" title="Flaticon">
			www.flaticon.com
		</PrettyLink>
		<br />
		<span> App Created By: </span>
		<PrettyLink href="https://numanaral.tech/">Numan Aral</PrettyLink>
		<br />
		<br />
	</Container>
);

export default Source;
