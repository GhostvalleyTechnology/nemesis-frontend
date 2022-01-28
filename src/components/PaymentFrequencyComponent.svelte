<script lang="ts">
    import Select, { Option } from '@smui/select';
    import { PaymentFrequency } from '../gen'

    export let paymentFrequency: PaymentFrequency;
    export let style = "";
</script>
<Select bind:value={paymentFrequency} {style} label="Payment Frequency">
    <Option value=""></Option>
    <Option value={PaymentFrequency.MONTHLY}>monthly</Option>
    <Option value={PaymentFrequency.QUARTERLY}>quarterly</Option>
    <Option value={PaymentFrequency.YEARLY}>yearly</Option>
</Select>