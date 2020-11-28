import { useFirestore, useFirestoreCollectionData } from 'reactfire';

import useIsAnalyticsEnabled from 'hooks/useIsAnalyticsEnabled';

const useSearchQueries = () => {
	const [analyticsIsEnabled] = useIsAnalyticsEnabled();
	const ref = useFirestore().collection('searchQueries');
	const collection = useFirestoreCollectionData(ref.orderBy('createdOn'));

	const add = query => {
		if (!analyticsIsEnabled) return;

		ref.add({
			query,
			createdOn: new Date(),
		});
	};

	return { collection, add };
};

export default useSearchQueries;
