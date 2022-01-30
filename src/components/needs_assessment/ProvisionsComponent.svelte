<script lang="ts">
    import l from '../../localisation';
    import Button, { Label, Icon } from '@smui/button';
    import { Client } from "../../gen";
    import OpenCloseToggle from "../OpenCloseToggle.svelte";
    import ProvisionComponent from "./ProvisionComponent.svelte";
    import WealthBuilding from "./WealthBuilding.svelte";
    import { WealthBuildingType } from "./WealthBuildingType";
    import { CarType } from '../client/CarType';
    import CarComponent from '../client/CarComponent.svelte';

    export let client: Client;
    let wealthBuilder: WealthBuildingType = {
        retirementProvision: { desired: false },
        saveBig: { desired: false },
        saveEducation: { desired: false },
        otherInvestmentGoal: { desired: false },
        alreadyInvested: { desired: false},
        paymentOnce: {},
        paymentMonthly: {},
        paymentYearly: {},
    };
    let cars: CarType[] = [];

    function addCar() {
        let items = cars;
        let item: CarType = {};
        items.push(item)
        cars = items;
    }

    function removeCar(item: CarType) {
        let items = cars;
        cars = items.filter(value => item !== value);
    }
</script>

<ProvisionComponent bind:client={client} label={$l.needsAssessment.provisions.death}/>
<ProvisionComponent bind:client={client} label={$l.needsAssessment.provisions.retirement}/>

<OpenCloseToggle label={$l.needsAssessment.provisions.wealthBuilding}>
    <WealthBuilding bind:wealthBuilder={wealthBuilder}/>
</OpenCloseToggle>
<ProvisionComponent bind:client={client} label={$l.needsAssessment.provisions.illness}/>
<OpenCloseToggle label={$l.personal.car.label}>
    {#each cars as car}
        <Button color="secondary" on:click={() => removeCar(car)}>
            <Icon class="material-icons">remove_circle_outline</Icon>
        </Button>
        <CarComponent bind:car={car} />
    {/each}
    <Button color="secondary" on:click={() => addCar()}>
        <Icon class="material-icons">add_circle_outline</Icon>
        <Label>{$l.personal.car.addCar}</Label>
    </Button>
</OpenCloseToggle>