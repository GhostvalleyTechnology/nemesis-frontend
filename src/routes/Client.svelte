<script lang="ts">
    import { navigate } from "svelte-routing";
    import Paper from '@smui/paper';
    import Fab, { Label, Icon } from '@smui/fab';
    import Tab, { Icon as TabIcon, Label as TabLabel } from '@smui/tab';
    import TabBar from '@smui/tab-bar';

    import Client_Personal from '../components/Client_Personal.svelte';
    import Client_Legal from '../components/Client_Legal.svelte';
    import Client_Documents from '../components/Client_Documents.svelte';

    import { Client, ClientService } from '../gen';
    import isNumeric from '../isNumeric'
    export let id: string;
    let client: Client = {};
    let newClient = !isNumeric(id);
    if(!newClient) {
        ClientService.get(+id).then(response => client = response);
    } 

    let tabs = [
        {
            icon: 'person',
            label: 'Personal',
        },
        {
            icon: 'account_balance',
            label: 'Bank',
        },
        {
            icon: 'file_present',
            label: 'Documents',
        },
    ];
  let active = tabs[0];
  function uploadDocument() {
    alert("upload");
  }
  function save() {
      if(newClient) {
        ClientService.add(client);
      } else {
        ClientService.update(client);
      }
  }

</script>

<div class="form-container">
<Paper elevation={6}>

    <TabBar {tabs} let:tab bind:active>
        <Tab {tab}>
          <TabIcon class="material-icons">{tab.icon}</TabIcon>
          <TabLabel>{tab.label}</TabLabel>
        </Tab>
    </TabBar>

    <div class="tab-container">
    {#if active.label == 'Personal'}
        <Client_Personal {client} />
    {:else if active.label == 'Bank'}
        <Client_Legal {client} />
    {:else if active.label == 'Documents'}
        <Client_Documents {client} />
    {/if}
</div>

    <div class="button-container">
        {#if active.label == 'Personal' || active.label == 'Bank'}
        <Fab color="primary" on:click={() => save()} extended>
            <Icon class="material-icons">save</Icon>
            <Label>Save</Label>
        </Fab>
        {:else if active.label == 'Documents'}
        <Fab color="primary" on:click={() => navigate("/documents/add/"+client.id)} extended>
            <Icon class="material-icons">add</Icon>
            <Label>Add</Label>
        </Fab>
        {/if}
    </div>
    
</Paper>
</div>
<style>
    .form-container {
        max-width: 1000px;
        margin: auto;
    }

    .button-container {
        display: flex;
        justify-content: flex-end;
        margin: 1rem;
    }

    .tab-container {
        padding-top: 2rem;
    }
</style>