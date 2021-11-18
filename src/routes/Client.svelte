<script lang="ts">
    import { navigate } from "svelte-routing";
    import Paper from '@smui/paper';
    import Fab, { Label, Icon } from '@smui/fab';
    import Tab, { Icon as TabIcon, Label as TabLabel } from '@smui/tab';
    import TabBar from '@smui/tab-bar';

    import Client_Personal from '../components/Client_Personal.svelte';
    import Client_Legal from '../components/Client_Legal.svelte';

    import { Client } from '../classes/Client';
    export let id:number;
    $: client = Client.byId(id);

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

</script>

<div class="form-container">
<Paper elevation={6}>

    <TabBar {tabs} let:tab bind:active>
        <Tab {tab}>
          <TabIcon class="material-icons">{tab.icon}</TabIcon>
          <TabLabel>{tab.label}</TabLabel>
        </Tab>
    </TabBar>

    {#if active.label == 'Personal'}
        <Client_Personal {client} />
    {:else if active.label == 'Bank'}
        <Client_Legal {client} />
    {/if}

    <div class="button-container">
        <Fab color="primary" on:click={() => navigate("/clients")} extended>
            <Icon class="material-icons">save</Icon>
            <Label>Save</Label>
        </Fab>
    </div>
    
</Paper>
</div>
<style>
    .form-container {
        max-width: 1000px;
        margin: auto;
        margin-bottom: 2rem;
    }

    .button-container {
        display: flex;
        justify-content: flex-end;
        margin: 1rem;
    }
</style>