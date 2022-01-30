<script lang="ts">
    import l from '../../localisation';
    import { slide } from 'svelte/transition';
    import FormField from '@smui/form-field';
    import Checkbox from '@smui/checkbox';
    import Textfield from '@smui/textfield';
    import { InvestmentGoal } from './WealthBuildingType';

    export let goal: InvestmentGoal;
    export let label = '';
    export let textfieldLabel = $l.remarks;
</script>

<FormField>
    <Checkbox bind:checked={goal.desired} touch />
    <span slot="label">{label}</span>
</FormField>
{#if goal.desired && goal.desired == true}
<div transition:slide|local class="remarks-container">
<Textfield input$emptyValueUndefined={true} input$emptyValueNull={true} style="width: 100%;" 
    bind:value={goal.remarks} label={textfieldLabel}/>
</div>
{/if}

<style lang="scss">
    .remarks-container {
        padding-bottom: 30px;
    }
</style>