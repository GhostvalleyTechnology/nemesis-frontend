<script lang="ts">
    import Autocomplete from '@smui-extra/autocomplete';
    import Textfield from '@smui/textfield';
    import { SocialInsuranceInstitutionData, getSocialInsuranceInstitutionData } from '../socialinsuranceinstitution'

    export let socialInsuranceInstitution: string;

    let options: SocialInsuranceInstitutionData[] = getSocialInsuranceInstitutionData();
    let value: SocialInsuranceInstitutionData;
    let textValue: string = "";
    if(socialInsuranceInstitution) {
        value = options.find(item => socialInsuranceInstitution == item.code)
        textValue = getOptionLabel(value);
    }
    $: if(value) {
        socialInsuranceInstitution = value.code;
    }
    
    function getOptionLabel(selected: SocialInsuranceInstitutionData): string {
        return `${selected.code} - ${selected.name}`;
    }
</script>
<Autocomplete
    {options}
    getOptionLabel={(option) => option ? getOptionLabel(option) : ''}
    bind:value
    bind:text={textValue}
>
    <Textfield label="Social Insurance Institution" bind:value={textValue} />
</Autocomplete>
<pre>${socialInsuranceInstitution}</pre>