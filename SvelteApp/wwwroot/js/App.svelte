<svelte:options tag="svelte-app" />
<script>
	export let number;
</script>

<main>
	<h1>Customer Number: #{number}</h1>
</main>

<style>
	h1 {
	font-size: 3em;
	}
</style>