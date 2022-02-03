<script lang="ts">
    import l from '../../localisation';
    import { slide } from 'svelte/transition';
    import LayoutGrid, { Cell } from '@smui/layout-grid';
    import Radio from '@smui/radio';
    import FormField from '@smui/form-field';
    import Checkbox from '@smui/checkbox';
    import Button, { Label, Icon } from '@smui/button';
    import { ClientDto, MaritalStatus, GenericPersonDto } from '../../gen';
    import GenericPersonComponent from './GenericPersonComponent.svelte';
    import CountryComponent from '../CountryComponent.svelte';
    import LabelTextfieldToggle from '../LabelTextfieldToggle.svelte';

    export let client: ClientDto;
    export let edit: boolean;

    function addChild() {
        if(!client.children) {
            client.children = []
        }
        let children = client.children;
        let child: GenericPersonDto = {};
        children.push(child)
        client.children = children;
    }

    function removeChild(child: GenericPersonDto) {
        let children = client.children;
        client.children = children.filter(item => item !== child);
    }
</script>

<GenericPersonComponent bind:person={client} {edit}/>

<LayoutGrid style="padding-bottom: 3rem;">
    <Cell span={12} align="middle">
        <FormField>
            <Checkbox bind:checked={client.militaryServiceDone} touch  disabled={!edit}/>
            <span slot="label">{$l.personal.militaryServiceDone}</span>
        </FormField>
    </Cell>
    <Cell span={12} align="middle">
        <FormField>
            <Checkbox bind:checked={client.smoker} touch  disabled={!edit}/>
            <span slot="label">{$l.personal.smoker}</span>
        </FormField>
    </Cell>
    <Cell span={3} align="middle">
        <FormField>
            <Checkbox bind:checked={client.pets} touch  disabled={!edit}/>
            <span slot="label">{$l.personal.pets}</span>
        </FormField>
    </Cell>
    {#if client.pets && client.pets == true}
    <Cell span={9}><div transition:slide|local>
        <LabelTextfieldToggle {edit} bind:value={client.petsRemarks} label={$l.personal.petsRemarks}/></div>
    </Cell>
    {/if}
    <Cell span={12}>
        <div class="radio-container">
            <FormField>
                <Radio bind:group={client.maritalStatus} value="single" touch disabled={!edit}/>
                <span slot="label">{$l.personal.maritalStatus.single}</span>
            </FormField>
            <FormField>
                <Radio bind:group={client.maritalStatus} value="married" touch disabled={!edit}/>
                <span slot="label">{$l.personal.maritalStatus.married}</span>
            </FormField>
            <FormField>
                <Radio bind:group={client.maritalStatus} value="divorced" touch disabled={!edit}/>
                <span slot="label">{$l.personal.maritalStatus.divorced}</span>
            </FormField>
        </div>
    </Cell>
    {#if client.maritalStatus == MaritalStatus.MARRIED}
    <Cell span={12}><div transition:slide>
        <GenericPersonComponent bind:person={client.partner} {edit}/></div>
    </Cell>
    {/if}

    {#each client.children || [] as child}
    <Cell span={11}><div transition:slide>
        <GenericPersonComponent bind:person={child} childMode={true} {edit}/>
    </div></Cell>
    {#if edit}
    <Cell span={1} align="middle"><div transition:slide>
        <Button on:click={() => removeChild(child)}>
            <Icon class="material-icons">close</Icon>
        </Button>
    </div></Cell>
    {/if}
    {/each}
    {#if edit}
    <Cell span={12}>
        <Button on:click={() => addChild()}>
            <Icon class="material-icons">add</Icon>
            <Label>{$l.personal.addChild}</Label>
        </Button>
    </Cell>
    {/if}
</LayoutGrid>

<LayoutGrid style="padding-bottom: 3rem;">
    <Cell span={12}>
        <LabelTextfieldToggle {edit} bind:value={client.address} label={$l.personal.address}/>
    </Cell>
    <Cell span={4}>
        <CountryComponent {edit} bind:country={client.country} label={$l.personal.country}/>
    </Cell>
    <Cell span={4}>
        <LabelTextfieldToggle {edit} bind:value={client.zipCode} label={$l.personal.zipCode}/>
    </Cell>
    <Cell span={4}>
        <LabelTextfieldToggle {edit} bind:value={client.city} label={$l.personal.city}/>
    </Cell>
    <Cell span={6}>
        <LabelTextfieldToggle {edit} bind:value={client.phone} label={$l.personal.phone}/>
    </Cell>
    <Cell span={6}>
        <LabelTextfieldToggle {edit} bind:value={client.mobile} label={$l.personal.mobile}/>
    </Cell>
</LayoutGrid>

<style lang="scss">
    .radio-container {
        display: flex;
        justify-content: space-evenly;
    }
</style>