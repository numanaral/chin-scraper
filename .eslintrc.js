const OFF = 0;
const WARN = 1;
const ERROR = 2;

/**
 * @typedef {Object} ESLintRules
 * @property {import('eslint/rules').ESLintRules} rules
 * @typedef {import('eslint').Linter.Config&ESLintRules} ESLintConfig
 */

/**
 * @type {ESLintConfig}
 */
module.exports = {
	env: {
		browser: true,
		es6: true,
		// es2021: true,
	},
	extends: [
		'react-app',
		'plugin:react/recommended',
		'airbnb',
		'prettier/react',
		'plugin:prettier/recommended',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react', 'react-hooks', '@babel', 'prettier'],
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx'],
				paths: ['./src'],
			},
		},
	},
	rules: {
		'arrow-parens': [ERROR, 'as-needed'],
		'default-case': [ERROR, { commentPattern: 'No Default' }],
		'import/no-named-as-default': OFF,
		'import/prefer-default-export': OFF,
		// 'linebreak-style': [ERROR, 'windows'],
		'prettier/prettier': OFF,
		'linebreak-style': OFF,
		'max-len': [
			ERROR,
			{
				ignorePattern: '^import .*',
				ignoreComments: true,
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
		'no-unused-expressions': OFF,
		'@babel/no-unused-expressions': ERROR,
		// These are alright for development
		...(process.env.NODE_ENV !== 'production' && {
			'react/prop-types': WARN,
			'no-unused-vars': WARN,
			'no-debugger': WARN,
		}),
	},
};
