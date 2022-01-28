<script lang="ts">
    import Autocomplete from '@smui-extra/autocomplete';
    import Textfield from '@smui/textfield';
    import { Partner, PartnerService } from '../gen'

    export let partner: Partner;
    var options: Partner[] = []
    PartnerService.list().then(result => {
        options = result;
        options.unshift({name: ""});
    })

    let value: Partner = options.find(item => item == partner)
    let textValue = "";
    $: if(value) {
        partner = value;
        textValue = value.name;
    }
</script>
<Autocomplete
    {options}
    getOptionLabel={(option) => option ? `${option.name}` : ''}
    bind:value
    bind:text={textValue}
>
    <Textfield label="Contractor" bind:value={textValue} />
</Autocomplete>
