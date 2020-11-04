module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module'
	},
	env: {
		es6: true,
		browser: true,
		node: true,
		'shared-node-browser': true
	},
	plugins: ['@typescript-eslint', 'svelte3'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier'
	],
	overrides: [
		{
			files: ['*.svelte'],
			processor: 'svelte3/svelte3'
		}
	],
	rules: {
		'@typescript-eslint/no-var-requires': 0
	}
};
