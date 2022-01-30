<script lang="ts">
    import l from '../localisation';
    import Textfield from '@smui/textfield';
    export let label = $l.euroTextfieldLabel;
    export let style = '';
    export let integer: number;
    let value = integer ? integer.toString() : "";

    $: if(value) {
        integer = +(value.replace(/\D/g, ''));
    }
</script>

<Textfield prefix="€" input$emptyValueUndefined={true} input$emptyValueNull={true} input$pattern={'^[0-9]*([,.][0-9]{1,2})?$'} bind:value={value} {label} {style}/>