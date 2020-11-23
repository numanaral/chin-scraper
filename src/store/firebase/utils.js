const isAnalyticsDisabled = () => window.location.search === '?ga=false';
const devOrAnalyticsIsDisabled =
	process.env.NODE_ENV !== 'production' || isAnalyticsDisabled();

export { devOrAnalyticsIsDisabled };
