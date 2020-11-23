import React from 'react';
import { Redirect } from 'react-router-dom';

import loadable from 'utils/loadable';
import {
	PreferenceIcon,
	AccountIcon,
	InfoIcon,
	BugReportIcon,
	AnalyticsIcon,
	LearnIcon,
	GestureIcon,
} from 'icons';

/* eslint-disable prettier/prettier */
const AsyncLearn = loadable(() => import(`routes/pages/Learn`), 'large');
const AsyncPractice = loadable(() => import(`routes/pages/Practice`), 'large');
const AsyncPreferences = loadable(() => import(`routes/pages/Preferences`), 'large');
const AsyncAnalytics = loadable(() => import(`routes/pages/Analytics`), 'large');
const AsyncAbout = loadable(() => import(`routes/pages/About`), 'large');
const AsyncNotFound = loadable(() => import(`./pages/NotFound`), 'large');
const AsyncUnauthorized = loadable(() => import(`./pages/Unauthorized`), 'large');
const AsyncLogin = loadable(() => import(`./pages/Login`), 'large');
/* eslint-enable max-len */

// const TEMP_TEST_ROLES = ['LoggedInUser'];

const ROUTE_LIST = [
	{ path: '/chin-scraper/', component: <AsyncLearn /> },
	{
		path: '/',
		component: <Redirect to="/chin-scraper/" />,
	},
	{
		path: '/practice',
		component: <AsyncPractice />,
	},
	{
		path: '/about',
		component: <AsyncAbout />,
	},
	{
		path: '/preferences',
		component: <AsyncPreferences />,
		// roles: TEMP_TEST_ROLES,
	},
	{
		path: '/analytics',
		component: <AsyncAnalytics />,
		// roles: TEMP_TEST_ROLES,
	},
	{ path: '/unauthorized', component: <AsyncUnauthorized /> },
	{ path: '/login', component: <AsyncLogin /> },
	{ path: '/not-found', component: <AsyncNotFound /> },
];

const PAGES = [
	{
		label: 'Preferences',
		tooltip: 'Change theme, turn on/off animations & play with colors',
		to: '/preferences',
		icon: PreferenceIcon,
	},
	{
		label: 'Analytics',
		tooltip: 'Most searched words / characters',
		to: '/analytics',
		icon: AnalyticsIcon,
	},
	{
		label: 'Report',
		tooltip: 'Bug Report / Feature Requests / Questions',
		icon: BugReportIcon,
		onClick: () => {
			window.open(
				'https://github.com/numanaral/chin-scraper/issues/new/choose'
			);
		},
	},
	{
		label: 'About',
		tooltip: 'Resources, links and about the app',
		to: '/about',
		icon: InfoIcon,
	},
];

const NAV_LIST = [
	{
		label: 'Learn',
		tooltip: 'Translations, pinyin, more examples and quiz, AIO solution',
		to: '/chin-scraper',
		icon: LearnIcon,
	},
	{
		label: 'Practice',
		tooltip: 'Practice writing without any distraction',
		to: '/practice',
		icon: GestureIcon,
	},
	...PAGES,
	{
		label: 'Account',
		tooltip: 'Account - Coming Soon -',
		icon: AccountIcon,
		disabled: true,
	},
];

const NAV_LIST_MOBILE = [
	{
		label: 'Learn',
		tooltip: 'Translations, pinyin, more examples and quiz, AIO solution',
		to: '/chin-scraper',
		icon: LearnIcon,
	},
	{
		label: 'Practice',
		tooltip: 'Practice writing without any distraction',
		to: '/practice',
		icon: GestureIcon,
	},
	{
		label: 'Menu',
		tooltip: 'Other pages',
		icon: AccountIcon,
		menuItems: PAGES,
	},
	{
		label: 'Account',
		tooltip: 'Account - Coming Soon -',
		icon: AccountIcon,
		disabled: true,
	},
];
// .map(e => ({ ...e, roles: TEMP_TEST_ROLES })),];

export { ROUTE_LIST, NAV_LIST, NAV_LIST_MOBILE };
