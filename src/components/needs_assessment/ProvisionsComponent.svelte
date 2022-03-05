<script lang="ts">
    import l from '../../localisation';
    import Button, { Label, Icon } from '@smui/button';
    import Textfield from '@smui/textfield';
    import OpenCloseToggle from "../OpenCloseToggle.svelte";
    import ProvisionComponent from "./ProvisionComponent.svelte";
    import { CarType } from '../client/CarType';
    import CarComponent from '../client/CarComponent.svelte';
    import { NeedsAssessmentType } from './NeedsAssessmentType';
    import StylizedCheckbox from '../StylizedCheckbox.svelte';

    export let assessment: NeedsAssessmentType;

    function addCar() {
        let items = assessment.cars;
        let item: CarType = {};
        items.push(item)
        assessment.cars = items;
    }

    function removeCar(item: CarType) {
        let items = assessment.cars;
        assessment.cars = items.filter(value => item !== value);
    }
    let care = false;
</script>

<ProvisionComponent bind:insurance={assessment.insurances.deathInsurance} label={$l.needsAssessment.provisions.death}/>
<ProvisionComponent bind:insurance={assessment.insurances.retirementInsurance} label={$l.needsAssessment.provisions.retirement}>
    <a slot="additional-content" class="retirement-link" href="https://www.pensionskontorechner.at/#/start" target="_blank" rel="noopener noreferrer">pensionskontorechner.at</a>
</ProvisionComponent>

<ProvisionComponent bind:insurance={assessment.insurances.illnessInsurance} label={$l.needsAssessment.provisions.illness}/>
<StylizedCheckbox bind:value={care} label={$l.needsAssessment.provisions.care}>
    <Textfield input$emptyValueUndefined={true} input$emptyValueNull={true} bind:value={assessment.insurances.careRemarks} label={$l.remarks} style="width:100%"/>
</StylizedCheckbox>
<OpenCloseToggle label={$l.personal.car.label}>
    {#each assessment.cars as car}
        <div class="car-container">
        <CarComponent bind:car={car} />
        <Button on:click={() => removeCar(car)}>
            <Icon class="material-icons">close</Icon>
        </Button>
        </div>
    {/each}
    <Button on:click={() => addCar()}>
        <Icon class="material-icons">add</Icon>
        <Label>{$l.personal.car.addCar}</Label>
    </Button>
</OpenCloseToggle>

<style lang="scss">
    .car-container {
        display: grid;
        grid-template-columns: 1fr auto;
    }
    .retirement-link {
        display: block;
        padding-bottom: 30px;
    }
</style>