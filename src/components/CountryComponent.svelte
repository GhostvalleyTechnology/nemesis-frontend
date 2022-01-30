<script lang="ts">
    import l from '../localisation';
    import Autocomplete from '@smui-extra/autocomplete';
    import { getCountryData } from '../country'
    import { Country } from '../gen';

    export let country: Country;
    export let label = $l.personal.country;
    export let style = '';

    let countryData = getCountryData();
    let maybeInit = countryData.find(item => country == Country[item.code]);

    let options = countryData.map(item => item.name);
    let value = maybeInit ? maybeInit.name : '';
    $: if(value) {
        let maybeFound = countryData.find(item => value == item.name);
        if(maybeFound) {
            country = maybeFound.code as Country;
        }
    }
    
</script>
<Autocomplete bind:value={value} {options} {style} {label} textfield$style={style}/>