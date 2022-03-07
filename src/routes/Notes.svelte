<script lang="ts">
import { ReminderDto, ReminderService } from "../gen";
import { sortFunc } from "./sort";
import DataTable, {
    Head,
    Body,
    Row,
    Cell,
    Label,
    SortValue,
} from '@smui/data-table';
import IconButton from '@smui/icon-button';

let sort: keyof ReminderDto = 'name';
let sortDirection: Lowercase<keyof typeof SortValue> = 'ascending';
const sortFunction = () => filtered = filtered.sort(sortFunc(sort, sortDirection));

let list: ReminderDto[] = [];
ReminderService.list().then(response => list = response);

$: filtered = list;

</script>

<DataTable
  sortable
  bind:sort
  bind:sortDirection
  on:MDCDataTable:sorted={() => sortFunction()}
  table$aria-label="Template list"
  style="width: 100%;"
>
  <Head>
    <Row>
      <Cell columnId="name" style="width: 100%;">
        <Label>Name</Label>
        <IconButton class="material-icons">arrow_upward</IconButton>
      </Cell>
      <Cell columnId="type">
        <Label>Art</Label>
        <IconButton class="material-icons">arrow_upward</IconButton>
      </Cell>
      <Cell columnId="text">
        <Label>Text</Label>
        <IconButton class="material-icons">arrow_upward</IconButton>
      </Cell>
      <Cell columnId="due">
        <Label>Fällig bis</Label>
        <IconButton class="material-icons">arrow_upward</IconButton>
      </Cell>
    </Row>
  </Head>
  <Body>
    {#each filtered as item }
      <Row>
        <Cell>{item.name}</Cell>
        <Cell>{item.type}</Cell>
        <Cell>{item.text}</Cell>
        <Cell>{item.due}</Cell>
      </Row>
    {/each}
  </Body>
</DataTable>