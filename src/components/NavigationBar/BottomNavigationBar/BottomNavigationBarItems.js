import React from 'react';

import { getElementFromElementOrType } from 'utils/react';
import BottomNavigationAction from './BottomNavigationAction';
import OtherPagesMenu from './OtherPagesMenu';
import {
	bottomNavigationBarItemsPropTypes,
	bottomNavigationBarItemsDefaultProps,
} from './types';

const BottomNavigationBarItems = ({
	pathname,
	onLocationPush,
	label,
	icon,
	to,
	disabled,
	menuItems,
	...rest
}) => {
	const isMenuActive = menuItems
		?.map(item => item.to)
		.some(link => pathname === link);

	return (
		(menuItems && (
			<OtherPagesMenu
				menuItems={menuItems}
				isActive={isMenuActive}
				pathname={pathname}
			/>
		)) || (
			<BottomNavigationAction
				label={label}
				icon={getElementFromElementOrType(icon)}
				onClick={onLocationPush(to)}
				disabled={disabled}
				$disabled={disabled}
				// This will override onClick if needed
				{...rest}
			/>
		)
	);
};

BottomNavigationBarItems.propTypes = bottomNavigationBarItemsPropTypes;
BottomNavigationBarItems.defaultProps = bottomNavigationBarItemsDefaultProps;

export default BottomNavigationBarItems;
