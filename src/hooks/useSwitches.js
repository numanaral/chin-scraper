import React, { useCallback, useMemo, useState } from 'react';

import LazySwitch from 'components/Switch/Lazy';

const generateSwitchList = (state, onCheck) =>
	Object.keys(state).map(key => {
		const { value, label } = state[key];
		return (
			<LazySwitch
				key={key}
				name={key}
				label={label}
				checked={value}
				onCheck={onCheck}
			/>
		);
	});

const useSwitches = (initialState, cb = null) => {
	const [switches, setSwitches] = useState(initialState);

	const onCheck = useCallback(
		(key, value) => {
			setSwitches(prev => {
				const newValues = {
					...prev,
					[key]: {
						...prev[key],
						value,
					},
				};
				cb?.(newValues);

				return newValues;
			});
		},
		[cb]
	);

	const switchList = useMemo(() => generateSwitchList(switches, onCheck), [
		switches,
		onCheck,
	]);

	return {
		switches: Object.keys(switches).reduce(
			(acc, key) => ({
				...acc,
				[key]: switches[key].value,
			}),
			{}
		),
		setSwitches,
		onCheck,
		switchList,
	};
};

export default useSwitches;
