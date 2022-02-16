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
  import { open } from "../OpenFile";
  import { sortFunction } from "../../routes/sort";
  import FileUpload from "../FileUpload.svelte";

  export let client: ClientDto;
  let fileUpload: FileUpload;

  let valueTypeFiles: FileList | null = null;
  let fileName = "";

  let sort: keyof ClientDocumentDto = 'id';
  let sortDirection: Lowercase<keyof typeof SortValue> = 'ascending';
  $: filterValue = "";
  $: filtered = client.documents.filter((s) => s.file.fileName.includes(filterValue));

  function removeDocument(doc: ClientDocumentDto) {
    let id = doc.id;
    ClientDocumentService.delete(id).then(_ => {
      let temp = client.documents;
      let index = client.documents.findIndex(d => d.id == id);
      client.documents = temp.splice(index, 1);
    });
  }

  function addDocument(e: CustomEvent<{file: File}>) {
    ClientDocumentService.upload({
      clientId: client.id,
      file: e.detail.file,
      fileExtension: e.detail.file.type,
      fileName: e.detail.file.name,
    }).then(response => {
      let doc: ClientDocumentDto = {
        id: response.id,
        createdAt: 'gerade eben',
        file: {
          fileName: response.file.fileName,
          objectName: response.file.objectName,
          fileExtension: response.file.fileExtension
        }
      }
      let temp = client.documents;
      temp.push(doc);
      client.documents = temp;
    });
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
  on:MDCDataTable:sorted={() => sortFunction(client.documents, sort, sortDirection)}
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
        <Cell on:click={() => openDocument(doc)}>{doc.file.fileName}</Cell>
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
    <FileUpload bind:this={fileUpload} on:submit={addDocument} />
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