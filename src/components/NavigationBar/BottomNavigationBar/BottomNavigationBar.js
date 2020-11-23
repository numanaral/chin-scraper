import React from 'react';

import { NAV_LIST_MOBILE } from 'routes/constants';
import {
	bottomNavigationPropTypes,
	bottomNavigationDefaultProps,
} from './types';
import BottomNavigation from './BottomNavigation';
import BottomNavigationBarItems from './BottomNavigationBarItems';

const BottomNavigationBar = ({ pathname, onLocationPush }) => (
	<BottomNavigation value={pathname} showLabels>
		{NAV_LIST_MOBILE.map(props => (
			<BottomNavigationBarItems
				key={props.label}
				value={props.to}
				{...props}
				pathname={pathname}
				onLocationPush={onLocationPush}
			/>
		))}
	</BottomNavigation>
);

BottomNavigationBar.propTypes = bottomNavigationPropTypes;
BottomNavigationBar.defaultProps = bottomNavigationDefaultProps;

export default BottomNavigationBar;
