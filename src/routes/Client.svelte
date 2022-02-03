<script lang="ts">
    import { navigate } from "svelte-routing";
    import Fab, { Label, Icon } from "@smui/fab";
    import Tab, { Icon as TabIcon, Label as TabLabel } from "@smui/tab";
    import TabBar from "@smui/tab-bar";

    import { ClientDto, ClientService } from "../gen";
    import isNumeric from "../isNumeric";
    import PersonalComponent from "../components/client/PersonalComponent.svelte";
    import FormContainer from "../components/FormContainer.svelte";
    import Legal from "../components/client/Legal.svelte";
    export let id: string;
    let client: ClientDto = {proofOfIdentities:[]};
    let newClient = !isNumeric(id);
    if(!newClient) {
        ClientService.get(+id).then((response) => (client = response));
    }

    let tabs = [
        {
            icon: "person",
            label: "Personal",
        },
        {
            icon: "account_balance",
            label: "Legal",
        },
        {
            icon: "file_present",
            label: "Documents",
        },
    ];
    let active = tabs[0];

    function uploadDocument() {
        alert("upload");
    }
    function save() {
        if (newClient) {
            ClientService.add(client);
        } else {
            ClientService.update(client);
        }
    }
    let edit = true;
</script>

<pre>{JSON.stringify(client)}</pre>

<FormContainer>
    <TabBar {tabs} let:tab bind:active>
        <Tab {tab}>
            <TabIcon class="material-icons">{tab.icon}</TabIcon>
            <TabLabel>{tab.label}</TabLabel>
        </Tab>
    </TabBar>

    <div class="container">
        {#if active.label == "Personal"}
            <PersonalComponent bind:client bind:edit />
        {:else if active.label == "Legal"}
            <Legal bind:client bind:edit />
        {:else if active.label == "Documents"}
            <!-- <Client_Documents {client} /> -->
        {/if}
    </div>

    <div class="button-container">
        {#if active.label == "Personal" || active.label == "Legal"}
            <Fab color="primary" on:click={() => save()} extended>
                <Icon class="material-icons">save</Icon>
                <Label>Save</Label>
            </Fab>
        {:else if active.label == "Documents"}
            <Fab
                color="primary"
                on:click={() => navigate("/documents/add/" + client.id)}
                extended
            >
                <Icon class="material-icons">add</Icon>
                <Label>Add</Label>
            </Fab>
        {/if}
    </div>
</FormContainer>

<style>
    pre {
        max-width: 1000px;
        white-space: pre-wrap;       /* Since CSS 2.1 */
        white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
        white-space: -pre-wrap;      /* Opera 4-6 */
        white-space: -o-pre-wrap;    /* Opera 7 */
        word-wrap: break-word;       /* Internet Explorer 5.5+ */
    }
    .button-container {
        display: flex;
        justify-content: flex-end;
        margin: 1rem;
    }

    .container {
        padding-top: 2rem;
    }
</style>
