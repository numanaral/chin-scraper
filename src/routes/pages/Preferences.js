import ContainerWithCenteredItems from 'components/ContainerWithCenteredItems';
import React from 'react';
import { Switch as MuiSwitch } from '@material-ui/core';

import {
	ThemeIcon,
	StorageIcon,
	TranslateIcon,
	AnimationIcon,
	SadIcon,
	PaletteIcon,
} from 'icons';
import LazyList from 'components/List/Lazy';
import { itemTypes, SPACER } from 'components/List/constants';
import ThemeToggle from 'containers/ThemeToggle';
import LazyClearLocalStorageButton from 'components/ClearLocalStorageButton/Lazy';
import TooltipButton from 'components/TooltipButton';
import { noop } from 'utils';
import PageContainer from '../PageContainer';

const ComingSoon = () => (
	<TooltipButton
		tooltip="Pick a color"
		text="Pick a color"
		variant="contained"
		color="primary"
		icon={PaletteIcon}
		onClick={noop}
		disabled
	/>
);
const Switch = () => <MuiSwitch disabled />;

const getPreferenceList = ({ themeProps }) => {
	return [
		{
			type: itemTypes.SECTION_TITLE_WITH_DIVIDER,
			primaryText: 'VIEW SETTINGS',
		},
		{
			primaryText: 'Theme',
			icon: ThemeIcon,
			// TODO: If I decide to add redux, won't need this complication here
			// but it's not needed right now
			secondaryAction: <ThemeToggle {...themeProps} />,
		},
		{
			primaryText: 'Hanzi stroke color',
			icon: TranslateIcon,
			secondaryAction: ComingSoon,
		},
		{
			primaryText: 'Hanzi radical color',
			icon: TranslateIcon,
			secondaryAction: ComingSoon,
		},
		{
			primaryText: 'Reset settings',
			secondaryText: 'NOTE: This will revert all the preference changes',
			icon: StorageIcon,
			secondaryAction: LazyClearLocalStorageButton,
		},
		SPACER,
		{
			type: itemTypes.SECTION_TITLE_WITH_DIVIDER,
			primaryText: 'ANIMATIONS',
			secondaryText: 'Disable/Modify animations',
		},
		{
			primaryText: 'Animations',
			secondaryText: 'Turns on/off all the animations',
			icon: AnimationIcon,
			secondaryAction: Switch,
			disabled: true,
		},
		{
			primaryText: 'Enough with the shaking!',
			secondaryText: 'Turn off that stupid shaking animation plis',
			icon: SadIcon,
			secondaryAction: Switch,
			disabled: true,
		},
	];
};

const Preferences = props => (
	<PageContainer>
		<ContainerWithCenteredItems vertical horizontal>
			<LazyList list={getPreferenceList(props)} />
		</ContainerWithCenteredItems>
	</PageContainer>
);

export default Preferences;
