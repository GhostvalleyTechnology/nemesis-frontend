<script lang="ts">
    import l from '../../localisation';
    import LayoutGrid, { Cell } from '@smui/layout-grid';
    import Radio from '@smui/radio';
    import FormField from '@smui/form-field';
    import { ClientDto, GenericPersonDto } from '../../gen';
    import CountryComponent from '../CountryComponent.svelte';
    import SocialInsuranceInstitutionComponent from '../SocialInsuranceInstitutionComponent.svelte';
    import LabelTextfieldToggle from '../LabelTextfieldToggle.svelte';

    export let person: GenericPersonDto | ClientDto;
    export let childMode = false;
    export let edit: boolean;
</script>

<LayoutGrid style="padding-bottom: 3rem;">
    <Cell span={6}>
        <LabelTextfieldToggle {edit} bind:value={person.firstName} label={$l.personal.firstName} />
    </Cell>
    <Cell span={6}>
        <LabelTextfieldToggle {edit} bind:value={person.lastName} label={$l.personal.lastName}/>
    </Cell>
    {#if !childMode}
        <Cell span={12}>
            <LabelTextfieldToggle {edit} bind:value={person.email} label={$l.personal.email}/>
        </Cell>
    {/if}
    <Cell span={6}>
        <div class="radio-container">
            <FormField>
                <Radio bind:group={person.gender} value="m" touch disabled={!edit}/>
                <span slot="label">{$l.personal.gender.male}</span>
            </FormField>
            <FormField>
                <Radio bind:group={person.gender} value="f" touch disabled={!edit}/>
                <span slot="label">{$l.personal.gender.female}</span>
            </FormField>
            <FormField>
                <Radio bind:group={person.gender} value="x" touch disabled={!edit}/>
                <span slot="label">{$l.personal.gender.divers}</span>
            </FormField>
        </div>
    </Cell>
    <Cell span={6}>
        <LabelTextfieldToggle {edit} bind:value={person.birthday} label={$l.personal.birthday} type="date"/>
    </Cell>
    {#if !childMode}
    <Cell span={6}>
        <CountryComponent {edit} bind:country={person.nationality} label={$l.personal.nationality}/>
    </Cell>
    <Cell span={6}>
        <LabelTextfieldToggle {edit} bind:value={person.birthPlace} label={$l.personal.birthPlace}/>
    </Cell>
    <Cell span={6}>
        <LabelTextfieldToggle {edit} bind:value={person.occupation} label={$l.personal.occupation}/>
    </Cell>
    <Cell span={6}>
        <SocialInsuranceInstitutionComponent {edit} bind:socialInsuranceInstitution={person.socialInsuranceInstitution}/>
    </Cell>
    <Cell span={6}>
        <LabelTextfieldToggle {edit} bind:value={person.title} label={$l.personal.title}/>
    </Cell>
    <Cell span={6}>
        <LabelTextfieldToggle {edit} bind:value={person.academicDegree} label={$l.personal.degree}/>
    </Cell>
    {/if}
</LayoutGrid>

<style lang="scss">
    .radio-container {
        display: flex;
        justify-content: space-evenly;
    }
</style>