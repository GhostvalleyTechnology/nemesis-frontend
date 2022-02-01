<script lang="ts">
  import { navigate } from "svelte-routing";
  import Icon from "@smui/textfield/icon";
  import DataTable, { Head, Body, Row, Cell, Label } from "@smui/data-table";
  import { EmployeeService, Employee } from "../gen";
  import Searchbar from "../components/Searchbar.svelte";
  import FloatingActionButton from "../components/FloatingActionButton.svelte";
  var items: Employee[] = [];
  EmployeeService.list().then((data) => (items = data));

  $: filterValue = "";
  $: filtered = items.filter(
    (s) => s.name.includes(filterValue) || s.email.includes(filterValue)
  );
</script>

<Searchbar bind:value={filterValue} />
<FloatingActionButton on:click={() => navigate("employee/new")} />

<DataTable table$aria-label="User list" style="width: 100%;">
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
      <Row on:click={() => navigate("employee/" + item.id)}>
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
