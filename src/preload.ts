import { contextBridge } from 'electron';

function api(): void {
	const cwd = process.cwd();
	console.log(`💡 This is "preload.ts" speaking: Your current working directory is "${cwd}"`);
}

contextBridge.exposeInMainWorld('electron', { api });
