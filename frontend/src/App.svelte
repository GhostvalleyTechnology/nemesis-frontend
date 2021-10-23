<script>
	import Toasts from "./components/Toasts.svelte";
	import { addToast } from "./components/store";
	let message = "Hello, World!";
  	let types = ["success", "error", "info"];
  	let type = "success";
  	let dismissible = true;
  	let timeout = 5000;
</script>

<main>
	<Toasts />
	<h1>Hello {message}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>

	<form on:submit|preventDefault>
		<button on:click={() => addToast({message, type, dismissible, timeout})}>
			Add toast
		  </button>
	</form>
	

</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>