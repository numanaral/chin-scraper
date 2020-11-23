import { useState } from 'react';
import {
	setLocalStorageItem,
	getOrSetLocalStorageItem,
} from 'utils/localStorage';

const useLocalStorage = (key, initialValue) => {
	// Pass initial state function to useState so logic is only executed once
	// https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
	const [storedValue, setStoredValue] = useState(() =>
		getOrSetLocalStorageItem(key, initialValue)
	);

	// Wrap the useState's setter to trigger local storage update
	const setValue = value => {
		try {
			setStoredValue(setLocalStorageItem(key, value, storedValue));
		} catch (ex) {
			console.error(
				`Error setting the state for local storage value for key "${key}"`,
				ex
			);
		}
	};

	return [storedValue, setValue];
};

export default useLocalStorage;
