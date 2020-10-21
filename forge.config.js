module.exports = {
	packagerConfig: {},
	makers: [
		// https://www.electronforge.io/config/makers
		// Windows
		{
			name: '@electron-forge/maker-squirrel',
			config: {
				name: 'electron-forge-svelte'
			}
		},
		// MacOS
		{
			name: '@electron-forge/maker-zip',
			platforms: ['darwin'],
			config: {}
		},
		{
			name: '@electron-forge/maker-dmg',
			config: {}
		},
		// Linux
		{
			name: '@electron-forge/maker-deb',
			config: {}
		},
		{
			name: '@electron-forge/maker-rpm',
			config: {}
		}
	],
	plugins: [
		// https://www.electronforge.io/config/plugins
		[
			'@electron-forge/plugin-webpack',
			{
				mainConfig: './webpack.main.config.js',
				renderer: {
					config: './webpack.renderer.config.js',
					entryPoints: [
						{
							html: './src/index.html',
							js: './src/renderer.ts',
							name: 'main_window'
						}
					]
				}
			}
		]
	],
	publishers: [
		// https://www.electronforge.io/config/publishers
	]
};
