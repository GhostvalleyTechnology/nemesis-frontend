<script>
	import LibLoader from "./components/LibLoader.svelte";
	import "svelte-material-ui/bare.css";
	import Main from "./Main.svelte";
	import { writable } from "svelte/store";

	const userInfo = writable({});
	let logged_in = null;
	let kc = null;
	function onLoaded() {
		kc = new Keycloak();
		kc.init({ onLoad: "check-sso" }).then((auth) => {
			logged_in = auth;
			if (auth) {
				logged_in = true;
				kc.loadUserInfo().then((user) => {
					user.token = kc.idToken;
					userInfo.set(user);
				});
			} else {
				kc.login();
			}
		});
	}
	function logout() {
		kc.logout();
	}
</script>

<LibLoader
	src="http://localhost:8095/auth/js/keycloak.min.js"
	libraryDetectionObject="Keycloak"
	on:loaded={onLoaded}
/>

{#if logged_in}
	<Main displayname={$userInfo.given_name} on:logout={logout} />
{/if}
