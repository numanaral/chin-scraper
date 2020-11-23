import React from 'react';
import styled from 'styled-components';
import { AppBar, Toolbar } from '@material-ui/core';

import TooltipButton from 'components/TooltipButton';
import { NAV_LIST } from 'routes/constants';
import WrappedLink from 'components/WrappedLink';
import { topNavigationPropTypes, topNavigationDefaultProps } from './types';
import { ReactComponent as EmperorLogo } from './EmperorLogo.svg';

const StyledAppBar = styled(AppBar)`
	${({ theme }) => `
		background-color: ${theme.palette.background.paper};
	`}
`;

const TopNavigationBar = ({ pathname, onLocationPush, smAndDown }) => (
	<StyledAppBar position="sticky">
		<Toolbar>
			<WrappedLink to="/">
				<EmperorLogo width="40" />
			</WrappedLink>
			&nbsp;&nbsp;
			<WrappedLink variant="h6" to="/">
				Chin Scraper
			</WrappedLink>
			<div style={{ flexGrow: 1 }} />
			{!smAndDown &&
				NAV_LIST.map(({ tooltip, label, icon: Icon, to, ...rest }) => (
					<TooltipButton
						key={label}
						tooltip={tooltip || label}
						onClick={onLocationPush(to)}
						icon={Icon}
						{...(pathname === to && {
							color: 'primary',
						})}
						// This will override onClick if needed
						{...rest}
					/>
				))}
		</Toolbar>
	</StyledAppBar>
);

TopNavigationBar.propTypes = topNavigationPropTypes;
TopNavigationBar.defaultProps = topNavigationDefaultProps;

export default TopNavigationBar;
