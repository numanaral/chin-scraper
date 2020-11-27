import React, { cloneElement } from 'react';
import Helmet from 'react-helmet';
// TODO: Will add these as we progress
// import { useSelector } from 'react-redux';
import { Route, useHistory, useLocation } from 'react-router-dom';

// TODO: Will add these as we progress
// import {
// 	makeSelectUserRoles,
// 	makeSelectUserName,
// 	makeSelectUserAuthError,
// 	makeSelectUserAuthPending,
// } from 'store/reducers/userReducer/selectors';
import ErrorBoundary from 'components/ErrorBoundary';
import loadable from 'utils/loadable';
import { hasAnyFrom } from 'utils/object';
import { routeWrapperPropTypes, routeWrapperDefaultProps } from './types';
import { BASE_PATH } from './constants';

const LazyUnauthorized = loadable(() => import('./pages/Unauthorized'));
const LazyLogin = loadable(() => import('./pages/Login'));

/**
 * LOGIC:
 * - If the requested path requires roles and app is fetching the user data from the login request
 * 	- Redirect to Login w/o error
 * 	- This triggers a loading screen with the message "Authorizing"
 * - If the user is not logged in (userName === '')
 * 	- If the requested path requires roles and we are not back at the /login
 * 		- Redirect to login with returnUrl
 * 	- If the path is /login
 * 		- If there was a user error or referrer requires roles and the user is not logged in
 * 			- Redirect to login w/ error message asking user to log in
 * - If requested path requires roles
 * 	- If user is trying to access '/login' or '/unauthorized'
 * 		- Redirect back to '/' (root)
 * 	- If user doesn't have the required roles
 * 		- Redirect to Unauthorized
 * - Else access the path
 */
const RouteWrapper = ({
	component: Component,
	roles,
	themeProps,
	title,
	description,
	...rest
}) => {
	// TODO: Will add these as we progress
	// const userName = useSelector(makeSelectUserName());
	// const userRoles = useSelector(makeSelectUserRoles());
	// const userAuthError = useSelector(makeSelectUserAuthError());
	// const userAuthPending = useSelector(makeSelectUserAuthPending());

	// NOTE: Commented out lines are temporary test cases.
	const userName = ''; // Either public user or haven't gotten the user data yet
	// const userName = 'test'; // TEST: Logged in user
	const userRoles = []; // Public user or user without any roles
	// const userRoles = ['LoggedInUser']; // TEST: User w/ required roles
	const userAuthError = ''; // Either public user or logged in user
	// const userAuthError = 'Temp auth failed'; // TEST: Some error with login, i.e. wrong credentials
	const userAuthPending = false; // Either public user or is logged in
	// const userAuthPending = true; // TEST: User data is being fetched

	const {
		push,
		location: { state },
	} = useHistory();
	const { pathname } = useLocation();
	const referrerRoles = state?.roles || [];

	const isAuthRequired = roles.length;
	const isReferrerAuthRequired = referrerRoles.length;
	const requiredRoles = (isAuthRequired && roles) || referrerRoles;

	const render = renderProps => {
		if (isAuthRequired && userAuthPending) {
			return <LazyLogin {...renderProps} authorizing />;
		}
		if (!userName) {
			if (isAuthRequired && pathname !== '/login') {
				push(`${BASE_PATH}/login?returnUrl=${pathname}`, { roles });
			}

			if (pathname === '/login') {
				if (
					userAuthError ||
					(isReferrerAuthRequired && !userAuthPending)
				)
					return (
						<LazyLogin
							{...renderProps}
							error={userAuthError || 'Please login to continue'}
						/>
					);
			}
		}

		if (isAuthRequired) {
			// If logged in, don't allow to /login or /unauthorized directly
			if (pathname === '/login' || pathname === '/unauthorized') {
				push(`${BASE_PATH}/learn`);
			}

			if (!hasAnyFrom(requiredRoles, userRoles)) {
				return <LazyUnauthorized {...renderProps} />;
			}
		}

		return (
			<>
				{title && (
					<Helmet>
						<title>{title}</title>
						<meta name="description" content={description} />
					</Helmet>
				)}
				{cloneElement(Component, { ...renderProps, themeProps })}
			</>
		);
	};

	return (
		<ErrorBoundary>
			<Route render={render} {...rest} />
		</ErrorBoundary>
	);
};

RouteWrapper.propTypes = routeWrapperPropTypes;
RouteWrapper.defaultProps = routeWrapperDefaultProps;

export default RouteWrapper;
