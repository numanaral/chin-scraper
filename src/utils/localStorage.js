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

const setLocalStorageItem = (key, value) => {
	try {
		window.localStorage.setItem(key, JSON.stringify(value));

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
	if (!lastValue) {
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
		if (!storedValue) return setLocalStorageItem(key, value);

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
