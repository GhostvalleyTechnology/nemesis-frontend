<script lang="ts">
    import l from '../localisation';
    import Select, { Option } from '@smui/select';
    import { SocialInsuranceInstitutionData, getSocialInsuranceInstitutionData } from '../socialinsuranceinstitution'

    export let socialInsuranceInstitution: string;
    export let style: string = "";

    let options: SocialInsuranceInstitutionData[] = getSocialInsuranceInstitutionData();

</script>
<Select bind:value={socialInsuranceInstitution} label={$l.personal.socialInsuranceInstitution} {style}>
    <Option value=""></Option>
    {#each options as option}
    <Option value={option.code}>{option.code} - {option.name}</Option>
    {/each}
</Select>