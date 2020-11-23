import { useEffect } from 'react';

import useIsFirstMount from './useIsFirstMount';

const useEffectOnUpdate = (effect, dependencies, cleanup) => {
	const isFirstMount = useIsFirstMount();

	useEffect(() => {
		if (!isFirstMount) effect();
		return cleanup;

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, dependencies);
};

export default useEffectOnUpdate;
