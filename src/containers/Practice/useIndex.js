import { useState } from 'react';

import useEffectOnUpdate from 'hooks/useEffectOnUpdate';

const useIndex = (input, restartDependencyArray, restartCallback = null) => {
	const [index, setIndex] = useState(0);
	const isPreviousDisabled = index === 0;
	const isNextDisabled = index + 1 === input.length;
	const onPrevious = () => setIndex(v => v - 1);
	const onNext = () => setIndex(v => v + 1);
	const onRestart = () => {
		setIndex(0);
		restartCallback?.();
	};

	useEffectOnUpdate(() => {
		onRestart();
	}, restartDependencyArray);

	return {
		index,
		isPreviousDisabled,
		isNextDisabled,
		onPrevious,
		onNext,
		onRestart,
	};
};

export default useIndex;
