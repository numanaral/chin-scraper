import { useFirestore, useFirestoreCollectionData } from 'reactfire';

import { devOrAnalyticsIsDisabled } from '../utils';

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
