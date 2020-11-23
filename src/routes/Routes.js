import React from 'react';
import { Redirect, Switch, useLocation } from 'react-router-dom';

import usePageView from 'store/firebase/hooks/usePageView';
import RouteWrapper from './RouteWrapper';

const RedirectToNotFound = () => {
	const { pathname } = useLocation();
	return (
		<RouteWrapper
			exact
			path="*"
			component={
				<Redirect
					to={{
						pathname: '/not-found',
						state: {
							referrer: pathname,
						},
					}}
				/>
			}
		/>
	);
};

const Routes = props => {
	usePageView();
	return (
		<Switch>
			<RedirectToNotFound />
		</Switch>
	);
};

export default Routes;
