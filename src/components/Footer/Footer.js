import React from 'react';
import { Grid, useMediaQuery } from '@material-ui/core';
import styled from 'styled-components';

import { LinkWrapper, TypographyWrapper } from 'routes/pages/About';
import AnimatedHeartIcon from './AnimatedHeartIcon';

const ColoredBox = styled(Grid)`
	${({ theme }) => `
		background-color: ${theme.palette.background.paper};
	`}
	padding: 3px 20px;
	position: fixed;
	bottom: 0;
	width: 100%;
	z-index: 5;
`;

const Footer = () => {
	const smAndDown = useMediaQuery(theme => theme.breakpoints.down('sm'));
	return (
		!smAndDown && (
			<ColoredBox container item alignItems="center" justify="flex-end">
				<TypographyWrapper>Created with</TypographyWrapper>
				<AnimatedHeartIcon />
				<TypographyWrapper>by:&nbsp;</TypographyWrapper>
				<TypographyWrapper>
					<LinkWrapper href="https://numanaral.tech/">
						Numan Aral
					</LinkWrapper>
				</TypographyWrapper>
			</ColoredBox>
		)
	);
};

export default Footer;
