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
    import { Client } from '../classes/Client'; 
  

    let sort: keyof Client = 'id';
    let sortDirection: Lowercase<keyof typeof SortValue> = 'ascending';
  
    let items = Client.list();
    $: filterValue = "";
    $: filtered = items.filter((s) => s.fullName.includes(filterValue) || s.email.includes(filterValue) || s.zipCode.includes(filterValue) || s.city.includes(filterValue));
  
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
  <Fab color="primary" on:click={() => navigate("client/new")}>
    <Icon class="material-icons">add</Icon>
  </Fab>
  </div>
  
  <DataTable
    sortable
    bind:sort
    bind:sortDirection
    on:MDCDataTable:sorted={handleSort}
    table$aria-label="User list"
    style="width: 100%;"
  >
    <Head>
      <Row>
        <!--
          Note: whatever you supply to "columnId" is
          appended with "-status-label" and used as an ID
          for the hidden label that describes the sort
          status to screen readers.
  
          You can localize those labels with the
          "sortAscendingAriaLabel" and
          "sortDescendingAriaLabel" props on the DataTable.
        -->
        <Cell numeric columnId="id">
          <!-- For numeric columns, icon comes first. -->
          <IconButton class="material-icons">arrow_upward</IconButton>
          <Label>ID</Label>
        </Cell>
        <Cell columnId="fullName" style="width: 100%;">
          <Label>Name</Label>
          <!-- For non-numeric columns, icon comes second. -->
          <IconButton class="material-icons">arrow_upward</IconButton>
        </Cell>
        <Cell columnId="email">
          <Label>Email</Label>
          <IconButton class="material-icons">arrow_upward</IconButton>
        </Cell>
        <Cell columnId="zipCode">
          <Label>Zip Code</Label>
          <IconButton class="material-icons">arrow_upward</IconButton>
        </Cell>
        <Cell columnId="city">
          <Label>City</Label>
          <IconButton class="material-icons">arrow_upward</IconButton>
        </Cell>
      </Row>
    </Head>
    <Body>
      {#each filtered as item (item.id)}
        <Row on:click={() => navigate("client/"+item.id)}>
          <Cell numeric>{item.id}</Cell>
          <Cell>{item.fullName}</Cell>
          <Cell>{item.email}</Cell>
          <Cell>{item.zipCode}</Cell>
          <Cell>{item.city}</Cell>
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
