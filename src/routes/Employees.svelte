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
    } from '@smui/data-table';
    import { EmployeeService, Employee } from "../gen"
    var items: Employee[] = [];
    EmployeeService.list().then(data => items = data)

    $: filterValue = "";
    $: filtered = items.filter((s) => s.name.includes(filterValue) || s.email.includes(filterValue));
  
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
  <Fab color="primary" on:click={() => navigate("employee/0")}>
    <Icon class="material-icons">add</Icon>
  </Fab>
  </div>
  
  <DataTable
    table$aria-label="User list"
    style="width: 100%;"
  >
    <Head>
      <Row>
        <Cell numeric columnId="id">
          <Label>ID</Label>
        </Cell>
        <Cell columnId="fullName" style="width: 100%;">
          <Label>Name</Label>
        </Cell>
        <Cell columnId="email">
          <Label>Email</Label>
        </Cell>
        <Cell columnId="zipCode">
          <Label>Admin</Label>
        </Cell>
      </Row>
    </Head>
    <Body>
      {#each filtered as item (item.id)}
        <Row on:click={() => navigate("employee/"+item.id)}>
          <Cell numeric>{item.id}</Cell>
          <Cell>{item.name}</Cell>
          <Cell>{item.email}</Cell>
          <Cell>
            <Icon class="material-icons">
              {#if item.admin}
              task_alt
              {:else}
              radio_button_unchecked
              {/if}
            </Icon>
          </Cell>
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
      color: var(--mdc-theme-on-surface, #fff);
    }
    * :global(.solo-input::placeholder) {
      color: var(--mdc-theme-on-surface, #fff);
      opacity: 0.6;
    }
    * :global(.solo-fab) {
      flex-shrink: 0;
    }
  </style>
