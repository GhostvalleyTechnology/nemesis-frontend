<script lang="ts">
  import { navigate } from "svelte-routing";
  import DataTable, { Head, Body, Row, Cell, Label, SortValue } from "@smui/data-table";
  import IconButton from '@smui/icon-button';
  import { PartnerService, PartnerDto } from "../gen";
  import Searchbar from "../components/Searchbar.svelte";
  import FloatingActionButton from "../components/FloatingActionButton.svelte";
  import AdminGuard from "../components/AdminGuard.svelte";
  import { sortFunc } from "./sort";
  import FloatingSettingsButton from "../components/FloatingSettingsButton.svelte";

  var items: PartnerDto[] = [];
  PartnerService.list().then((data) => (items = data));

  let sort: keyof PartnerDto = 'name';
  let sortDirection: Lowercase<keyof typeof SortValue> = 'ascending';
  const sortFunction = () => filtered = filtered.sort(sortFunc(sort, sortDirection));

  $: filterValue = "";
  $: filtered = items.filter((s) => 
    (s.name == null || s.name == undefined || s.name.includes(filterValue)) || 
    (s.services && s.services.find(service => service.service.includes(filterValue)) )
  );
  
</script>

<Searchbar bind:value={filterValue} />
<AdminGuard>
  <FloatingActionButton on:click={() => navigate("partner/new")}/>
  <FloatingSettingsButton on:click={() => navigate("partner_service_types")}/>
</AdminGuard>

<DataTable
  sortable
  bind:sort
  bind:sortDirection
  on:MDCDataTable:sorted={() => sortFunction()}
  table$aria-label="Partner list"
  style="width: 100%;"
>
  <Head>
    <Row>
      <Cell columnId="name" style="width: 100%;">
        <Label>Name</Label>
        <IconButton class="material-icons">arrow_upward</IconButton>
      </Cell>
      <Cell columnId="services">
        <Label>Services</Label>
        <IconButton class="material-icons">arrow_upward</IconButton>
      </Cell>
    </Row>
  </Head>
  <Body>
    {#each filtered as item (item.name)}
      <Row on:click={() => navigate('partner/'+item.id)}>
        <Cell>{item.name}</Cell>
        <Cell>{item.services.map(s => s.service).join(', ')}</Cell>
      </Row>
    {/each}
  </Body>
</DataTable>