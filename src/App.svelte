<script lang="ts">
	import { OpenAPI, UserService } from "./gen"
	// @ts-ignore
	let production: boolean = app_run_mode_production;
	OpenAPI.BASE = production ? "/" : "http://localhost:8080"
	OpenAPI.HEADERS = {
		'Accept': '*/*'
	}
	import "svelte-material-ui/bare.css";
	import l, {de, en} from "./localisation";
	// all possible routes
	import Home from "./routes/Home.svelte";
	import Clients from "./routes/Clients.svelte";
	import Client from "./routes/Client.svelte";
	import Templates from "./routes/Templates.svelte";
	import Template from "./routes/Template.svelte";
	import NeedsAssessment from "./routes/NeedsAssessment.svelte";
	import PartnerServiceTypes from "./routes/PartnerServiceTypes.svelte";
	import Partners from "./routes/Partners.svelte";
	import Partner from "./routes/Partner.svelte";
	import Employees from "./routes/Employees.svelte";
	import Employee from "./routes/Employee.svelte";
	import Button, { Label } from '@smui/button';
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
	function logout() {
		alert("logout");
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

	let touchStartX: number;
	let propablyWantsToMenu = false;
	function touchStart(x: number) {
		propablyWantsToMenu = x < (screen.width / 4) || x > (screen.width - (screen.width / 4));
		touchStartX = x;
	}
	function touchEnd(touchEndX: number) {
		if (!propablyWantsToMenu) return;
		if (touchEndX < (touchStartX-20)) drawerOpen = !drawerOpen;
  		if (touchEndX > (touchStartX+20)) drawerOpen = !drawerOpen;
	}
</script>

<svelte:window on:touchstart={(e) => touchStart(e.changedTouches[0].screenX)} on:touchend={(e) => touchEnd(e.changedTouches[0].screenX)}/>

<main>
	<div use:links>
		<Router>
			<Drawer variant="modal" bind:open={drawerOpen}>
				<Header>
					<img src="../logo.png" alt="Logo" width="60px" />
					<Title><span class="font-medium">Libero</span><span class="font-extralight">Life</span></Title>
					<Subtitle><span class="font-regular">{$l.slogan}</span></Subtitle>
				</Header>
				<Content>
					<List>
						<Item href="/" on:click={() => setActive("")} activated={active === ""}>
							<Graphic class="material-icons" aria-hidden="true">home</Graphic>
							<Text>{$l.menu.home}</Text>
						</Item>
						<Item href="/clients" on:click={() => setActive("clients")} activated={active === "clients"}>
							<Graphic class="material-icons" aria-hidden="true">people</Graphic>
							<Text>{$l.menu.clients}</Text>
						</Item>
						<Item href="/templates" on:click={() => setActive("templates")} activated={active === "templates"}>
							<Graphic class="material-icons" aria-hidden="true">file_copy</Graphic>
							<Text>{$l.menu.templates}</Text>
						</Item>
						<Item href="/partners" on:click={() => setActive("partner")} activated={active === "partner"}>
							<Graphic class="material-icons" aria-hidden="true">apartment</Graphic>
							<Text>{$l.menu.partner}</Text>
						</Item>
						<Item href="/contracts" on:click={() => setActive("contracts")} activated={active === "contracts"}>
							<Graphic class="material-icons" aria-hidden="true">task</Graphic>
							<Text>{$l.menu.contracts}</Text>
						</Item>
						<Item href="/notes" on:click={() => setActive("notes")} activated={active === "notes"}>
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
						<Item href="/employees" on:click={() => setActive("employees")} activated={active === "employees"}>
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

					<footer>{$l.menu.footer}</footer>
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
					<Route path="/template/new" component={Template} />
					<Route path="/needs_assessment" component={NeedsAssessment} />
					<Route path="/partners" component={Partners} />
					<Route path="/partner_service_types" component={PartnerServiceTypes} />
					<Route path="/partner/:id" component={Partner} />
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
