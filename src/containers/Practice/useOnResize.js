import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@material-ui/core';

import { getSmallest } from 'utils/object';
import { MAX_SIZE } from './constants';

const useOnResize = () => {
	const ref = useRef();
	const { spacing } = useTheme();
	const [size, setSize] = useState(
		getSmallest(
			window.document.body.clientWidth,
			window.document.body.clientHeight,
			MAX_SIZE
		)
	);

	useEffect(() => {
		const handleResize = () => {
			if (ref.current) {
				const _size =
					getSmallest(
						ref.current.clientWidth,
						ref.current.clientHeight,
						MAX_SIZE
					) - spacing(5);
				setSize(_size);
			}
		};
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [spacing]);

	return {
		ref,
		size,
	};
};

export default useOnResize;
