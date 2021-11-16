<script lang="ts">
	import Home from "./routes/Home.svelte";
	import Clients from "./routes/Clients.svelte";
	import { createEventDispatcher } from "svelte";
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
	export let displayname: string;

	function setActive(value: string) {
		active = value;
	}
</script>

<main>
	<div use:links>
		<Router>
			<Drawer variant="dismissible" bind:open={drawerOpen}>
				<Header>
					<Title>Hello {displayname}</Title>
					<Subtitle>Domí organises, manages and informs!</Subtitle>
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
							href="clients"
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
				<div class="content">
					<Route path="/" component={Home} />
					<Route path="clients" component={Clients} />
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
