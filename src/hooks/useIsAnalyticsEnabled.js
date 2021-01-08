import useLocalStorage from 'hooks/useLocalStorage';

const ANALYTICS_IS_ENABLED_LOCAL_STORAGE_KEY = 'analyticsIsEnabled';
const useIsAnalyticsEnabled = () => {
	return useLocalStorage(ANALYTICS_IS_ENABLED_LOCAL_STORAGE_KEY, true);
};

export default useIsAnalyticsEnabled;
