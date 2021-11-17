<script lang="ts">
	import { userName } from "./stores";
	import Home from "./routes/Home.svelte";
	import Clients from "./routes/Clients.svelte";
	import Client from "./routes/Client.svelte";
	import { createEventDispatcher } from "svelte";
	import IconButton from '@smui/icon-button';
	import { Router, links, Route } from "svelte-routing";
	import Drawer, {
		AppContent,
		Content,
		Header,
		Title,
		Subtitle,
	} from "@smui/drawer";
	import List, { Item, Graphic, Separator, Text } from "@smui/list";

	let drawerOpen = true;
	let active = window.location.pathname.substring(1);
	const dispatch = createEventDispatcher();
	function logout() {
		dispatch("logout");
	}
	let displayname: string;
	userName.subscribe(name => {displayname = name});
	function setActive(value: string) {
		if(window.screen.width < 800) {
			drawerOpen = !drawerOpen;
		}
		active = value;
	}
</script>

<main>
	<div use:links>
		<Router>
			<Drawer variant="dismissible" bind:open={drawerOpen}>
				<Header>
					<Title>Hello {displayname}</Title>
					<Subtitle>Hier könnte Ihre Werbung stehen!</Subtitle>
				</Header>
				<Content>
					<List>
						<Item
							href="/"
							on:click={() => setActive("")}
							activated={active === ""}
						>
							<Graphic class="material-icons" aria-hidden="true"
								>home</Graphic
							>
							<Text>Home</Text>
						</Item>
						<Item
							href="/clients"
							on:click={() => setActive("clients")}
							activated={active === "clients"}
						>
							<Graphic class="material-icons" aria-hidden="true"
								>people</Graphic
							>
							<Text>Clients</Text>
						</Item>
						<Separator />
						<Item
							href="javascript:void(0)"
							on:click={() => logout()}
						>
							<Graphic class="material-icons" aria-hidden="true"
								>logout</Graphic
							>
							<Text>Logout</Text>
						</Item>
					</List>
				</Content>
			</Drawer>

			<AppContent>
				<div>
					<IconButton class="material-icons" on:click={() => drawerOpen = !drawerOpen} touch>
						menu
					</IconButton>
				</div>
				<div class="content">
					<Route path="/" component={Home} />
					<Route path="/clients" component={Clients} />
					<Route path="client/:id" component={Client} />
				</div>
			</AppContent>
		</Router>
	</div>
</main>

<style>
	.content {
		padding: 1rem;
	}
</style>
