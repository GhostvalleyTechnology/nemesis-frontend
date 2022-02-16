<script lang="ts">
  import { navigate } from "svelte-routing";
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
  import { TemplateFacade, list as listTemplates, TemplateType, openFile } from '../components/template/TemplateFacade';
  import AdminGuard from '../components/AdminGuard.svelte';
  import Searchbar from "../components/Searchbar.svelte";
  import FloatingActionButton from "../components/FloatingActionButton.svelte";
import { sortFunction } from "./sort";
import { TemplateService } from "../gen";

  let sort: keyof TemplateFacade = 'name';
  let sortDirection: Lowercase<keyof typeof SortValue> = 'ascending';

  let items: TemplateFacade[] = [];
  listTemplates().then(result => {items = result; sortFunction(items, sort, sortDirection)});
  $: filterValue = "";
  $: filtered = items.filter((s) => s.name.includes(filterValue));

  function openTemplate(item: TemplateFacade) {
    if(item.type == TemplateType.page) {
      navigate(item.path)
    } else {
      TemplateService.get(item.id)
        .then(response => window.open(response));
    }
  }
</script>

<Searchbar bind:value={filterValue} />
<AdminGuard>
  <FloatingActionButton on:click={() => navigate("template/new")}/>
</AdminGuard>

<DataTable
  sortable
  bind:sort
  bind:sortDirection
  on:MDCDataTable:sorted={() => sortFunction(items, sort, sortDirection)}
  table$aria-label="Template list"
  style="width: 100%;"
>
  <Head>
    <Row>
      <Cell columnId="name" style="width: 100%;">
        <Label>Name</Label>
        <IconButton class="material-icons">arrow_upward</IconButton>
      </Cell>
      <AdminGuard>
        <Cell columnId="adminOnly">
          <Label>Visible for Employees</Label>
          <IconButton class="material-icons">arrow_upward</IconButton>
        </Cell>
      </AdminGuard>
    </Row>
  </Head>
  <Body>
    {#each filtered as item (item.name)}
      <Row>
        <Cell on:click={() => openTemplate(item)}>{item.name}</Cell>
        <AdminGuard>
          <Cell>
            <Icon class="material-icons">
              {#if item.adminOnly}
              radio_button_unchecked
              {:else}
              task_alt
              {/if}
            </Icon>
          </Cell>
        </AdminGuard>
      </Row>
    {/each}
  </Body>
</DataTable>