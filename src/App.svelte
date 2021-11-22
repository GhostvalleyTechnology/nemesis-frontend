<script lang="ts">
	import LibLoader from "./components/LibLoader.svelte";
	import "svelte-material-ui/bare.css";
	import Main from "./Main.svelte";
	import { userId, userName, userToken } from "./stores";
	import { KEYCLOAK_URL, RUN_MODE } from "./env";

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
					userToken.set(kc.idToken);

					fetch('http://localhost:8080/api/client/user', {headers: {'Authorization': 'Bearer ' + kc.idToken,},})
            .then((response) => response.text())
            .then((json) => (alert(json)));
				});
			} else {
				kc.login();
			}
		});
	}
	function logout() {
		kc.logout();
	}
	//@ts-ignore
	let isOffline = RUN_MODE == 'OFFLINE';
</script>

{#if isOffline}
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


