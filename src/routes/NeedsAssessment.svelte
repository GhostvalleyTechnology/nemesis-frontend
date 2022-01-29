<script lang="ts">
    import { Client } from '../gen';
    import PersonalComponent from '../components/client/PersonalComponent.svelte';
    import BaseInsurancesComponent from '../components/needs_assessment/BaseInsurancesComponent.svelte';
    import ExperienceComponent from '../components/needs_assessment/ExperienceComponent.svelte';
    import { ExperienceType } from '../components/needs_assessment/ExperienceType';

    let client: Client = {}
    let experiences: ExperienceType[] = [
        {name:"Lebensversicherung"},
        {name:"Investmentfonds"},
        {name:"Anleihen"},
        {name:"Aktien"},
        {name:"Optionen/Futures/Hedgefonds"},
        {name:"Finanzierungen"},
        {name:"Garantiefonds"},
        {name:"Immobilien/Immobilienfonds/-aktien"},
        {name:"Zertifikate"}];
    

</script>
<div class="form-container">
    <h1>Needs Assessment</h1>
    <h2>Personal</h2>
    <PersonalComponent bind:client={client}/>
    <h2>Insurance</h2>
    <BaseInsurancesComponent bind:client={client} />
    <h2>Experiences</h2>
    {#each experiences as experience}
        <ExperienceComponent {experience}/>
    {/each}
    
</div>

<style lang="scss">
    @use '@material/typography/index' as typography;
    h1 {
        @include typography.typography('headline3');
        text-align: center;
    }
    h2 {
        @include typography.typography('headline4');
    }
</style>