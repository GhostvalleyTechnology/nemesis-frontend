<script lang="ts">
  import { navigate } from "svelte-routing";
  import LayoutGrid, { Cell } from '@smui/layout-grid';
  import { TemplateService } from '../gen';
  import H1 from '../components/H1.svelte'
  import FileUpload from "../components/FileUpload.svelte";
  import FormContainer from "../components/FormContainer.svelte";
  import Group from "../components/Group.svelte";
  import StylizedCheckbox from "../components/StylizedCheckbox.svelte";
  import FloatingActionButton from "../components/FloatingActionButton.svelte";
  let fileUpload: FileUpload;
  let adminOnly: boolean = false;

  function save(e: CustomEvent<{file: File}>) {
    TemplateService.add({
      file: e.detail.file,
      fileName: e.detail.file.name,
      fileExtension: e.detail.file.type,
      adminOnly
    }).then(() => navigate('/templates')).catch();
  }

</script>

<FormContainer>
  <Group>
    <H1 description="Vorlagen können für Mitarbeiter oder nur für Admins zur Verfügung gestellt werden. Einfach das Häckchen setzen, wenn die hochgeladene Datei nur für Admins ist.">Vorlage hochladen</H1>
    <LayoutGrid style="padding-bottom: 3rem;">
        <Cell span={12}>
          <StylizedCheckbox bind:value={adminOnly} label="Nur für Admins?"/>
        </Cell>
        <Cell span={12}>
          <FileUpload bind:this={fileUpload} on:submit={save}/>
        </Cell>
        <Cell span={12}>
          <div class="right">
            <FloatingActionButton on:click={() => fileUpload.trigger()} icon="save" float={false} label="Speichern"/>
          </div>
        </Cell>
    </LayoutGrid>
  </Group> 
</FormContainer>

<style lang="scss">
  .right {
    text-align: end;
  }
</style>