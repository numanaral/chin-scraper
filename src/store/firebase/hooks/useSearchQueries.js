import { useFirestore, useFirestoreCollectionData } from 'reactfire';

const isAnalyticsDisabled = () => window.location.search === '?ga=false';
const devOrAnalyticsIsDisabled =
	process.env.NODE_ENV !== 'production' || isAnalyticsDisabled();

const useSearchQueries = () => {
	const ref = useFirestore().collection('searchQueries');
	const collection = useFirestoreCollectionData(ref.orderBy('createdOn'));

	const add = query => {
		if (devOrAnalyticsIsDisabled) return;

		ref.add({
			query,
			createdOn: new Date(),
		});
	};

	return { collection, add };
};

export default useSearchQueries;
