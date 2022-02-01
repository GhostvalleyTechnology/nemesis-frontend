<script lang="ts">
    import l from '../../localisation';
    import Textfield from '@smui/textfield';
    import LayoutGrid, { Cell } from '@smui/layout-grid';
    import { CarType } from './CarType';

    export let car: CarType;
</script>

<LayoutGrid style="width: 100%">
    <Cell span={6}>
        <Textfield bind:value={car.name} label={$l.personal.car.name} input$emptyValueUndefined={true} input$emptyValueNull={true} style="width: 100%;"/>
    </Cell>
    <Cell span={6}>
        <Textfield bind:value={car.contractor} label={$l.personal.car.contractor} input$emptyValueUndefined={true} input$emptyValueNull={true} style="width: 100%;"/>
    </Cell>
    <Cell span={6}>
        <Textfield bind:value={car.contractNumber} label={$l.personal.car.contractNumber} input$emptyValueUndefined={true} input$emptyValueNull={true} style="width: 100%;"/>
    </Cell>
    <Cell span={6}>
        <Textfield bind:value={car.bonusLevel} label={$l.personal.car.bonusLevel} input$emptyValueUndefined={true} input$emptyValueNull={true} style="width: 100%;"/>
    </Cell>
    <Cell span={6}>
        <Textfield bind:value={car.mainDue} label={$l.personal.car.mainDue} input$emptyValueUndefined={true} input$emptyValueNull={true} style="width: 100%;"/>
    </Cell>
    <Cell span={6}>
        <Textfield bind:value={car.make} label={$l.personal.car.make} input$emptyValueUndefined={true} input$emptyValueNull={true} style="width: 100%;"/>
    </Cell>
    <Cell span={6}>
        <Textfield bind:value={car.power} label={$l.personal.car.power} input$emptyValueUndefined={true} input$emptyValueNull={true} style="width: 100%;"/>
    </Cell>
    <Cell span={6}>
        <Textfield bind:value={car.driveType} label={$l.personal.car.driveType} input$emptyValueUndefined={true} input$emptyValueNull={true} style="width: 100%;"/>
    </Cell>
    <Cell span={6}>
        <Textfield bind:value={car.licensePlate} label={$l.personal.car.licensePlate} input$emptyValueUndefined={true} input$emptyValueNull={true} style="width: 100%;"/>
    </Cell>
    <Cell span={6}>
        <Textfield bind:value={car.constructionYear} label={$l.personal.car.constructionYear} input$emptyValueUndefined={true} input$emptyValueNull={true} style="width: 100%;"/>
    </Cell>
    <Cell span={6}>
        <Textfield bind:value={car.insuranceType} label={$l.personal.car.insuranceType} input$emptyValueUndefined={true} input$emptyValueNull={true} style="width: 100%;"/>
    </Cell>
    <Cell span={6}>
        <Textfield bind:value={car.originalPrice} label={$l.personal.car.originalPrice} input$emptyValueUndefined={true} input$emptyValueNull={true} style="width: 100%;"/>
    </Cell>
    <Cell span={6}>
        <Textfield bind:value={car.deductible} label={$l.personal.car.deductible} input$emptyValueUndefined={true} input$emptyValueNull={true} style="width: 100%;"/>
    </Cell>
    <Cell span={6}>
        <Textfield bind:value={car.bonus} label={$l.personal.car.bonus} input$emptyValueUndefined={true} input$emptyValueNull={true} style="width: 100%;"/>
    </Cell>
    <Cell span={6}>
        <Textfield bind:value={car.paymentType} label={$l.personal.car.paymentType} input$emptyValueUndefined={true} input$emptyValueNull={true} style="width: 100%;"/>
    </Cell>

</LayoutGrid>

<style lang="scss">
    
</style>