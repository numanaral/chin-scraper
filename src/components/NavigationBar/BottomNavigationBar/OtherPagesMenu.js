import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { MenuIcon } from 'icons';
import MenuAsBottomNavigationAction from './MenuAsBottomNavigationAction';
import { otherPagesMenuPropTypes, otherPagesMenuDefaultProps } from './types';

const OtherPagesMenu = ({ menuItems, isActive, pathname }) => {
	const [selected, setSelected] = useState(pathname);
	const { push } = useHistory();
	const onClick = value => {
		const { onClick: menuItemOnClick } = menuItems.find(
			item => item.to === value
		);

		// If there is already an onClick event
		// We want to call that instead of
		// triggering a page push event
		if (menuItemOnClick) {
			menuItemOnClick();
			return;
		}

		setSelected(value);
		push(value);
	};
	const props = {
		label: 'Menu',
		options: menuItems.map(item => ({
			label: item.label,
			value: item.to || item.label,
			icon: item.icon,
		})),
		onClick,
		selected: (isActive && selected) || '',
		icon: MenuIcon,
		// displaySelected: true,
		small: true,
	};

	return (
		<MenuAsBottomNavigationAction
			component={Button}
			$isActive={isActive}
			{...props}
		/>
	);
};

OtherPagesMenu.propTypes = otherPagesMenuPropTypes;
OtherPagesMenu.defaultProps = otherPagesMenuDefaultProps;

export default OtherPagesMenu;
