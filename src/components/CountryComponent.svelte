<script lang="ts">
    import l from '../localisation';
    import Autocomplete from '@smui-extra/autocomplete';
    import { CountryData, getCountryData } from '../country'
    import { Country } from '../gen';

    export let country: Country;
    export let label = $l.personal.country;
    export let style = 'width: 100%;';
    export let edit: boolean;

    let countryData = getCountryData();
    let value = "";
    let maybeInit: CountryData;
    const init = () => {
        maybeInit = countryData.find(item => country == Country[item.code]);
        value = maybeInit ? maybeInit.name : '';
    }
    $: if(country) {
        init();
    }
    let options = countryData.map(item => item.name);
    $: if(value) {
        let maybeFound = countryData.find(item => value == item.name);
        if(maybeFound) {
            country = maybeFound.code as Country;
        }
    }
    
</script>
<Autocomplete bind:value={value} {options} {style} {label} textfield$style={style} disabled={!edit} textfield$input$class={edit ? '' : 'font-color'}/>