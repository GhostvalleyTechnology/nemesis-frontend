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

  export let client: ClientDto;
  export let selectedContract: ContractRoute;
  $: filterValue = "";

  let sort: keyof ClientContractDto = "createdAt";
  let sortDirection: Lowercase<keyof typeof SortValue> = "ascending";

  $: filtered = client.contracts.filter(
    (s) =>
      s.contractNumber.includes(filterValue) ||
      s.contractor.name.includes(filterValue) ||
      s.createdAt.includes(filterValue) ||
      s.serviceType.service.includes(filterValue)
  );

  function handleSort() {
    client.contracts.sort((a, b) => {
      const [aVal, bVal] = [a[sort], b[sort]][
        sortDirection === "ascending" ? "slice" : "reverse"
      ]();
      if (typeof aVal === "string" && typeof bVal === "string") {
        return aVal.localeCompare(bVal);
      }
      return Number(aVal) - Number(bVal);
    });
    client.contracts = client.contracts;
  }

  function hasDocument(dto: ClientContractDto): boolean {
    return dto.fileId !== undefined && dto.fileId !== null && dto.fileId > 0;
  }

  function editContract(item: ClientContractDto) {
    selectedContract = {
      id: item.id,
      edit: true,
      add: false
    }
  }
  function openContract(item: ClientContractDto) {
    if(hasDocument(item)) {
      ClientContractService.get(item.id).then(response => open(response))
    }
  }
</script>

<FormContainer>
  <Searchbar bind:value={filterValue} />

  <DataTable
    sortable
    bind:sort
    bind:sortDirection
    on:MDCDataTable:sorted={handleSort}
    table$aria-label="Contract list"
    style="width: 100%;"
  >
    <Head>
      <Row>
        <Cell columnId="contractNumber" style="width: 100%;">
          <Label>{$l.contract.contractNumber}</Label>
          <IconButton class="material-icons">arrow_upward</IconButton>
        </Cell>
        <Cell columnId="signed" style="width: 100%;">
          <Label>{$l.contract.serviceType}</Label>
          <IconButton class="material-icons">arrow_upward</IconButton>
        </Cell>
        <Cell columnId="contractor" style="width: 100%;">
          <Label>{$l.menu.partner}</Label>
          <IconButton class="material-icons">arrow_upward</IconButton>
        </Cell>
        <Cell columnId="createdAt" style="width: 100%;">
          <Label>{$l.createdAt}</Label>
          <IconButton class="material-icons">arrow_upward</IconButton>
        </Cell>
        <Cell columnId="legacy" style="width: 100%;">
          <Label>{$l.contract.legacy}</Label>
          <IconButton class="material-icons">arrow_upward</IconButton>
        </Cell>
        <Cell columnId="document">
          <Label>{$l.file}</Label>
          <IconButton class="material-icons">arrow_upward</IconButton>
        </Cell>
      </Row>
    </Head>
    <Body>
      {#each filtered as item (item.id)}
        <Row>
          <Cell on:click={() => editContract(item)}>{item.contractNumber}</Cell>
          <Cell on:click={() => editContract(item)}>{item.serviceType.service}</Cell>
          <Cell on:click={() => editContract(item)}>{item.contractor.name}</Cell>
          <Cell on:click={() => editContract(item)}>{item.createdAt}</Cell>
          <Cell on:click={() => editContract(item)}>
            <Icon class="material-icons">
              {#if item.legacy}
                task_alt
              {:else}
                radio_button_unchecked
              {/if}
            </Icon>
          </Cell>

          <Cell on:click={() => openContract(item)}>
            <Icon class="material-icons">
              {#if hasDocument(item)}
                description
              {:else}
                priority_high
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
