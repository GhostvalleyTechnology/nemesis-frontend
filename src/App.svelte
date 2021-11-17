<script lang="ts">
	import LibLoader from "./components/LibLoader.svelte";
	import "svelte-material-ui/bare.css";
	import Main from "./Main.svelte";
	import { userId, userName } from "./stores";
	import { KEYCLOAK_URL, OFFLINE_MODE } from "./env";

	let logged_in = null;
	let kc = null;
	function onLoaded() {
		//@ts-ignore
		kc = new Keycloak('/keycloak.json');
		kc.init({ onLoad: "check-sso" }).then((auth) => {
			logged_in = auth;
			if (auth) {
				kc.loadUserInfo().then((userInfo) => {
					logged_in = true;
					userName.set(userInfo.given_name);
					userId.set(userInfo.email);
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

{#if OFFLINE_MODE}
	<Main on:logout={() => {}} />
{:else}

	<LibLoader
	src="{KEYCLOAK_URL}"
	libraryDetectionObject="Keycloak"
	on:loaded={onLoaded}
	/>

	{#if logged_in}
	<Main on:logout={logout} />
	{/if}

{/if}


