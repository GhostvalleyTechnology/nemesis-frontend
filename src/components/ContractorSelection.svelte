<script lang="ts">
    import l from '../localisation';
    import Autocomplete from '@smui-extra/autocomplete';
    import { Text } from '@smui/list';
    import { PartnerDto, PartnerReferenceDto, PartnerService } from '../gen'
    import LabelTextfieldToggle from './LabelTextfieldToggle.svelte';

    export let partner: PartnerDto | PartnerReferenceDto = {};
    export let style = 'width: 100%';
    export let value: string = '';
    export let edit: boolean;
    export let allowUnfound = false;
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
        } else if(allowUnfound) {
            partner = {
                name: value
            }
        }
    }
    let text: string;
</script>
{#if edit}
  {#if allowUnfound}
    <Autocomplete bind:value bind:text bind:options {style} label={$l.payment.contractor} textfield$style={style}
    noMatchesActionDisabled={false}
    on:SMUIAutocomplete:noMatchesAction={() => {value = text}}>
    <div slot="no-matches">
        <Text>{text}</Text>
    </div>
    </Autocomplete>
  {:else}
    <Autocomplete bind:value bind:options {style} label={$l.payment.contractor} textfield$style={style} />
  {/if}
  
{:else}
  <LabelTextfieldToggle {style} label={$l.payment.contractor} bind:value />
{/if}

