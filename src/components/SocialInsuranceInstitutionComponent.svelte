<script lang="ts">
    import Select, { Option } from '@smui/select';
    import { SocialInsuranceInstitutionData, getSocialInsuranceInstitutionData } from '../socialinsuranceinstitution'

    export let socialInsuranceInstitution: string;
    export let style: string = "";

    let options: SocialInsuranceInstitutionData[] = getSocialInsuranceInstitutionData();

</script>
<Select bind:value={socialInsuranceInstitution} label="Social Insurance Institution" {style}>
    <Option value=""></Option>
    {#each options as option}
    <Option value={option.code}>{option.code} - {option.name}</Option>
    {/each}
</Select>