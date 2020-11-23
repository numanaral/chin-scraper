import { useRef } from 'react';

/**
 * Counts the time a component was rendered
 *
 * @param {String} name - Name of the component
 * @param {Boolean} wrap - Should wrap with < and />?
 */
const useRenderedCount = (name, wrap = true) => {
	const count = useRef(1);
	const { current: c } = count;
	const _name = (wrap && `<${name} /> `) || `"${name}"`;
	console.log(`Rendered ${_name} ${c} time${(c > 1 && 's') || ''}`);
	count.current += 1;
};

export default useRenderedCount;
