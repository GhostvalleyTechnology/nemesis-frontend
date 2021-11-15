<script>
	import "svelte-material-ui/bare.css";
	import Main from "./Main.svelte";
	import { writable } from 'svelte/store';
	const userInfo = writable({});
	import Keycloak from "http://localhost:8095/auth/js/keycloak.min.js"
	let kc = new Keycloak();
	let logged_in = null;
	let todos = [];
	kc.init({ onLoad: "check-sso" }).then((auth) => {
		logged_in = auth;
		if (auth) {
			logged_in = true;
			kc.loadUserInfo().then((user) => {
				user.token = kc.idToken
				userInfo.set(user)
			});
		}
	});
</script>

<h1>Svelte keycloak</h1>

{#if logged_in && $userInfo.preferred_username}

	<pre>{JSON.stringify($userInfo, null,2)}</pre>
	You are logged in as {$userInfo.preferred_username}

	<button
		on:click={() => {
			kc.logout();
		}}>Logout</button
	>

	<Main/>

{/if}

{#if logged_in == false}
	You are not logged in
	<button
		on:click={() => {
			kc.login();
		}}>Login</button
	>
{/if}