import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SuspenseWithPerf } from 'reactfire';
import { Avatar, useMediaQuery } from '@material-ui/core';

import LoadingIndicator from 'components/LoadingIndicator';
import useSearchQueries from 'store/firebase/hooks/useSearchQueries';
import ContainerWithCenteredItems from 'components/ContainerWithCenteredItems';
import Toggle from 'components/Toggle';
import useLocalStorage from 'hooks/useLocalStorage';
import PageContainer from '../PageContainer';

const StyledContainerWithCenteredItems = styled(ContainerWithCenteredItems)`
	height: 95%;
`;

// Prevents the annoying full-screen size tooltip before the
// word-cloud loads
const StyledToggle = styled(Toggle)`
	${({ theme }) => `
		max-height: ${theme.spacing(6)}px;
	`}
`;

const StyledAvatar = styled(Avatar)`
	font-weight: 600;
	${({ theme }) => `
		width: ${theme.spacing(4)}px;
    	height: ${theme.spacing(4)}px;
		font-size: ${theme.spacing(4) / 2.5}px;
	`}
`;

const getOptions = (smAndDown, toggle) => {
	const isCharacter = toggle === 'character';
	const fontSizes = smAndDown
		? [20, (isCharacter && 80) || 40]
		: [50, (isCharacter && 150) || 80];
	return {
		enableTooltip: true,
		deterministic: false,
		fontSizes,
		padding: 1,
		rotations: 3,
		rotationAngles: [-15, 15],
		scale: 'sqrt',
		spiral: 'archimedean',
		transitionDuration: 1000,
	};
};

const normalizeCollection = (collection, type = 'character') => {
	if (!collection) return [];
	// TODO: I don't know why but I apparently renamed the key from
	// "keyword" to "query". Once I fix the keys in firebase, I will
	// update this
	let _collection = collection.map(c => c.query || c.keyword);
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

const getCount = collection => ({
	words: collection.length,
	// TODO: I don't know why but I apparently renamed the key from
	// "keyword" to "query". Once I fix the keys in firebase, I will
	// update this
	characters: collection.map(c => c.query || c.keyword).join('').length,
});

const ANALYTICS_TYPE_LOCAL_STORAGE_KEY = 'analyticsType';
const Wrapper = () => {
	const [Component, setComponent] = useState(null);
	const [toggle, setToggle] = useLocalStorage(
		ANALYTICS_TYPE_LOCAL_STORAGE_KEY,
		'character'
	);
	const [words, setWords] = useState([]);
	const { collection } = useSearchQueries();
	const smAndDown = useMediaQuery(theme => theme.breakpoints.down('sm'));
	const [counts, setCounts] = useState({ words: 0, characters: 0 });

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
		setCounts(getCount(collection));
		const normalizedCollection = normalizeCollection(collection, toggle);
		setWords(normalizedCollection);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [toggle]);

	return (
		<PageContainer>
			<StyledContainerWithCenteredItems>
				<StyledToggle
					value={toggle}
					onChange={setToggle}
					options={[
						{
							value: 'character',
							label: 'Characters',
							icon: (
								<StyledAvatar>{counts.characters}</StyledAvatar>
							),
						},
						{
							value: 'word',
							label: 'Words',
							icon: <StyledAvatar>{counts.words}</StyledAvatar>,
						},
					]}
				/>
				{((!collection || !Component) && <LoadingIndicator />) || (
					<Component
						options={getOptions(smAndDown, toggle)}
						words={words}
					/>
				)}
			</StyledContainerWithCenteredItems>
		</PageContainer>
	);
};

const Analytics = () => (
	<SuspenseWithPerf fallback={<LoadingIndicator />} traceId="load-analytics">
		<Wrapper />
	</SuspenseWithPerf>
);

export default Analytics;
