<script lang="ts">
    import l from '../localisation';
    import Autocomplete from '@smui-extra/autocomplete';
    import Textfield from '@smui/textfield';
    import { Partner, PartnerService } from '../gen'

    export let partner: Partner;
    export let style = '';
    var options: Partner[] = []
    PartnerService.list().then(result => {
        options = result;
        options.unshift({name: ''});
    })

    let value: Partner = options.find(item => item == partner)
    let textValue = '';
    $: if(value) {
        partner = value;
        textValue = value.name;
    }
</script>
<Autocomplete
    {options} {style}
    getOptionLabel={(option) => option ? `${option.name}` : ''}
    bind:value
    bind:text={textValue}
>
    <Textfield input$emptyValueUndefined={true} input$emptyValueNull={true} label={$l.payment.contractor} bind:value={textValue} {style}/>
</Autocomplete>
