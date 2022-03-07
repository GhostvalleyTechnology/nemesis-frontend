<script lang="ts">
  import { navigate } from "svelte-routing";
  import FormContainer from "../FormContainer.svelte";
  import Searchbar from "../Searchbar.svelte";
  import Icon from "@smui/textfield/icon";
  import DataTable, {
    Head,
    Body,
    Row,
    Cell,
    Label,
    SortValue,
  } from "@smui/data-table";
  import IconButton from "@smui/icon-button";
  import {
    ClientDto,
    ClientContractService,
    ClientContractDto,
  } from "../../gen";
  import { open } from "../OpenFile";
  import l from "../../localisation";
  import { ContractRoute } from "./ContractRouteType";
  import { sortFunc } from "../../routes/sort";

  export let client: ClientDto;
  export let selectedContract: ContractRoute;
  $: filterValue = "";

  let sort: keyof ClientContractDto = "id";
  let sortDirection: Lowercase<keyof typeof SortValue> = "ascending";
  const sortFunction = () => filtered = filtered.sort(sortFunc(sort, sortDirection));

  $: filtered = client.contracts.filter(
    (s) =>
      (s.contractNumber && s.contractNumber.includes(filterValue)) ||
      (s.contractor && s.contractor.name.includes(filterValue)) ||
      (s.createdAt && s.createdAt.includes(filterValue)) ||
      (s.serviceType && s.serviceType.service.includes(filterValue))
  );

  function editContract(item: ClientContractDto) {
    selectedContract = {
      id: item.id,
      edit: true,
      add: false
    }
  }

  const openPolicy = (item: ClientContractDto) => {
    ClientContractService.getPolicy(item.id).then(response => window.open(response));
  }
  const openPolicyRequest = (item: ClientContractDto) => {
    ClientContractService.getPolicyRequest(item.id).then(response => window.open(response));
  }
</script>

<FormContainer>
  <Searchbar bind:value={filterValue} />

  <DataTable
    sortable
    bind:sort
    bind:sortDirection
    on:MDCDataTable:sorted={() => sortFunction()}
    table$aria-label="Contract list"
    style="width: 100%;"
  >
    <Head>
      <Row>
        <Cell columnId="contractNumber" style="width: 100%;">
          <Label>{$l.contract.contractNumber}</Label>
          <IconButton class="material-icons">arrow_upward</IconButton>
        </Cell>
        <Cell columnId="serviceType.service" style="width: 100%;">
          <Label>{$l.contract.serviceType}</Label>
          <IconButton class="material-icons">arrow_upward</IconButton>
        </Cell>
        <Cell columnId="contractor.name" style="width: 100%;">
          <Label>{$l.menu.partner}</Label>
          <IconButton class="material-icons">arrow_upward</IconButton>
        </Cell>
        <Cell columnId="contractDate" style="width: 100%;">
          <Label>{$l.createdAt}</Label>
          <IconButton class="material-icons">arrow_upward</IconButton>
        </Cell>
        <Cell columnId="policy.fileName">
          <Label>Polizze</Label>
          <IconButton class="material-icons">arrow_upward</IconButton>
        </Cell>
      </Row>
    </Head>
    <Body>
      {#each filtered as item (item.id)}
        <Row class="{item.legacy ? 'unimportant-row': item.policy ? '' : 'important-row'}">
          <Cell on:click={() => editContract(item)}>{#if item.contractNumber}{item.contractNumber}{:else}{$l.unknown}{/if}</Cell>
          <Cell on:click={() => editContract(item)}>{#if item.serviceType}{item.serviceType.service}{:else}{$l.unknown}{/if}</Cell>
          <Cell on:click={() => editContract(item)}>{#if item.contractor}{item.contractor.name}{:else}{$l.unknown}{/if}</Cell>
          <Cell on:click={() => editContract(item)}>{#if item.contractDate}{item.contractDate}{:else}{$l.unknown}{/if}</Cell>

          <Cell on:click={() => openPolicy(item)}>
            <Icon class="material-icons">
              {#if item.policy}
                description
              {:else}
                question_mark
              {/if}
            </Icon>
          </Cell>
        </Row>
      {/each}
    </Body>
  </DataTable>
</FormContainer>

<style>
  
</style>
