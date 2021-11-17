<script lang="ts">
    import { navigate } from "svelte-routing";
    import LayoutGrid, { Cell } from '@smui/layout-grid';
    import Textfield from '@smui/textfield';
    import Paper from '@smui/paper';
    import Button, { Label, Icon } from '@smui/button';
    import { Client } from '../classes/Client';
    import Radio from '@smui/radio';
    import FormField from '@smui/form-field';

    import Tab, { Icon as TabIcon, Label as TabLabel } from '@smui/tab';
    import TabBar from '@smui/tab-bar';

    export let id:number;
    $: client = Client.byId(id);
    let gender = ""; 


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

    <LayoutGrid>
        <Cell span={6}>
            <Textfield style="width: 100%;" bind:value={client.firstName} label="First Name"/>
        </Cell>
        <Cell span={6}>
            <Textfield style="width: 100%;" bind:value={client.lastName} label="Last Name"/>
        </Cell>
        <Cell span={12}>
            <Textfield style="width: 100%;" bind:value={client.email} label="E-Mail"/>
        </Cell>
        <Cell span={6}>
            <div class="gender-container">
                <FormField>
                    <Radio bind:group={gender} value="M" touch />
                    <span slot="label">male</span>
                </FormField>
                <FormField>
                    <Radio bind:group={gender} value="W" touch />
                    <span slot="label">female</span>
                </FormField>
                <FormField>
                    <Radio bind:group={gender} value="X" touch />
                    <span slot="label">any</span>
                </FormField>
            </div>
        </Cell>
        <Cell span={6}>
            <Textfield style="width: 100%;" bind:value={client.birthday} label="Birthday" type="datetime-local"/>
        </Cell>
        <Cell span={6}>
            <Textfield style="width: 100%;" bind:value={client.occupation} label="Occupation"/>
        </Cell>
        <Cell span={3}>
            <Textfield style="width: 100%;" bind:value={client.title} label="Title"/>
        </Cell>
        <Cell span={3}>
            <Textfield style="width: 100%;" bind:value={client.academicDegree} label="Degree"/>
        </Cell>

        <Cell span={6}>
            <Textfield style="width: 100%;" bind:value={client.phone} label="Phone"/>
        </Cell>
        <Cell span={6}>
            <Textfield style="width: 100%;" bind:value={client.mobile} label="Mobile"/>
        </Cell>
        <Cell span={12}>
            <Textfield style="width: 100%;" bind:value={client.address} label="Address"/>
        </Cell>

        <Cell span={4}>
            <Textfield style="width: 100%;" bind:value={client.country.displayName} label="Country"/>
        </Cell>
        <Cell span={4}>
            <Textfield style="width: 100%;" bind:value={client.zipCode} label="Zip Code"/>
        </Cell>
        <Cell span={4}>
            <Textfield style="width: 100%;" bind:value={client.city} label="City"/>
        </Cell>

    </LayoutGrid>
    <div class="button-container">
        <Button on:click={() => navigate("/clients")} touch variant="unelevated">
            <Icon class="material-icons">save</Icon>
            <Label>Save</Label>
        </Button>
    </div>

    {/if}
</Paper>
</div>
<style>
    .form-container {
        max-width: 1000px;
        margin: auto;
    }
    .gender-container {
        display: flex;
        justify-content: space-evenly;
    }
    .button-container {
        display: flex;
        justify-content: flex-end;
    }
</style>