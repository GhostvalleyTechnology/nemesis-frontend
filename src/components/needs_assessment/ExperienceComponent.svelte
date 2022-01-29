<script lang="ts">
    import { slide } from 'svelte/transition';
    import Radio from '@smui/radio';
    import FormField from '@smui/form-field';
    import Textfield from '@smui/textfield';
    import { ExperienceType } from './ExperienceType'

    export let experience: ExperienceType;
    let radioSelection: string;
    $: if(radioSelection) {
        experience.hasExperience = (radioSelection=="true");
    }
</script>
<div>
    <h3>{experience.name}</h3>
    <FormField>
        <Radio bind:group={radioSelection} value="true" touch />
        <span slot="label">Yes, I do have experience</span>
    </FormField>
    <FormField>
        <Radio bind:group={radioSelection} value="false" touch />
        <span slot="label">No experience, desired anyway</span>
    </FormField>
</div>
{#if experience.hasExperience == true}
<div transition:slide|local>
    <Textfield input$emptyValueUndefined={true} input$emptyValueNull={true} bind:value={experience.since} label="Since"/>
    <FormField>
        <Radio bind:group={experience.level} value="1" touch />
        <span slot="label">1</span>
    </FormField>
    <FormField>
        <Radio bind:group={experience.level} value="2" touch />
        <span slot="label">2</span>
    </FormField>
    <FormField>
        <Radio bind:group={experience.level} value="3" touch />
        <span slot="label">3</span>
    </FormField>
    <FormField>
        <Radio bind:group={experience.level} value="4" touch />
        <span slot="label">4</span>
    </FormField>
    <FormField>
        <Radio bind:group={experience.level} value="5" touch />
        <span slot="label">5</span>
    </FormField>
</div>
{/if}

<style lang="scss">
    @use '@material/typography/index' as typography;
    h3 {
        @include typography.typography('headline5');
    }
</style>