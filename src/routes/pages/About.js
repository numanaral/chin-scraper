import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import PrettyLink from 'components/PrettyLink';
import PageContainer from '../PageContainer';

const LinkWrapper = props => (
	<PrettyLink target="_blank" rel="noopener" {...props} />
);

const TypographyWrapper = props => <Typography variant="caption" {...props} />;

const Spacing = () => (
	<>
		<br />
		<br />
	</>
);

const About = () => (
	<PageContainer>
		<Grid>
			<TypographyWrapper> Translated by: </TypographyWrapper>
			<LinkWrapper href="https://translate.google.com/">
				Google Translate
			</LinkWrapper>
			<Spacing />
			<TypographyWrapper> Hanzi Writer & Quiz by: </TypographyWrapper>
			<LinkWrapper href="https://hanziwriter.org/">
				Hanzi Writer
			</LinkWrapper>
			<Spacing />
			<TypographyWrapper>
				Character &quot;More Info&quot; scraped from:{' '}
			</TypographyWrapper>
			<LinkWrapper href="https://dictionary.hantrainerpro.com/">
				Han Trainer Pro
			</LinkWrapper>
			<Spacing />
			<TypographyWrapper> Logo created by </TypographyWrapper>
			<LinkWrapper
				href="https://www.flaticon.com/authors/freepik/"
				title="Freepik"
			>
				Freepik
			</LinkWrapper>
			<TypographyWrapper> from </TypographyWrapper>
			<LinkWrapper href="https://www.flaticon.com/" title="Flaticon">
				Flat Icon
			</LinkWrapper>
			<Spacing />
			<TypographyWrapper> App Created By: </TypographyWrapper>
			<LinkWrapper href="https://numanaral.tech/">Numan Aral</LinkWrapper>
		</Grid>
	</PageContainer>
);

export default About;
