import React from 'react';
import { func } from 'prop-types';
import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider, StylesProvider } from '@material-ui/core/styles';
import { ThemeProvider as ScThemeProvider } from 'styled-components';

import getMuiTheme, { ConstGlobalStyle, VariantGlobalStyle } from 'theme';
import useLocalStorage from 'hooks/useLocalStorage';

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useLocalStorage('THEME', 'dark');
	const themeConfig = getMuiTheme(theme);

	return (
		<StylesProvider injectFirst>
			<MuiThemeProvider theme={themeConfig}>
				<ScThemeProvider theme={themeConfig}>
					<CssBaseline />
					{children({ theme, setTheme })}
				</ScThemeProvider>
			</MuiThemeProvider>
			<ConstGlobalStyle />
			<VariantGlobalStyle $theme={themeConfig} />
		</StylesProvider>
	);
};

ThemeProvider.propTypes = {
	children: func.isRequired,
};

export default ThemeProvider;
