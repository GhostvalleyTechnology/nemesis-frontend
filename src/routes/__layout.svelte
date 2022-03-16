<script lang="ts">
	import { page } from '$app/stores';
	import { admin, production, confirm } from "../stores";
	import { OpenAPI, UserService } from "../gen"
	OpenAPI.BASE = production ? window.location.origin : "http://localhost:8080"
	OpenAPI.HEADERS = {
		'Accept': '*/*'
	}
	import "svelte-material-ui/bare.css";
	import l, {de, en} from "../localisation";
	import Button, { Label } from '@smui/button';
	import IconButton from "@smui/icon-button";
	import Drawer, {
		AppContent,
		Content,
		Header,
		Title,
		Subtitle,
	} from "@smui/drawer";
	import List, { Item, Graphic, Separator, Text } from "@smui/list";
	import Snackbar from "./components/Snackbar.svelte";
	import ConfirmDialog from "./components/ConfirmDialog.svelte";
	import EasterEgg from "./routes/EasterEgg.svelte";

	let drawerOpen = true;
	const logout = () => {
		confirm.set({title:'Logout', message:'Wirklich ausloggen?', func: () => {window.location.replace('/logout');}});
	}

	let language: string = getLanguageButtonText();
	function toggleLanguage() {
		if ($l == de) {
			l.set(en);
			language = "de";
		} else {
			l.set(de);
			language = "en";
		}
		language = getLanguageButtonText();
	}
	function getLanguageButtonText(): string {
		return ($l == de) ? "en" : "de";
	}
	let adminPrivileges = false;
	
	UserService.get().then(employee => adminPrivileges = employee.admin);
	let isAdminMode = false;
	admin.subscribe( value => { isAdminMode = value; });
	function toggleAdminMode() {
		admin.set(!isAdminMode);
	}
	let easterEgg = false;
</script>

<main>
	<div>
			<Drawer variant="modal" bind:open={drawerOpen}>
				<Header>
					<img src="../logo.png" alt="Logo" width="60px" />
					<Title><span class="font-medium">Libero</span><span class="font-extralight">Life</span></Title>
					<Subtitle><span class="font-regular">{$l.slogan}</span></Subtitle>
				</Header>
				<Content>
					<List>
						<Item href="/" activated={$page.url.pathname === "/"}>
							<Graphic class="material-icons" aria-hidden="true">home</Graphic>
							<Text>{$l.menu.home}</Text>
						</Item>
						<Item href="/clients" activated={$page.url.pathname === "/clients"}>
							<Graphic class="material-icons" aria-hidden="true">people</Graphic>
							<Text>{$l.menu.clients}</Text>
						</Item>
						<Item href="/templates" activated={$page.url.pathname === "/templates"}>
							<Graphic class="material-icons" aria-hidden="true">file_copy</Graphic>
							<Text>{$l.menu.templates}</Text>
						</Item>
						<Item href="/partners" activated={$page.url.pathname === "/partner"}>
							<Graphic class="material-icons" aria-hidden="true">apartment</Graphic>
							<Text>{$l.menu.partner}</Text>
						</Item>
						<Item href="/contracts" activated={$page.url.pathname === "/contracts"}>
							<Graphic class="material-icons" aria-hidden="true">task</Graphic>
							<Text>{$l.menu.contracts}</Text>
						</Item>
						<Item href="/notes" activated={$page.url.pathname === "/notes"}>
							<Graphic class="material-icons" aria-hidden="true">assignment</Graphic>
							<Text>{$l.menu.notes}</Text>
						</Item>
						
						<Separator />
						{#if adminPrivileges}
						<Item href="javascript:void(0)" on:click={() => toggleAdminMode()} class="{isAdminMode ? 'admin-content' : ''}">
							<Graphic class="material-icons" aria-hidden="true">military_tech</Graphic>
							<Text>{$l.menu.admin_mode}</Text>
						</Item>
						{/if}
						{#if isAdminMode}
						<Item href="/employees" activated={$page.url.pathname === "/employees"}>
							<Graphic class="material-icons" aria-hidden="true">badge</Graphic>
							<Text>{$l.menu.employees}</Text>
						</Item>
						{/if}
						<Item href="javascript:void(0)" on:click={() => logout()}>
							<Graphic class="material-icons" aria-hidden="true">logout</Graphic>
							<Text>{$l.menu.logout}</Text>
						</Item>
					</List>

					<Button on:click={() => toggleLanguage()} style="position: absolute; bottom: 5px; left: 5px;">
						<Label>{language}</Label>
					</Button>

					<footer on:click={() => easterEgg = !easterEgg}>{easterEgg ? $l.menu.footerAlt : $l.menu.footer}</footer>
				</Content>
			</Drawer>

			<AppContent>
				<div class="drawer-button">
					<IconButton class="material-icons" on:click={() => (drawerOpen = !drawerOpen)}>menu</IconButton>
				</div>
				<EasterEgg bind:show={easterEgg}/>
				
				<div class="{$page.url.pathname === "/" ? '' : 'content'}">
					<slot/>
				</div>
				
			</AppContent>
	</div>
	<ConfirmDialog/>
	<Snackbar/>
</main>

<style lang="scss">
	.font-medium {
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 2.8rem;
	}
	.font-extralight {
		font-family: 'Poppins', sans-serif;
		font-weight: 200;
		font-size: 2.8rem;
	}
	.font-regular {
		font-family: 'Poppins', sans-serif;
		font-weight: 400;
		padding-top: 10px;
	}
	.drawer-button {
		position: absolute;
		z-index: 100;
	}
	.content {
		padding: 3rem 0;
		width: min(100% - 2em, 1200px);
		margin: auto;
	}

	footer {
		bottom: 5px;
		position: absolute;
		right: 5px;
		font-family: Roboto;
		font-size: 0.6rem;
		font-weight: 100;
		letter-spacing: 0.02rem;
	}
</style>
