<script lang="ts">
    import l from '../../localisation';
    import LayoutGrid, { Cell } from '@smui/layout-grid';
    import Textfield from '@smui/textfield';
    import Radio from '@smui/radio';
    import FormField from '@smui/form-field';
    import { GenericPerson } from '../../gen';
    import CountryComponent from '../CountryComponent.svelte';
    import SocialInsuranceInstitutionComponent from '../SocialInsuranceInstitutionComponent.svelte';

    export let person: GenericPerson;
</script>

<LayoutGrid style="padding-bottom: 3rem;">
    <Cell span={6}>
        <Textfield input$emptyValueUndefined={true} input$emptyValueNull={true} style="width: 100%;" bind:value={person.firstName} label={$l.personal.firstName}/>
    </Cell>
    <Cell span={6}>
        <Textfield input$emptyValueUndefined={true} input$emptyValueNull={true} style="width: 100%;" bind:value={person.lastName} label={$l.personal.lastName}/>
    </Cell>
    <Cell span={12}>
        <Textfield input$emptyValueUndefined={true} input$emptyValueNull={true} style="width: 100%;" bind:value={person.email} label={$l.personal.email}/>
    </Cell>
    <Cell span={6}>
        <div class="radio-container">
            <FormField>
                <Radio bind:group={person.gender} value="m" touch />
                <span slot="label">{$l.personal.gender.male}</span>
            </FormField>
            <FormField>
                <Radio bind:group={person.gender} value="f" touch />
                <span slot="label">{$l.personal.gender.female}</span>
            </FormField>
            <FormField>
                <Radio bind:group={person.gender} value="x" touch />
                <span slot="label">{$l.personal.gender.divers}</span>
            </FormField>
        </div>
    </Cell>
    <Cell span={6}>
        <Textfield input$emptyValueUndefined={true} input$emptyValueNull={true} style="width: 100%;" bind:value={person.birthday} label={$l.personal.birthday} type="date"/>
    </Cell>
    <Cell span={6}>
        <CountryComponent style="width: 100%;" country={person.nationality} label={$l.personal.nationality}/>
    </Cell>
    <Cell span={6}>
        <Textfield input$emptyValueUndefined={true} input$emptyValueNull={true} style="width: 100%;" bind:value={person.birthPlace} label={$l.personal.birthPlace}/>
    </Cell>
    <Cell span={6}>
        <Textfield input$emptyValueUndefined={true} input$emptyValueNull={true} style="width: 100%;" bind:value={person.occupation} label={$l.personal.occupation}/>
    </Cell>
    <Cell span={6}>
        <SocialInsuranceInstitutionComponent style="width: 100%;" socialInsuranceInstitution={person.socialInsuranceInstitution}/>
    </Cell>
    <Cell span={6}>
        <Textfield input$emptyValueUndefined={true} input$emptyValueNull={true} style="width: 100%;" bind:value={person.title} label={$l.personal.title}/>
    </Cell>
    <Cell span={6}>
        <Textfield input$emptyValueUndefined={true} input$emptyValueNull={true} style="width: 100%;" bind:value={person.academicDegree} label={$l.personal.degree}/>
    </Cell>
</LayoutGrid>

<style lang="scss">
    .radio-container {
        display: flex;
        justify-content: space-evenly;
    }
</style>