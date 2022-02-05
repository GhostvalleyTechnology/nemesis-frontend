<script lang="ts">
    import l from '../localisation';
    import Autocomplete from '@smui-extra/autocomplete';
    import { PartnerDto, PartnerReferenceDto, PartnerService } from '../gen'
    import LabelTextfieldToggle from './LabelTextfieldToggle.svelte';

    export let partner: PartnerDto | PartnerReferenceDto = {};
    export let style = 'width: 100%';
    export let value: string = '';
    export let edit: boolean;
    let partnerList: PartnerReferenceDto[] = []
    let options: string[];

    PartnerService.list().then(result => {
        partnerList = result;
        partnerList.unshift({name: ''});
        options = partnerList.map(item => item.name);
        if(partner && partner.id) {
            value = partnerList.find(item => item.id == partner.id).name;
        }
    });

    $: if(value) {
        let maybeFound = partnerList.find(item => value == item.name);
        if(maybeFound) {
            partner = maybeFound;
        }
    }
</script>
{#if edit}
  <Autocomplete bind:value bind:options {style} label={$l.payment.contractor} textfield$style={style}/>
{:else}
  <LabelTextfieldToggle {style} label={$l.payment.contractor} bind:value />
{/if}

