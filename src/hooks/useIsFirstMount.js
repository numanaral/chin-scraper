import { useRef } from 'react';

const useIsFirstMount = () => {
	const firstMount = useRef(true);

	if (firstMount.current) {
		firstMount.current = false;

		return true;
	}

	return firstMount.current;
};

export default useIsFirstMount;
