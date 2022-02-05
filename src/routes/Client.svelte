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
    ];
    let active = tabs[0];

    function save() {
        if (newClient) {
            ClientService.add(client);
        } else {
            ClientService.update(client);
        }
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
            <FloatingActionButton on:click={save} icon='save' label={$l.save} />
        {:else if active.id == "legal"}
            <Legal bind:client bind:edit />
            <FloatingActionButton on:click={save} icon='save' label={$l.save} />
        {:else if active.id == "contracts"}
            {#if !selectedContract.add && !selectedContract.edit }
            <Contracts bind:client bind:selectedContract/>
            <FloatingActionButton on:click={() => {selectedContract.add = true; selectedContract.edit = false}} icon='add' label={$l.add}/>
            {:else}
            <Contract bind:client edit={true} bind:selectedContract/>
            {/if}
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

    .container {
        padding-top: 2rem;
    }
</style>
