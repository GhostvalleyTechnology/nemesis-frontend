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
    import Contracts from "../components/client/Contracts.svelte";
    import FloatingActionButton from "../components/FloatingActionButton.svelte";
    import l from "../localisation";
    import Contract from "../components/client/Contract.svelte";
    import { ContractRoute } from "../components/client/ContractRouteType";
import Documents from "../components/client/Documents.svelte";
    export let id: string;
    let client: ClientDto = {proofOfIdentities:[]};
    let newClient = !isNumeric(id);
    if(!newClient) {
        ClientService.get(+id).then((response) => (client = response));
    }

    let tabs = [
        {
            id: "personal",
            icon: "person",
            label: "Personal",
        },
        {
            id: "legal",
            icon: "account_balance",
            label: "Legal",
        },
        {
            id: "contracts",
            icon: "file_present",
            label: "Verträge",
        },
        {
            id: "documents",
            icon: "article",
            label: "Dokumente",
        },
    ];
    let active = tabs[0];

    function save() {
        if (newClient) {
            ClientService.add(client);
        } else {
            ClientService.update(client);
        }
        edit = !edit;
    }
    let edit = false;
    let selectedContract: ContractRoute;
    $: if (active.id !== 'contracts') {
        selectedContract = {
        id: 0, edit: false, add: false
        }
    }
</script>
<FormContainer>
    <TabBar {tabs} let:tab bind:active>
        <Tab {tab}>
            <TabIcon class="material-icons">{tab.icon}</TabIcon>
            <TabLabel>{tab.label}</TabLabel>
        </Tab>
    </TabBar>

    <div class="container">
        {#if active.id == "personal"}
            <PersonalComponent bind:client bind:edit />
        {:else if active.id == "legal"}
            <Legal bind:client bind:edit />
        {:else if active.id == "contracts"}
            {#if !selectedContract.add && !selectedContract.edit }
            <Contracts bind:client bind:selectedContract/>
            <FloatingActionButton on:click={() => {selectedContract.add = true; selectedContract.edit = false}} icon='add' label={$l.add}/>
            {:else}
            <Contract bind:client edit={true} bind:selectedContract/>
            {/if}
        {:else if active.id == "documents"}
            <Documents bind:client />
        {/if}
    </div>
    {#if active.id != "contracts" && active.id != "documents"}
        {#if !edit } 
        <FloatingActionButton on:click={() => edit = !edit} icon='edit' label={$l.edit} />
        {:else}
        <FloatingActionButton on:click={save} icon='save' label={$l.save} />
        {/if}
    {/if}
</FormContainer>

<style>
    .container {
        padding-top: 2rem;
    }
</style>
