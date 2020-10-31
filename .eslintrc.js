const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
		'plugin:prettier/recommended',
		'prettier/react',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react', 'react-hooks', 'prettier'],
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
				paths: ['./src'],
			},
		},
	},
	rules: {
		'arrow-parens': [ERROR, 'as-needed'],
		'default-case': [ERROR, { commentPattern: 'No Default' }],
		'import/no-named-as-default': OFF,
		'import/prefer-default-export': OFF,
		'linebreak-style': [ERROR, 'windows'],
		'max-len': [
			ERROR,
			{
				ignoreComments: false,
				ignoreUrls: true,
				ignoreRegExpLiterals: true,
				ignoreTrailingComments: true,
				ignoreTemplateLiterals: true,
			},
		], // *
		'no-alert': WARN,
		'no-console': OFF,
		'no-continue': OFF,
		'no-plusplus': OFF,
		'no-tabs': OFF,
		'no-underscore-dangle': OFF,
		'react-hooks/exhaustive-deps': WARN, // Checks effect dependencies
		'react-hooks/rules-of-hooks': ERROR, // Checks rules of Hooks
		'react/jsx-filename-extension': [WARN, { extensions: ['.js', '.jsx'] }],
		'react/jsx-indent': [ERROR, 'tab'],
		'react/jsx-indent-props': [ERROR, 'tab'],
		'react/jsx-props-no-spreading': OFF,
		'react/no-array-index-key': OFF,
		'prettier/prettier': ERROR,
	},
};
