import React, { memo, useEffect, useState } from 'react';
import { Box } from '@material-ui/core';
import HanziWriter from 'hanzi-writer';

import getHanziTrainerDetails, {
	normalizeHanziTrainerDetails,
} from 'api/hanziTrainerProApi';
import LoadingIndicator from 'components/LoadingIndicator';
import Details from './Details';
import {
	moreInfoContainerPropTypes,
	moreInfoContainerDefaultProps,
} from './types';

const MoreInfoContainer = memo(({ isVisible, ...cardProps }) => {
	const [details, setDetails] = useState([]);
	const [pending, setPending] = useState(true);
	const { hanzi, pinyin, translation } = cardProps;
	useEffect(() => {
		const loadStrokeDetails = () => {
			HanziWriter.loadCharacterData(hanzi, {
				onLoadCharDataSuccess: ({ radStrokes, strokes }) => {
					setDetails(v => [
						...v,
						{
							title: 'Stroke Details',
							body: {
								totalStrokeCount: strokes?.length || 'N/A',
								radicalStrokeCount: radStrokes?.length || 'N/A',
							},
						},
					]);
				},
			});
		};
		const fetchExtraTranslations = async () => {
			const hanziTrainerDetails = await getHanziTrainerDetails(
				pinyin,
				translation
			);
			setDetails(v => [
				...v,
				...normalizeHanziTrainerDetails(hanziTrainerDetails, hanzi),
			]);
			setPending(false);
		};
		const loadCardDetails = () => {
			setPending(true);
			loadStrokeDetails();
			fetchExtraTranslations();
		};

		if (isVisible && !details.length) loadCardDetails();
	}, [details, hanzi, isVisible, pinyin, translation]);

	const boxProps = {
		p: 1,
		width: '100%',
		height: '100%',
		...(pending && {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		}),
	};

	return (
		isVisible && (
			<Box {...boxProps}>
				{(pending && <LoadingIndicator size="large" />) || (
					<Details details={details} />
				)}
			</Box>
		)
	);
});

MoreInfoContainer.propTypes = moreInfoContainerPropTypes;
MoreInfoContainer.defaultProps = moreInfoContainerDefaultProps;

export default MoreInfoContainer;
