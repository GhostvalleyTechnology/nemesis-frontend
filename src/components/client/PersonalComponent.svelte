<script lang="ts">
    import l from '../../localisation';
    import { slide } from 'svelte/transition';
    import LayoutGrid, { Cell } from '@smui/layout-grid';
    import Radio from '@smui/radio';
    import FormField from '@smui/form-field';
    import Button, { Label, Icon } from '@smui/button';
    import { ClientDto, MaritalStatus, GenericPersonDto } from '../../gen';
    import GenericPersonComponent from './GenericPersonComponent.svelte';
    import CountryComponent from '../CountryComponent.svelte';
    import LabelTextfieldToggle from '../LabelTextfieldToggle.svelte';
    import Divider from '../Divider.svelte';
    import H2 from '../H2.svelte';
    import H3 from '../H3.svelte';
    import StylizedCheckbox from '../StylizedCheckbox.svelte';
    import { createEmptyGenericPersonDto } from '../../service/defaults';

    export let client: ClientDto;
    export let edit: boolean;

    function addChild() {
        if(!client.children) {
            client.children = []
        }
        let children = client.children;
        let child = createEmptyGenericPersonDto();
        children.push(child)
        client.children = children;
    }

    const removeChild = (child: GenericPersonDto) => {
        let children = client.children;
        client.children = children.filter(item => item !== child);
    }

    $: if(client.maritalStatus == MaritalStatus.MARRIED) {
        client.partner = client.partner || createEmptyGenericPersonDto();
    } else {
        client.partner = undefined;
    }

</script>

<GenericPersonComponent bind:person={client} {edit}/>

<LayoutGrid style="padding-bottom: 3rem;">
    <Cell span={6}>
        <StylizedCheckbox bind:value={client.militaryServiceDone} disabled={!edit} label={$l.personal.militaryServiceDone}/>
    </Cell>
    <Cell span={6}>
        <StylizedCheckbox bind:value={client.smoker} disabled={!edit} label={$l.personal.smoker}/>
    </Cell>
    <Cell span={6}>
        <StylizedCheckbox bind:value={client.pets} disabled={!edit} label={$l.personal.pets}/>
    </Cell>
    {#if client.pets && client.pets == true}
    <Cell span={6}><div transition:slide|local>
        <LabelTextfieldToggle {edit} bind:value={client.petsRemarks} label={$l.personal.petsRemarks}/></div>
    </Cell>
    {/if}
    <Cell span={12}>
        <Divider/>
        <H2>Anschrift</H2>
    </Cell>
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
    <Cell span={12}>
        <Divider/>
        <H2>Familienstand</H2>
    </Cell>
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
    <Cell span={12}>
        <div transition:slide>
            <H3>Partner:in</H3>
            <GenericPersonComponent bind:person={client.partner} {edit}/>
        </div>
    </Cell>
    {/if}

    {#if client.children.length > 0}
    <Cell span={12}>
        <Divider/>
        <H3>{client.children.length == 1 ? 'Kind' : 'Kinder'}</H3>
    </Cell>
    {/if}
    {#each client.children as child}
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

<style lang="scss">
    .radio-container {
        display: flex;
        justify-content: space-evenly;
    }
</style>