import { useState } from 'react';

const useInput = (initialValue = '') => {
	const [input, setInput] = useState(initialValue);

	const onChange = e => setInput(e.target.value);

	return {
		input,
		setInput,
		onChange,
	};
};

export default useInput;
