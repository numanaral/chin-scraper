import ContainerWithCenteredItems from 'components/ContainerWithCenteredItems';
import React from 'react';

import { AnalyticsIcon } from 'icons';
import LazyList from 'components/List/Lazy';
import { itemTypes } from 'components/List/constants';
import Toggle from 'components/Toggle';
import useIsAnalyticsEnabled from 'hooks/useIsAnalyticsEnabled';
import PageContainer from '../PageContainer';

const AnalyticsToggle = () => {
	const [analyticsIsEnabled, setAnalyticsIsEnabled] = useIsAnalyticsEnabled();

	return (
		<Toggle
			value={analyticsIsEnabled}
			onChange={setAnalyticsIsEnabled}
			options={[
				{
					value: true,
					label: 'Enabled',
				},
				{
					value: false,
					label: 'Disabled',
				},
			]}
		/>
	);
};

const PREFERENCE_LIST = [
	{
		type: itemTypes.SECTION_TITLE_WITH_DIVIDER,
		primaryText: 'DEV SETTINGS',
	},
	{
		primaryText: 'Analytics',
		icon: AnalyticsIcon,
		secondaryAction: AnalyticsToggle,
	},
];

const DisableAnalytics = () => (
	<PageContainer>
		<ContainerWithCenteredItems vertical horizontal>
			<LazyList list={PREFERENCE_LIST} />
		</ContainerWithCenteredItems>
	</PageContainer>
);

export default DisableAnalytics;
