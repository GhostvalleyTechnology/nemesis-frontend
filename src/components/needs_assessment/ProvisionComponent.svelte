<script lang="ts">
    import { ClientContract } from "../../gen";
    import SelectLegacyContract from "../SelectLegacyContract.svelte";
    import StylizedCheckbox from "../StylizedCheckbox.svelte";
    import { InsuranceType } from './NeedsAssessmentType';

    export let insurance: InsuranceType & ClientContract;
    export let label = "";

</script>

<div class="container">
    <StylizedCheckbox bind:value={insurance.clientHas} {label}>
        <div class="content">
            <slot name="additional-content"/>
            <SelectLegacyContract bind:contract={insurance}/>
        </div>
    </StylizedCheckbox>
</div>

<style lang="scss">
    .container {
        width: 100%;
    }
    .content {
        padding: 50px 50px 100px 50px;
    }
</style>