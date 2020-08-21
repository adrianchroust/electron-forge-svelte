<script lang="ts">
	export let name: string = 'World';
</script>

<style lang="scss">
	$h1-color: orange;
	h1 {color: $h1-color;}
</style>

<svelte:head>
	<title>Hello {name}</title>
</svelte:head>

<h1>💖 Hello {name}!</h1>
<p>Welcome to your Electron-Svelte application.</p>
