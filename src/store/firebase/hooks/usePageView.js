import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAnalytics } from 'reactfire';

const usePageView = () => {
	const { pathname } = useLocation();
	const analytics = useAnalytics();

	useEffect(() => {
		console.log('ga:page-view', pathname);
		analytics.logEvent('page-view', { path_name: pathname });
	}, [analytics, pathname]);
};

export default usePageView;
