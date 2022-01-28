<script lang="ts">
    import { Client } from '../gen';
    import PieChart from '../components/PieChart.svelte';
    import Button, { Label, Icon } from '@smui/button';
    import PersonalComponent from '../components/client/PersonalComponent.svelte';
    import StylizedCheckbox from '../components/StylizedCheckbox.svelte';

    let accidentInsurance = false;
    let disabilityInsurance = false;
    let homeInsurance = false;
    let legalProtectionInsurance = false;

    let percent = 0;
    $: percent = (accidentInsurance ? 30 : 0) + (disabilityInsurance ? 30 : 0) + (homeInsurance ? 30 : 0) + (legalProtectionInsurance ? 10 : 0);
    let client: Client = {}

    function calcPieChart() {
        alert("pie!");
    }

</script>
<div class="form-container">
<h1>Needs Assessment</h1>
<h2>Personal</h2>
<PersonalComponent {client}/>
<h2>Insurance</h2>
<StylizedCheckbox bind:value={accidentInsurance} label="Accident Insurance"/>
<StylizedCheckbox bind:value={disabilityInsurance} label="Disability Insurance"/>
<StylizedCheckbox bind:value={homeInsurance} label="Home Insurance"/>
<StylizedCheckbox bind:value={legalProtectionInsurance} label="Legal Protection Insurance"/>
<PieChart size={200} {percent} />
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
    .form-container {
        max-width: 1000px;
        margin: auto;
    }
</style>