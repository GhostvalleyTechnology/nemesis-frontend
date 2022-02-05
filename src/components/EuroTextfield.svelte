<script lang="ts">
    import l from "../localisation";
    import LabelTextfieldToggle from "./LabelTextfieldToggle.svelte";
    export let label = $l.payment.euroTextfieldLabel;
    export let style = "width:100%";
    export let edit: boolean;
    export let integer: number;
    let value = "";
    if(integer) {
        let temp = integer.toString()
        temp = temp.substring(0, temp.length-2) + ',' + temp.substring(temp.length-2, temp.length)
        value = temp;
    }

    $: if (value) {
        integer = parse(value);
    }

    // I'm sorry, I just can't any better... I hate it
    function parse(value: string): number {
        let temp = value.replace(",", ".");
        if (temp.indexOf(".") > -1) {
            let parts = temp.split(".");
            let tempInt = parts[0];
            if (parts[1].length > 2) {
                tempInt += parts[1].substring(0, 2);
            } else if (parts[1].length < 2) {
                tempInt = tempInt + parts[1] + "0";
            } else {
                tempInt += parts[1];
            }
            return +tempInt;
        } else {
            return +(temp + "00");
        }
    }
</script>

<pre>{value} / {integer}</pre>
<LabelTextfieldToggle
    prefix="€"
    bind:value
    {label}
    {style}
    {edit}
    checkPattern={"^[0-9]*([,.][0-9]{1,2})?$"}
/>
