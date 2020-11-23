import React, { useState, useEffect } from 'react';

import TooltipButton from 'components/TooltipButton';
import { DeleteIcon } from 'icons';

const ClearLocalStorageButton = () => {
	const [cleared, setCleared] = useState(false);
	const clearLocalStorage = () => {
		setCleared(true);
		localStorage.clear();
	};

	useEffect(() => {
		if (cleared) {
			// To prevent winning the race condition
			setTimeout(() => {
				if (localStorage.length) {
					setCleared(false);
				}
			}, 100);
		}
	}, [cleared]);

	return (
		<TooltipButton
			tooltip="Clears the entire local storage"
			onClick={clearLocalStorage}
			text="Clear"
			icon={<DeleteIcon />}
			disabled={cleared}
			color="secondary"
			variant="contained"
		/>
	);
};

export default ClearLocalStorageButton;
