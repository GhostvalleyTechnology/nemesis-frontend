<script lang="ts">
  import l from '../localisation'
  import Autocomplete from "@smui-extra/autocomplete";
  import { PartnerServiceTypeDto, PartnerServiceTypeService } from "../gen";
  import LabelTextfieldToggle from './LabelTextfieldToggle.svelte';
  export let service: PartnerServiceTypeDto;
  export let style = 'width: 100%';
  export let edit: boolean;
  let items: PartnerServiceTypeDto[] = [];
  PartnerServiceTypeService.list().then(response => items = response);
  let value = '';
  if(service) {
    value = service.service;
  }
  let options: string[] = [];
  $: if(items) {
    options = items.map(item => item.service);
  }
  $: if(value) {
    service = items.find(item => value == item.service);
  }
</script>

{#if edit}
  <Autocomplete bind:value bind:options {style} label={$l.contract.serviceType} textfield$style={style}/>
{:else}
  <LabelTextfieldToggle {style} label={$l.contract.serviceType} bind:value />
{/if}