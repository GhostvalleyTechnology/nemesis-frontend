<script lang="ts">
    import l from '../../localisation';
    import { slide } from 'svelte/transition';
    import FormField from '@smui/form-field';
    import Checkbox from '@smui/checkbox';
    import Textfield from '@smui/textfield';
    import { InvestmentGoal } from './WealthBuildingType';

    export let goal: InvestmentGoal;
    export let label = '';
</script>

<FormField>
    <Checkbox bind:checked={goal.desired} touch />
    <span slot="label">{label}</span>
</FormField>
{#if goal.desired}
<div transition:slide|local>
<Textfield input$emptyValueUndefined={true} input$emptyValueNull={true} style="width: 100%;" 
    bind:value={goal.remarks} label={$l.remarks}/>
</div>
{/if}