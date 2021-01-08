import { doesNotExist } from 'utils';

const getLocalStorageItem = key => JSON.parse(window.localStorage.getItem(key));

const clearLocalStorageItem = key => {
	try {
		localStorage.removeItem(key);
	} catch (ex) {
		console.warn(
			`Error clearing the local storage value for key "${key}".`,
			ex
		);
	}
};

/** @see https://usehooks.com/useLocalStorage/ */
const setLocalStorageItem = (key, value, storedValue) => {
	try {
		// Allow value to be a function so we have same API as useState
		const valueToStore =
			value instanceof Function ? value(storedValue) : value;
		// Save to local storage
		window.localStorage.setItem(key, JSON.stringify(valueToStore));

		return value;
	} catch (ex) {
		console.warn(
			`Error setting the local storage value for key "${key}".`,
			value,
			ex
		);
		return value;
	}
};

// Only updates, does not set
const updateLocalStorageItem = (key, value) => {
	const lastValue = getLocalStorageItem(key);
	if (doesNotExist(lastValue)) {
		console.warn(
			`Error setting the local storage value for key "${key}". The key doesn't exist in the local storage..`
		);
		return;
	}
	if (lastValue) setLocalStorageItem(key, value);
};

const getOrSetLocalStorageItem = (key, value) => {
	try {
		const storedValue = getLocalStorageItem(key);
		if (doesNotExist(storedValue)) return setLocalStorageItem(key, value);

		return storedValue;
	} catch (ex) {
		console.warn(
			`Error getting the local storage value for key "${key}". Will try re-setting it.`,
			ex
		);

		return setLocalStorageItem(key, value);
	}
};

export {
	getLocalStorageItem,
	clearLocalStorageItem,
	setLocalStorageItem,
	updateLocalStorageItem,
	getOrSetLocalStorageItem,
};
