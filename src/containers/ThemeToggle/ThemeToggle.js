import React from 'react';
import { yellow } from '@material-ui/core/colors';

import Toggle from 'components/Toggle';
import { LightThemeIcon, DarkThemeIcon } from 'icons';
import { propTypes } from './types';

const ThemeToggle = ({ theme, setTheme }) => (
	<Toggle
		value={theme}
		onChange={setTheme}
		options={[
			{
				value: 'dark',
				label: 'Dark',
				icon: <DarkThemeIcon color="primary" />,
			},
			{
				value: 'light',
				label: 'Light',
				icon: <LightThemeIcon style={{ color: yellow[500] }} />,
			},
		]}
	/>
);

ThemeToggle.propTypes = propTypes;

export default ThemeToggle;
