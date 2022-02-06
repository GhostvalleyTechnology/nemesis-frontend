<script lang="ts">
  import l from "../../localisation";
  import { ClientDocumentDto, ClientDocumentService, ClientDto } from "../../gen";
  import DataTable, {
    Head,
    Body,
    Row,
    Cell,
    Label,
    SortValue,
  } from '@smui/data-table';
  import IconButton from '@smui/icon-button';
  import Textfield from '@smui/textfield';
  import { Icon } from '@smui/button';
  import FloatingActionButton from "../FloatingActionButton.svelte";
  import LabelTextfieldToggle from "../LabelTextfieldToggle.svelte";
  import Group from "../Group.svelte";
  import Searchbar from "../Searchbar.svelte";
  import {open} from "../OpenFile";

  export let client: ClientDto;
  let valueTypeFiles: FileList | null = null;
  let fileName = "";

  let sort: keyof ClientDocumentDto = 'fileName';
  let sortDirection: Lowercase<keyof typeof SortValue> = 'ascending';
  $: filterValue = "";
  $: filtered = client.documents.filter((s) => s.fileName.includes(filterValue));
  function handleSort() {
    client.documents.sort((a, b) => {
      const [aVal, bVal] = [a[sort], b[sort]][
        sortDirection === 'ascending' ? 'slice' : 'reverse'
      ]();
      if (typeof aVal === 'string' && typeof bVal === 'string') {
        return aVal.localeCompare(bVal);
      }
      return Number(aVal) - Number(bVal);
    });
    client.documents = client.documents;
  }

  function removeDocument(doc: ClientDocumentDto) {
    let id = doc.id;
    ClientDocumentService.delete(id).then(_ => {
      let temp = client.documents;
      let index = client.documents.findIndex(d => d.id == id);
      client.documents = temp.splice(index, 1);
    });
  }

  function addDocument() {
    if(fileName !== undefined && fileName !== null && fileName.length > 0 &&
      valueTypeFiles !== undefined && valueTypeFiles !== null && valueTypeFiles.length > 0) {
        ClientDocumentService.upload({
          clientId: client.id,
          file: valueTypeFiles.item(0),
          fileExtension: valueTypeFiles.item(0).type,
          fileName: fileName,
        }).then(response => {
          let doc: ClientDocumentDto = {
            id: response.id,
            fileName: response.fileName,
            createdAt: 'gerade eben'
          }
          let temp = client.documents;
          temp.push(doc);
          client.documents = temp;
        });
    }
  }

  function openDocument(doc: ClientDocumentDto) {
    ClientDocumentService.get(doc.id).then(response => open(response));
  }
</script>

<Searchbar bind:value={filterValue} />

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
      <Cell columnId="createdAt" style="width: 100%;">
        <Label>Erstellungsdatum</Label>
        <IconButton class="material-icons">arrow_upward</IconButton>
      </Cell>
      <Cell columnId="remove" style="width: 100%;">
        <Label>Löschen</Label>
      </Cell>
    </Row>
  </Head>
  <Body>
    {#each filtered as doc}
      <Row>
        <Cell on:click={() => openDocument(doc)}>{doc.fileName}</Cell>
        <Cell on:click={() => openDocument(doc)}>{doc.createdAt}</Cell>
        <Cell on:click={() => removeDocument(doc)}>
            <Icon class="material-icons">close</Icon>
        </Cell>
      </Row>
    {/each}
  </Body>
</DataTable>

<div class="footer">
  <Group>
  <div class="input-container">
    <Textfield bind:files={valueTypeFiles} label={$l.file} type="file"/>
    <LabelTextfieldToggle bind:value={fileName} edit={true} label="Name"/>
    <FloatingActionButton on:click={addDocument} icon='add' label={$l.add} float={false}/>
  </div>
  </Group>
</div>

<style lang="scss">
  .input-container {
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 40px
  }
  .footer {
    padding-top: 50px;
  }
</style>