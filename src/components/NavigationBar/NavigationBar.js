import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import { useLocation, useHistory } from 'react-router-dom';

import BottomNavigationBar from './BottomNavigationBar';
import TopNavigationBar from './TopNavigationBar';

const NavigationBar = () => {
	const { pathname } = useLocation();
	const { push } = useHistory();
	const onLocationPush = path => () => {
		push(path);
	};

	const smAndDown = useMediaQuery(theme => theme.breakpoints.down('sm'));
	const sharedProps = {
		pathname,
		onLocationPush,
	};

	return (
		<>
			<TopNavigationBar smAndDown={smAndDown} {...sharedProps} />
			{smAndDown && <BottomNavigationBar {...sharedProps} />}
		</>
	);
};

export default NavigationBar;
