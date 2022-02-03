<script lang="ts">
  import Chip, { Set, TrailingAction, Text } from '@smui/chips';
  import Select, { Option } from '@smui/select';
  import Button, { Label } from "@smui/button";
  import { PartnerServiceTypeDto, PartnerServiceTypeService } from "../../gen";
  import H2 from "../H2.svelte";
  export let dtos: PartnerServiceTypeDto[];
  export let edit = false;
  let newService = "";
  let serviceTypeDtos: PartnerServiceTypeDto[] = [];
  $: if(edit && serviceTypeDtos.length == 0) {
    PartnerServiceTypeService.list().then(response => serviceTypeDtos = response);
  }

  function add() {
    let dto = serviceTypeDtos.find(item => item.service == newService)
    let temp = dtos;
    temp.push(dto);
    dtos = temp;
  }
  
  function contained(item :PartnerServiceTypeDto): boolean {
    return dtos.find(dto => dto.service == item.service) !== undefined
  }
</script>

<H2>Services</H2>
<Set bind:chips={dtos} let:chip input>
  <Chip {chip}>
    <Text>{chip.service}</Text>
    {#if edit}
    <TrailingAction icon$class="material-icons">close</TrailingAction>
    {/if}
  </Chip>
</Set>
{#if edit}
  <Select bind:value={newService} label="Service auswählen">
  {#each serviceTypeDtos as item}
    {#if !contained(item)}
    <Option value={item.service}>{item.service}</Option>
    {/if}
  {/each}
  </Select>
  <Button on:click={add}><Label>Hinzufügen</Label></Button>
{/if}