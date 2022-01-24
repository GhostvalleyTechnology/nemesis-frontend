<script lang="ts">
    import Autocomplete from '@smui-extra/autocomplete';
    import * as countryData from '../country.json'
    import { Country } from '../gen';

    export let selected: Country;

    type Item = {
        name: string; 
        code: string;
    }

    let options: Item[] = countryData;
    let value = options.find(item => item.code = selected)
    
</script>

<Autocomplete
    {options}
    getOptionLabel={(option) =>
      option ? `${option.name}` : ''}
    bind:value
    label="Country"
/>