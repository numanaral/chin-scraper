import {
	responsiveFontSizes,
	// createMuiTheme,
	// Deals with the deprecated "findDOMNode" method for <React.StrictMode />
	// eslint-disable-next-line camelcase
	unstable_createMuiStrictModeTheme,
} from '@material-ui/core/styles';
import { blue, pink } from '@material-ui/core/colors';
import { createGlobalStyle } from 'styled-components';

const TRANSITION_CSS_PROPS = [
	'background',
	'background-color',
	// 'color',
	'border-color',
	'fill',
	'stroke',
	'box-shadow',
];
const THEME_TRANSITION_DURATION = 0.3;
const transitionGenerator = (
	cssProps = TRANSITION_CSS_PROPS,
	duration = THEME_TRANSITION_DURATION
) => cssProps.map(p => `${p} ${duration}s ease-out`).join(', ');

const THEME_COLOR_TRANSITION = transitionGenerator();

const ConstGlobalStyle = createGlobalStyle`
		* {
			scroll-behavior: smooth;
		}
		
		html,
		body,
		#root {
			width: 100%;
			height: 100%;
			min-height:100%;
			min-width:100%;
			margin: 0;
			padding: 0;
			overflow: hidden;
		}
		
		/* body {
			overflow: auto;
		} */
		#root {
			overflow: auto;
			position: relative;
		}

		pre {
			white-space: pre-wrap;
			word-wrap: break-word;
		}

		.theme-duration-wrapper {
			transition: ${THEME_COLOR_TRANSITION};
		}

		.svg-inline--fa {
			min-width: 24px;
			min-height: 24px;
		}

		ul {
			padding-left: 20px;
		}

		/* #region SCROLLBARS */

		* {
			scrollbar-color: black transparent;
			scrollbar-width: thin;
		}

		/* width */
		::-webkit-scrollbar {
			width: 5px;
			height: 6px;
		}

		/* Track */
		::-webkit-scrollbar-track {
			/* background: transparent; */
			background: #bfbfbf;
		}

		/* Handle */
		::-webkit-scrollbar-thumb {
			/* background: rgb(44, 44, 44); */
			background: black;
			border-radius: 10px;
		}

		/* Handle on hover */
		::-webkit-scrollbar-thumb:hover {
			background: rgba(0, 0, 0, 0.7);
		}

		/* #endregion */

`;

const VariantGlobalStyle = createGlobalStyle`
	${({ $theme }) => `
		/* #region CHROME AUTOCOMPLETE DEFAULT */
		
		/* https://stackoverflow.com/a/14205976/13161405 */
		/* Change the white to any color */
		input:-webkit-autofill,
		input:-webkit-autofill:hover, 
		input:-webkit-autofill:focus, 
		input:-webkit-autofill:active  {
			-webkit-box-shadow: 0 0 0 30px ${
				$theme.palette.background.default
			} inset !important;
		}

		/* Change text in autofill textbox */
		input:-webkit-autofill {
			-webkit-text-fill-color: ${$theme.palette.getContrastText(
				$theme.palette.background.default
			)} !important;
		}

		/* #endregion */
	`}
`;

// const defaultTheme = createMuiTheme();
const defaultTheme = unstable_createMuiStrictModeTheme();

const DEFAULT_THEME = 'dark';
const appThemes = ['dark', 'light'];
const getThemeOptions = mode => {
	const isDark = mode === 'dark';
	return {
		palette: {
			type: mode,
			primary: blue,
			secondary: pink,
			error: {
				light: '#e57373',
				main: '#f44336',
				// main: red[300],
				dark: '#d32f2f',
				contrastText: '#fff',
				alertBackground: (isDark && '#180605') || '#fdecea',
				alertText: (isDark && '#fab3ae') || '#611a15',
			},
			warning: {
				light: '#ffb74d',
				main: '#ff9800',
				dark: '#f57c00',
				contrastText: 'rgba(0, 0, 0, 0.87)',
				alertBackground: (isDark && '#190f00') || '#fff4e5',
				alertText: (isDark && '#ffd599') || '#663c00',
			},
			info: {
				light: '#64b5f6',
				main: '#2196f3',
				dark: '#1976d2',
				contrastText: '#fff',
				alertBackground: (isDark && '#030e18') || '#e8f4fd',
				alertText: (isDark && '#a6d5fa') || '#0d3c61',
			},
			success: {
				light: '#81c784',
				main: '#4caf50',
				dark: '#388e3c',
				contrastText: 'rgba(0, 0, 0, 0.87)',
				alertBackground: (isDark && '#071107') || '#edf7ed',
				alertText: (isDark && '#b7dfb9') || '#1e4620',
			},
			black: '#121212',
			background: (isDark && {
				default: '#121212',
				level1: '#212121',
				level2: '#333',
				paper: '#424242',
			}) || {
				default: '#fff',
				level1: '#f4f4f4',
				level2: '#ebebeb',
				paper: '#f5f5f5',
			},
		},
		overrides: {
			MuiPaper: {
				root: {
					transition: THEME_COLOR_TRANSITION,
				},
			},
			MuiGrid: {
				root: {
					transition: THEME_COLOR_TRANSITION,
				},
			},
			MuiTypography: {
				root: {
					transition: transitionGenerator(['color']),
				},
			},
			MuiIcon: {
				root: {
					transition: THEME_COLOR_TRANSITION,
				},
			},
			MuiSvgIcon: {
				root: {
					transition: THEME_COLOR_TRANSITION,
				},
			},
			// Annoying border-radius added to MuiTextField with type="search"
			// Looks weird when there is a startAdornment or endAdornment
			MuiOutlinedInput: {
				input: {
					'&:-webkit-autofill': {
						borderRadius: '0 !important',
					},
				},
			},
			MuiListItem: {
				secondaryAction: {
					[defaultTheme.breakpoints.down('sm')]: {
						paddingRight: 16,
					},
				},
			},
			MuiListItemSecondaryAction: {
				root: {
					[defaultTheme.breakpoints.down('sm')]: {
						top: 40,
						left: 0,
						right: 0,
						position: 'relative',
						transform: 'translateY(-50%)',
						textAlign: 'center',
						marginBottom: 20,
						paddingBottom: 30,
						borderBottom: '1px dashed;',
						'& > *': {
							width: `calc(100% - ${defaultTheme.spacing(4)}px)`,
							'&.tooltip-wrapper > button': {
								width: `calc(100% - ${defaultTheme.spacing(
									4
								)}px)`,
							},
						},
					},
				},
			},
			MuiToggleButtonGroup: {
				root: {
					[defaultTheme.breakpoints.down('sm')]: {
						justifyContent: 'center',
					},
				},
			},
		},
	};
};

/**
 * Generates an extended MUI Theme
 *
 * @param {String} mode - dark|light
 *
 * @returns {import('@material-ui/core/styles/unstable_createMuiStrictModeTheme').Theme} mode
 * //returns {import('@material-ui/core/styles/createMuiTheme').Theme} mode
 */
const getMuiTheme = mode =>
	responsiveFontSizes(
		unstable_createMuiStrictModeTheme(getThemeOptions(mode))
	);
// responsiveFontSizes(createMuiTheme(getThemeOptions(mode)));

export { DEFAULT_THEME, ConstGlobalStyle, VariantGlobalStyle, appThemes };

export default getMuiTheme;
