<script lang="ts">
  import { navigate } from "svelte-routing";
  import Paper from '@smui/paper';
  import { Input } from '@smui/textfield';
  import Icon from '@smui/textfield/icon';
  import Fab from '@smui/fab';
  import DataTable, {
    Head,
    Body,
    Row,
    Cell,
    Label,
    SortValue,
  } from '@smui/data-table';
  import IconButton from '@smui/icon-button';
  import type { Template } from '../classes/Template'; 
  import { getTemplates } from '../classes/Template';

  let sort: keyof Template = 'name';
  let sortDirection: Lowercase<keyof typeof SortValue> = 'ascending';

  let items = getTemplates();
  $: filterValue = "";
  $: filtered = items.filter((s) => s.name.includes(filterValue));

  function handleSort() {
    items.sort((a, b) => {
      const [aVal, bVal] = [a[sort], b[sort]][
        sortDirection === 'ascending' ? 'slice' : 'reverse'
      ]();
      if (typeof aVal === 'string' && typeof bVal === 'string') {
        return aVal.localeCompare(bVal);
      }
      return Number(aVal) - Number(bVal);
    });
    items = items;
  }

</script>

<div class="solo-container">
  <Paper class="solo-paper" elevation={6}>
    <Icon class="material-icons">search</Icon>
    <Input
    bind:value={filterValue}
      placeholder="Search"
      class="solo-input"
    />
  </Paper>
</div>
  <div class="float">
<Fab color="primary" on:click={() => navigate("template/new")}>
  <Icon class="material-icons">add</Icon>
</Fab>
</div>

<DataTable
  sortable
  bind:sort
  bind:sortDirection
  on:MDCDataTable:sorted={handleSort}
  table$aria-label="Template list"
  style="width: 100%;"
>
  <Head>
    <Row>
      <Cell columnId="name" style="width: 100%;">
        <Label>Name</Label>
        <IconButton class="material-icons">arrow_upward</IconButton>
      </Cell>
    </Row>
  </Head>
  <Body>
    {#each filtered as item (item.name)}
      <Row on:click={() => navigate(item.path)}>
        <Cell>{item.name}</Cell>
      </Row>
    {/each}
  </Body>
</DataTable>

<style>
  .float {
    position: fixed;
    bottom: 2rem;
    right: 3rem;
    z-index: 1;
  }
  .solo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
  }
  * :global(.solo-paper) {
    display: flex;
    align-items: center;
    flex-grow: 1;
    max-width: 600px;
    margin: 0 12px;
    padding: 0 12px;
    height: 48px;
  }
  * :global(.solo-paper > *) {
    display: inline-block;
    margin: 0 12px;
  }
  * :global(.solo-input) {
    flex-grow: 1;
    color: var(--mdc-theme-on-surface, #000);
  }
  * :global(.solo-input::placeholder) {
    color: var(--mdc-theme-on-surface, #000);
    opacity: 0.6;
  }
  * :global(.solo-fab) {
    flex-shrink: 0;
  }
</style>
