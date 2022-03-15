<script lang="ts">
  import { navigate } from "svelte-routing";
  import Searchbar from "../components/Searchbar.svelte";
  import FloatingActionButton from "../components/FloatingActionButton.svelte";
  import DataTable, {
    Head,
    Body,
    Row,
    Cell,
    Label,
    SortValue,
  } from "@smui/data-table";
  import IconButton from "@smui/icon-button";
  import { ClientDto, ClientService } from "../gen";
  import { admin } from "../stores";

  let sort: keyof ClientDto = "id";
  let sortDirection: Lowercase<keyof typeof SortValue> = "ascending";
  let items: ClientDto[] = [];

  let adminMode = false;
  admin.subscribe(value => adminMode = value);
  
  $: if(adminMode) {
    ClientService.listAll().then((clients) => (items = clients));
  } else {
    ClientService.list().then((clients) => (items = clients));
  }

  $: filterValue = "";
  $: filtered = items.filter(
    (s) =>
      s.firstName.includes(filterValue) ||
      s.lastName.includes(filterValue) ||
      s.email.includes(filterValue) ||
      s.zipCode.includes(filterValue) ||
      s.city.includes(filterValue)
  );

  function handleSort() {
    items.sort((a, b) => {
      const [aVal, bVal] = [a[sort], b[sort]][
        sortDirection === "ascending" ? "slice" : "reverse"
      ]();
      if (typeof aVal === "string" && typeof bVal === "string") {
        return aVal.localeCompare(bVal);
      }
      return Number(aVal) - Number(bVal);
    });
    items = items;
  }
</script>

<Searchbar bind:value={filterValue} />
<FloatingActionButton on:click={() => navigate("client/new")} />

<DataTable
  sortable
  bind:sort
  bind:sortDirection
  on:MDCDataTable:sorted={handleSort}
  table$aria-label="Client list"
  style="width: 100%;"
>
  <Head>
    <Row>
      <Cell numeric columnId="clientNumber">
        <IconButton class="material-icons">arrow_upward</IconButton>
        <Label>ID</Label>
      </Cell>
      {#if adminMode}
      <Cell columnId="supervisor">
        <Label>Mitarbeiter</Label>
        <IconButton class="material-icons">arrow_upward</IconButton>
      </Cell>
      {/if}
      <Cell columnId="firstName" style="width: 100%;">
        <Label>Name</Label>
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
      <Row on:click={() => navigate("client/" + item.id)} class="{item.deleted ? 'unimportant-row': ''}">
        <Cell numeric>{item.clientNumber}</Cell>
        {#if adminMode}
        <Cell>{item.supervisor}</Cell>
        {/if}
        <Cell>{item.firstName} {item.lastName}</Cell>
        <Cell>{item.email}</Cell>
        <Cell>{item.zipCode}</Cell>
        <Cell>{item.city}</Cell>
      </Row>
    {/each}
  </Body>
</DataTable>
