<script lang="ts">
  import l from "../../localisation";
  import { confirm, snackbar } from '../../stores';
  import { ClientDocumentDto, ClientDocumentService, ClientDocumentType, ClientDto } from "../../gen";
  import DataTable, {
    Head,
    Body,
    Row,
    Cell,
    Label,
    SortValue,
  } from '@smui/data-table';
  import IconButton from '@smui/icon-button';
  import Radio from '@smui/radio';
  import FormField from '@smui/form-field';
  import { Icon } from '@smui/button';
  import FloatingActionButton from "../FloatingActionButton.svelte";
  import Searchbar from "../Searchbar.svelte";
  import { sortFunc } from "../../routes/sort";
  import FileUpload from "../FileUpload.svelte";
  import H3 from "../H3.svelte";
  import Divider from "../Divider.svelte";
  import { formatCreatedAt } from "../../service/ResponseHandler";

  export let client: ClientDto;
  let fileUpload: FileUpload;

  let sort: keyof ClientDocumentDto = 'createdAt';
  let sortDirection: Lowercase<keyof typeof SortValue> = 'ascending';
  $: filterValue = "";
  $: filtered = client.documents.filter((s) => s.file.fileName.includes(filterValue));

  const sortFunction = () => filtered = filtered.sort(sortFunc(sort, sortDirection));
  

  function removeDocument(doc: ClientDocumentDto) {
    confirm.set({title: 'Dokument löschen?', message: 'Dokument unwiderruflich löschen?', func: () => {
      let id = doc.id;
      ClientDocumentService.delete(id).then(_ => {
        let temp = client.documents;
        let index = client.documents.findIndex(d => d.id == id);
        temp.splice(index, 1);
        client.documents = temp;
      });
    }});
  }

  function addDocument(e: CustomEvent<{file: File}>) {
    ClientDocumentService.upload({
      clientId: client.id,
      type: newDocumentType,
      file: e.detail.file,
      fileExtension: e.detail.file.type,
      fileName: e.detail.file.name,
    }).then(response => {
      snackbar.set(response.file.fileName+" wurde hochgeladen.");
      let doc: ClientDocumentDto = {
        id: response.id,
        type: newDocumentType,
        createdAt: 'gerade eben',
        file: {
          fileName: response.file.fileName,
          fileExtension: response.file.fileExtension
        }
      }
      let temp = client.documents;
      temp.push(doc);
      client.documents = temp;

      fileUpload.clear();
      newDocumentType = ClientDocumentType.GENERIC;
    });
  }

  function openDocument(doc: ClientDocumentDto) {
    ClientDocumentService.get(doc.id).then(response => window.open(response));
  }

  const translateType = (type: ClientDocumentType): string => {
    switch (type) {
      case ClientDocumentType.GENERIC: return $l.document.general;
      case ClientDocumentType.ANNUAL_SERVICE: return $l.document.annualService;
      case ClientDocumentType.POLICY_SERVICE: return $l.document.policyService;
    }
  }

  let newDocumentType = ClientDocumentType.GENERIC;
</script>

<Searchbar bind:value={filterValue} />

<DataTable
  sortable
  bind:sort
  bind:sortDirection
  on:SMUIDataTable:sorted={() => {sortFunction()}}
  table$aria-label="Document list"
  style="width: 100%;"
>
  <Head>
    <Row>
      <Cell columnId="file.fileName" style="width: 100%;">
        <Label>Name</Label>
        <IconButton class="material-icons">arrow_upward</IconButton>
      </Cell>
      <Cell columnId="type" >
        <Label>Art</Label>
        <IconButton class="material-icons">arrow_upward</IconButton>
      </Cell>
      <Cell columnId="createdAt" >
        <Label>Erstellungsdatum</Label>
        <IconButton class="material-icons">arrow_upward</IconButton>
      </Cell>
      <Cell sortable={false} columnId="remove" >
        <Label>Löschen</Label>
      </Cell>
    </Row>
  </Head>
  <Body>
    {#each filtered as doc}
      <Row>
        <Cell class='pointer' on:click={() => openDocument(doc)}>{doc.file.fileName}</Cell>
        <Cell on:click={() => openDocument(doc)}>{translateType(doc.type)}</Cell>
        <Cell on:click={() => openDocument(doc)}>{formatCreatedAt(doc.createdAt)}</Cell>
        <Cell class='pointer' on:click={() => removeDocument(doc)}>
            <Icon class="material-icons primary">close</Icon>
        </Cell>
      </Row>
    {/each}
  </Body>
</DataTable>

<div class="footer">
  <Divider/>
    <H3>Neues Dokument hinzufügen</H3>
  <div class="input-container">
    <div class="upload-container">
      <FileUpload bind:this={fileUpload} on:submit={addDocument} />
    </div>
    <div class="radio-container">
      <FormField>
          <Radio bind:group={newDocumentType} value={ClientDocumentType.GENERIC} touch/>
          <span slot="label">{$l.document.general}</span>
      </FormField>
      <FormField>
          <Radio bind:group={newDocumentType} value={ClientDocumentType.ANNUAL_SERVICE} touch/>
          <span slot="label">{$l.document.annualService}</span>
      </FormField>
      <FormField>
          <Radio bind:group={newDocumentType} value={ClientDocumentType.POLICY_SERVICE} touch/>
          <span slot="label">{$l.document.policyService}</span>
      </FormField>
    </div>
    <div class="action-container">
      <FloatingActionButton float={false} label={$l.add} on:click={() => fileUpload.trigger()}/>
    </div>
  </div>
</div>

<style lang="scss">
  .input-container {
    display: grid;
    grid-template-areas: 
    "upload types"
    "upload action";
    gap: 40px
  }
  .upload-container {
    grid-area: upload;
  }
  .radio-container {
    grid-area: types;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-left: 50px;
  }
  .action-container {
    grid-area: action;
    justify-self: end;
  }
  .footer {
    padding-top: 50px;
  }
</style>