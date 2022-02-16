<script lang="ts">
  import { navigate } from "svelte-routing";
  import LayoutGrid, { Cell } from '@smui/layout-grid';
  import Checkbox from '@smui/checkbox';
  import FormField from '@smui/form-field';
  import Paper from '@smui/paper';
  import Fab, { Label, Icon } from '@smui/fab';
  import { TemplateService } from '../gen';
  import H1 from '../components/H1.svelte'
  import FileUpload from "../components/FileUpload.svelte";
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

<div class="form-container">
  <Paper elevation={6}>
      <H1>Template Upload</H1>
      <LayoutGrid style="padding-bottom: 3rem;">
          <Cell span={12}>
            <FileUpload bind:this={fileUpload} on:submit={save}/>
          </Cell>
          <Cell span={12} align="middle">
              <FormField>
                  <Checkbox bind:checked={adminOnly} touch />
                  <span slot="label">Admin</span>
              </FormField>
          </Cell>
      </LayoutGrid>
      <div class="button-container">
          <Fab color="primary" on:click={() => fileUpload.trigger()} extended>
              <Icon class="material-icons">save</Icon>
              <Label>Save</Label>
          </Fab>
      </div>
      
  </Paper>
  </div>
  <style lang="scss">
  
      .form-container {
          max-width: 1000px;
          margin: auto;
      }
  
      .button-container {
          display: flex;
          justify-content: flex-end;
          margin: 1rem;
      }
  </style>