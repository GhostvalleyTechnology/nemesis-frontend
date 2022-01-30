<script lang="ts">
    import l from '../../localisation';
    import { slide } from 'svelte/transition';
    import LayoutGrid, { Cell } from '@smui/layout-grid';
    import Textfield from '@smui/textfield';
    import Radio from '@smui/radio';
    import FormField from '@smui/form-field';
    import Checkbox from '@smui/checkbox';
    import Button, { Label, Icon } from '@smui/button';
    import { Client, MaritalStatus, GenericPerson } from '../../gen';
    import GenericPersonComponent from './GenericPersonComponent.svelte';
    import CountryComponent from '../CountryComponent.svelte';

    export let client: Client;

    function addChild() {
        if(!client.children) {
            client.children = []
        }
        let children = client.children;
        let child: GenericPerson = {};
        children.push(child)
        client.children = children;
    }

    function removeChild(child: GenericPerson) {
        let children = client.children;
        client.children = children.filter(item => item !== child);
    }
</script>

<GenericPersonComponent bind:person={client}/>

<LayoutGrid style="padding-bottom: 3rem;">
    <Cell span={12} align="middle">
        <FormField>
            <Checkbox bind:checked={client.militaryServiceDone} touch />
            <span slot="label">{$l.personal.militaryServiceDone}</span>
        </FormField>
    </Cell>
    <Cell span={12} align="middle">
        <FormField>
            <Checkbox bind:checked={client.smoker} touch />
            <span slot="label">{$l.personal.smoker}</span>
        </FormField>
    </Cell>
    <Cell span={3} align="middle">
        <FormField>
            <Checkbox bind:checked={client.pets} touch />
            <span slot="label">{$l.personal.pets}</span>
        </FormField>
    </Cell>
    {#if client.pets && client.pets == true}
    <Cell span={9}><div transition:slide|local>
        <Textfield input$emptyValueUndefined={true} input$emptyValueNull={true} style="width: 100%;" bind:value={client.petsRemarks} label={$l.personal.petsRemarks}/></div>
    </Cell>
    {/if}
    <Cell span={12}>
        <div class="radio-container">
            <FormField>
                <Radio bind:group={client.maritalStatus} value="single" touch />
                <span slot="label">{$l.personal.maritalStatus.single}</span>
            </FormField>
            <FormField>
                <Radio bind:group={client.maritalStatus} value="married" touch />
                <span slot="label">{$l.personal.maritalStatus.married}</span>
            </FormField>
            <FormField>
                <Radio bind:group={client.maritalStatus} value="divorced" touch />
                <span slot="label">{$l.personal.maritalStatus.divorced}</span>
            </FormField>
        </div>
    </Cell>
    {#if client.maritalStatus == MaritalStatus.MARRIED}
    <Cell span={12}><div transition:slide>
        <GenericPersonComponent bind:person={client.partner}/></div>
    </Cell>
    {/if}

    {#each client.children || [] as child}
    <Cell span={1} align="middle"><div transition:slide>
        <Button on:click={() => removeChild(child)}>
            <Icon class="material-icons">close</Icon>
        </Button>
    </div></Cell>
    <Cell span={11}><div transition:slide>
        <GenericPersonComponent bind:person={child} childMode={true}/>
    </div></Cell>
    {/each}
    <Cell span={12}>
        <Button on:click={() => addChild()}>
            <Icon class="material-icons">add</Icon>
            <Label>{$l.personal.addChild}</Label>
        </Button>
    </Cell>
</LayoutGrid>

<LayoutGrid style="padding-bottom: 3rem;">
    <Cell span={12}>
        <Textfield input$emptyValueUndefined={true} input$emptyValueNull={true} style="width: 100%;" bind:value={client.address} label={$l.personal.address}/>
    </Cell>
    <Cell span={4}>
        <CountryComponent style="width: 100%;" country={client.country} label={$l.personal.country}/>
    </Cell>
    <Cell span={4}>
        <Textfield input$emptyValueUndefined={true} input$emptyValueNull={true} style="width: 100%;" bind:value={client.zipCode} label={$l.personal.zipCode}/>
    </Cell>
    <Cell span={4}>
        <Textfield input$emptyValueUndefined={true} input$emptyValueNull={true} style="width: 100%;" bind:value={client.city} label={$l.personal.city}/>
    </Cell>
    <Cell span={6}>
        <Textfield input$emptyValueUndefined={true} input$emptyValueNull={true} style="width: 100%;" bind:value={client.phone} label={$l.personal.phone}/>
    </Cell>
    <Cell span={6}>
        <Textfield input$emptyValueUndefined={true} input$emptyValueNull={true} style="width: 100%;" bind:value={client.mobile} label={$l.personal.mobile}/>
    </Cell>
</LayoutGrid>

<style lang="scss">
    .radio-container {
        display: flex;
        justify-content: space-evenly;
    }
</style>