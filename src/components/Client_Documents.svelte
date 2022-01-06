<script lang="ts">
    import { navigate } from "svelte-routing";
    import Paper from '@smui/paper';
    import { Input } from '@smui/textfield';
    import Icon from '@smui/textfield/icon';
    import DataTable, {
      Head,
      Body,
      Row,
      Cell,
      Label,
      SortValue,
    } from '@smui/data-table';
    import IconButton from '@smui/icon-button';
  
    import type { Client } from '../classes/Client';
    import { Document } from '../classes/Document';
    export let client: Client;
    $: filterValue = "";
    let documents = Document.fromClient(client.id);

    let sort: keyof Document = 'name';
    let sortDirection: Lowercase<keyof typeof SortValue> = 'ascending';
  
    $: filtered = documents.filter((s) => 
      s.name.includes(filterValue) || 
      s.type.includes(filterValue) || 
      s.date.includes(filterValue) ||
      s.contractor.includes(filterValue));
  
    function handleSort() {
      documents.sort((a, b) => {
        const [aVal, bVal] = [a[sort], b[sort]][
          sortDirection === 'ascending' ? 'slice' : 'reverse'
        ]();
        if (typeof aVal === 'string' && typeof bVal === 'string') {
          return aVal.localeCompare(bVal);
        }
        return Number(aVal) - Number(bVal);
      });
      documents = documents;
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
        <Cell columnId="name" style="width: 100%;">
          <Label>Name</Label>
          <!-- For non-numeric columns, icon comes second. -->
          <IconButton class="material-icons">arrow_upward</IconButton>
        </Cell>
        <Cell columnId="contractor" style="width: 100%;">
          <Label>Contractor</Label>
          <IconButton class="material-icons">arrow_upward</IconButton>
        </Cell>
        <Cell columnId="type" style="width: 100%;">
          <Label>Type</Label>
          <IconButton class="material-icons">arrow_upward</IconButton>
        </Cell>
        <Cell columnId="signed" style="width: 100%;">
          <Label>Signed</Label>
          <IconButton class="material-icons">arrow_upward</IconButton>
        </Cell>
        <Cell columnId="date">
          <Label>Date</Label>
          <IconButton class="material-icons">arrow_upward</IconButton>
        </Cell>
      </Row>
    </Head>
    <Body>
      {#each filtered as item (item.id)}
        <Row on:click={() => navigate("document/"+item.id)}>
          <Cell>{item.name}</Cell>
          <Cell>{item.contractor}</Cell>
          <Cell>{item.type}</Cell>
          <Cell><Icon class="material-icons">
            {#if item.signed}
            task_alt
            {:else}
            radio_button_unchecked
            {/if}
          </Icon></Cell>
          
          <Cell>{item.date}</Cell>
        </Row>
      {/each}
    </Body>
  </DataTable>
  
  <style>
    .float {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
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
