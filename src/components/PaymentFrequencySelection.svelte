<script lang="ts">
    import l from '../localisation';
    import Select, { Option } from '@smui/select';
    import { PaymentFrequency } from '../gen'
    export let paymentFrequency: PaymentFrequency;
    export let style = "width: 100%";
</script>
<Select bind:value={paymentFrequency} {style} label={$l.payment.paymentFrequency}>
    <Option value=""></Option>
    <Option value={PaymentFrequency.MONTHLY}>{$l.payment.monthly}</Option>
    <Option value={PaymentFrequency.QUARTERLY}>{$l.payment.quarterly}</Option>
    <Option value={PaymentFrequency.YEARLY}>{$l.payment.yearly}</Option>
</Select>