<script lang="ts">
    import Autocomplete from '@smui-extra/autocomplete';
    import Textfield from '@smui/textfield';
    import { CountryData, getCountryData } from '../country'
    import { Country } from '../gen';

    export let country: Country;
    export let label = "Country";
    export let style = "";

    let options: CountryData[] = getCountryData();
    let value: CountryData = options.find(item => country == Country[item.code])
    let textValue = "";
    $: if(value && value.code as Country) {
        country = value.code as Country;
        textValue = value.name;
    }
    
</script>
<Autocomplete
    {options}
    getOptionLabel={(option) => option ? `${option.name}` : ''}
    bind:value
    bind:text={textValue}
>
    <Textfield {label} {style} bind:value={textValue} />
</Autocomplete>