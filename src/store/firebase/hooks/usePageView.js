import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAnalytics } from 'reactfire';

import useIsAnalyticsEnabled from 'hooks/useIsAnalyticsEnabled';

const usePageView = () => {
	const [analyticsIsEnabled] = useIsAnalyticsEnabled();
	const { pathname } = useLocation();
	const analytics = useAnalytics();

	useEffect(() => {
		if (!analyticsIsEnabled) return;

		console.log('ga:page-view', pathname);
		analytics.logEvent('page-view', { path_name: pathname });
	}, [analytics, analyticsIsEnabled, pathname]);
};

export default usePageView;
