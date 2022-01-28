<script lang="ts">
	import { OpenAPI, UserService } from "./gen"
	OpenAPI.BASE = "http://localhost:8080"
	import "svelte-material-ui/bare.css";
	// all possible routes
	import Home from "./routes/Home.svelte";
	import Clients from "./routes/Clients.svelte";
	import Client from "./routes/Client.svelte";
	import Templates from "./routes/Templates.svelte";
	import NeedsAssessment from "./routes/NeedsAssessment.svelte";
	import Employees from "./routes/Employees.svelte";
	import Employee from "./routes/Employee.svelte";

	import { createEventDispatcher } from "svelte";
	import IconButton from "@smui/icon-button";
	import { Router, links, Route } from "svelte-routing";
	import Drawer, {
		AppContent,
		Content,
		Header,
		Title,
		Subtitle,
	} from "@smui/drawer";
	import List, { Item, Graphic, Separator, Text } from "@smui/list";
	
	import { admin } from "./stores";

	let drawerOpen = true;
	let active = window.location.pathname.substring(1);
	const dispatch = createEventDispatcher();
	function logout() {
		dispatch("logout");
	}

	function setActive(value: string) {
		if (window.screen.width < 800) {
			drawerOpen = !drawerOpen;
		}
		active = value;
	}
	let adminPrivileges = false;
	
	let name = "";
	UserService.get().then(employee => {
		adminPrivileges = employee.admin;
		name = employee.name;
	})
	let isAdminMode = false;
	admin.subscribe( value => { isAdminMode = value; });
	function toggleAdminMode() {
		admin.set(!isAdminMode);
	}
</script>

<main>
	<div use:links>
		<Router>
			<Drawer variant="modal" bind:open={drawerOpen}>
				<Header>
					<img src="../logo.png" alt="Logo" width="60px" />
					<Title><span class="font-medium">Libero</span><span class="font-extralight">Life</span></Title>
					<Subtitle><span class="font-regular">Kopf frei bei Finanzfragen</span></Subtitle>
				</Header>
				<Content>
					<List>
						<Item href="/" on:click={() => setActive("")} activated={active === ""}>
							<Graphic class="material-icons" aria-hidden="true">home</Graphic>
							<Text>Home</Text>
						</Item>
						<Item href="/clients" on:click={() => setActive("clients")} activated={active === "clients"}>
							<Graphic class="material-icons" aria-hidden="true">people</Graphic>
							<Text>Clients</Text>
						</Item>
						<Item href="/templates" on:click={() => setActive("templates")} activated={active === "templates"}>
							<Graphic class="material-icons" aria-hidden="true">file_copy</Graphic>
							<Text>Templates</Text>
						</Item>
						<Item href="/partner" on:click={() => setActive("partner")} activated={active === "partner"}>
							<Graphic class="material-icons" aria-hidden="true">apartment</Graphic>
							<Text>Partner</Text>
						</Item>
						<Item href="/contracts" on:click={() => setActive("contracts")} activated={active === "contracts"}>
							<Graphic class="material-icons" aria-hidden="true">task</Graphic>
							<Text>Contracts</Text>
						</Item>
						<Item href="/notes" on:click={() => setActive("notes")} activated={active === "notes"}>
							<Graphic class="material-icons" aria-hidden="true">assignment</Graphic>
							<Text>Notes</Text>
						</Item>
						
						<Separator />
						<Item href="javascript:void(0)" on:click={() => toggleAdminMode()} class="{isAdminMode ? 'admin-content' : ''}">
							<Graphic class="material-icons" aria-hidden="true">military_tech</Graphic>
							<Text>Admin Mode</Text>
						</Item>
						{#if isAdminMode}
						<Item href="/employees" on:click={() => setActive("employees")} activated={active === "employees"}>
							<Graphic class="material-icons" aria-hidden="true">badge</Graphic>
							<Text>Employees</Text>
						</Item>
						{/if}
						
						<Item href="javascript:void(0)" on:click={() => logout()}>
							<Graphic class="material-icons" aria-hidden="true">logout</Graphic>
							<Text>Logout</Text>
						</Item>
					</List>

					<footer>created by quellkunst.com</footer>
				</Content>
			</Drawer>

			<AppContent>
				<div class="drawer-button">
					<IconButton class="material-icons" on:click={() => (drawerOpen = !drawerOpen)}>menu</IconButton>
				</div>

				<Route path="/">
					<Home {name} />
				</Route>
				<div class="{active !== "" ? 'content' : ''}">
					<Route path="/clients" component={Clients} />
					<Route path="client/:id" component={Client} />
					<Route path="/templates" component={Templates} />
					<Route path="/needs_assessment" component={NeedsAssessment} />
					<Route path="/employees" component={Employees} />
					<Route path="employee/:id" component={Employee} />
				</div>
				
				
			</AppContent>
		</Router>
	</div>
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
		padding: 3rem 2rem;
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
