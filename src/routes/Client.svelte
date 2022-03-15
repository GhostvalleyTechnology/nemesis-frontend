<script lang="ts">
    import { snackbar, confirm } from "../stores";
    import Tab, { Icon as TabIcon, Label as TabLabel } from "@smui/tab";
    import TabBar from "@smui/tab-bar";
    import Button, { Label, Icon } from '@smui/button';
    import { ClientDto, ClientService } from "../gen";
    import PersonalComponent from "../components/client/PersonalComponent.svelte";
    import FormContainer from "../components/FormContainer.svelte";
    import Legal from "../components/client/Legal.svelte";
    import Contracts from "../components/client/Contracts.svelte";
    import FloatingActionButton from "../components/FloatingActionButton.svelte";
    import l from "../localisation";
    import Contract from "../components/client/Contract.svelte";
    import { ContractRoute } from "../components/client/ContractRouteType";
    import Documents from "../components/client/Documents.svelte";
    import { createEmptyClientDto } from "../service/defaults";
    import { navigate } from "svelte-routing";
    import H2 from "../components/H2.svelte";
    import AdminGuard from "../components/AdminGuard.svelte";
    export let id: string;

    export let location;

    let client: ClientDto = createEmptyClientDto();
    let newClient = id === 'new';

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
    ];

    if(!newClient) {
        ClientService.get(+id).then((response) => (client = response));
        tabs.push({
            id: "contracts",
            icon: "file_present",
            label: "Polizzen",
        });
        tabs.push({
            id: "documents",
            icon: "article",
            label: "Dokumente",
        });
    }
    
    const getQueryTab = () => {
        if(location.search) {
            let query = location.search.substring(1);
            let vars = query.split('&');
            for (let i = 0; i < vars.length; i++) {
                let pair = vars[i].split('=');
                if (decodeURIComponent(pair[0]) == 'tab') {
                    return decodeURIComponent(pair[1]);
                }
            }
        }
        return "personal";
    }

    let active = tabs.find(tab => tab.id == getQueryTab());

    function save() {
        if (newClient) {
            ClientService.add(client).then(_ => {snackbar.set("Kunde angelegt"); navigate("/clients")});

        } else {
            ClientService.update(client).then(_ => snackbar.set("Kundenänderungen gespeichert"));
        }
        edit = !edit;
    }
    let edit = newClient;
    let selectedContract: ContractRoute;
    $: if (active.id !== 'contracts') {
        resetTabs();
    }
    const resetTabs = () => {
        selectedContract = {
            id: 0, edit: false, add: false
        }
    }
    const deleteClient = () => {
        confirm.set({title: 'Kunde löschen?', message: 'Den Kunden wirklich löschen?', func: () => {
            ClientService.delete(client.id).then(_ => {snackbar.set("Kunde gelöscht"); navigate("/clients")});
        }});
    }
</script>
<FormContainer>
  <div class="group">
    <TabBar {tabs} let:tab bind:active>
        <Tab {tab} on:click={() => resetTabs()}>
            <TabIcon class="material-icons">{tab.icon}</TabIcon>
            <TabLabel>{tab.label}</TabLabel>
        </Tab>
    </TabBar>

    <div class="container">
        {#if active.id == "personal"}
        <div class="personal-header-container">
            <div class="personal-header-item">
                <H2>{#if newClient}Neuer Kunde{:else}Kundennummer: {client.clientNumber}{/if}</H2>
            </div>
            <div class="personal-header-item">
            <AdminGuard>{#if edit && !newClient}
                <Button on:click={deleteClient}>
                    <Icon class="material-icons">close</Icon>
                    <Label>Kunde löschen</Label>
                </Button>{/if}
            </AdminGuard>
            </div>
        </div>
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
  </div>
</FormContainer>
  
<style lang="scss">
.group {
    border: 1px solid #e3e4e6;
    border-radius: 6px;
}
.container {
    padding: 32px;
}
.personal-header-container {
  display: flex;
  justify-content: space-between;
}
.personal-header-item {
  align-self: center;
}
</style>