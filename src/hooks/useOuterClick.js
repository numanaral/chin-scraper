const { useRef, useEffect } = require('react');

// https://stackoverflow.com/a/54292872/13161405
const useOuterClick = cb => {
	const callbackRef = useRef(); // initialize mutable callback ref
	const innerRef = useRef(); // returned to client, who sets the "border" element

	// update callback on each render, so second useEffect has most recent callback
	useEffect(() => {
		callbackRef.current = cb;
	});
	useEffect(() => {
		const handleClick = e => {
			if (
				innerRef.current &&
				callbackRef.current &&
				!innerRef.current.contains(e.target)
			)
				callbackRef.current(e);
		};
		document.addEventListener('click', handleClick);
		return () => document.removeEventListener('click', handleClick);
	}, []); // no dependencies -> stable click listener

	return innerRef; // convenience for client (doesn't need to init ref himself)
};

export default useOuterClick;
