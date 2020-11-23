import React, { useEffect, useState } from 'react';
import { SuspenseWithPerf } from 'reactfire';
import { useMediaQuery } from '@material-ui/core';

import LoadingIndicator from 'components/LoadingIndicator';
import useSearchQueries from 'store/firebase/hooks/useSearchQueries';
import ContainerWithCenteredItems from 'components/ContainerWithCenteredItems';
import Toggle from 'components/Toggle';
import PageContainer from '../PageContainer';

const getOptions = smAndDown => ({
	enableTooltip: true,
	deterministic: false,
	fontSizes: (smAndDown && [20, 100]) || [50, 200],
	padding: 1,
	rotations: 3,
	rotationAngles: [-15, 15],
	scale: 'sqrt',
	spiral: 'archimedean',
	transitionDuration: 1000,
});

const normalizeCollection = (collection, type = 'character') => {
	if (!collection) return [];
	let _collection = collection.map(c => c.keyword);
	if (type === 'character') {
		_collection = _collection.join('').split('');
	}
	_collection = _collection.reduce((acc, char) => {
		if (!acc[char]) acc[char] = { value: 1 };
		acc[char].text = char;
		acc[char].value++;
		return acc;
	}, {});

	return Object.values(_collection);
};

const Wrapper = () => {
	const [Component, setComponent] = useState(null);
	const [toggle, setToggle] = useState('character');
	const [words, setWords] = useState([]);
	const { collection } = useSearchQueries();
	const smAndDown = useMediaQuery(theme => theme.breakpoints.down('sm'));
	useEffect(() => {
		const loadReactWordCloud = async () => {
			const { default: RWC } = await import('react-wordcloud');
			await import('tippy.js/dist/tippy.css');
			await import('tippy.js/animations/scale.css');

			setComponent(() => RWC);
		};
		loadReactWordCloud();
	}, []);
	useEffect(() => {
		const normalizedCollection = normalizeCollection(collection, toggle);
		setWords(normalizedCollection);
	}, [toggle]);

	return (
		<PageContainer>
			<ContainerWithCenteredItems style={{ height: '95%' }}>
				<Toggle
					value={toggle}
					onChange={setToggle}
					options={[
						{
							value: 'character',
							label: 'By Character',
						},
						{
							value: 'word',
							label: 'By Word',
						},
					]}
				/>
				{((!collection || !Component) && <LoadingIndicator />) || (
					<Component options={getOptions(smAndDown)} words={words} />
				)}
			</ContainerWithCenteredItems>
		</PageContainer>
	);
};

const Analytics = () => (
	<SuspenseWithPerf fallback={<LoadingIndicator />} traceId="load-analytics">
		<Wrapper />
	</SuspenseWithPerf>
);

export default Analytics;
