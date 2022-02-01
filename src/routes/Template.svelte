<script lang="ts">
  import { navigate } from "svelte-routing";
  import LayoutGrid, { Cell } from '@smui/layout-grid';
  import Textfield from '@smui/textfield';
  import Checkbox from '@smui/checkbox';
  import FormField from '@smui/form-field';
  import Paper from '@smui/paper';
  import Fab, { Label, Icon } from '@smui/fab';
  import { TemplateService } from '../gen';

  let file: Blob;
  let fileName: string = '';
  let adminOnly: boolean = false;

  function save() {
    TemplateService.add({
      file,
      fileName,
      adminOnly
    }).then(() => navigate('/templates')).catch();
  }

  let valueTypeFiles: FileList | null = null;
  $: if (valueTypeFiles != null && valueTypeFiles.length) {
    file = valueTypeFiles.item(0);
  }
</script>

<div class="form-container">
  <Paper elevation={6}>
      <h1>Template Upload</h1>
      <LayoutGrid style="padding-bottom: 3rem;">
          <Cell span={12}>
              <Textfield style="width: 100%;" bind:value={fileName} label="Name"/>
          </Cell>
          <Cell span={12}>
            <Textfield bind:files={valueTypeFiles} label="File" type="file"/>
          </Cell>
          <Cell span={12} align="middle">
              <FormField>
                  <Checkbox bind:checked={adminOnly} touch />
                  <span slot="label">Admin</span>
              </FormField>
          </Cell>
      </LayoutGrid>
      <div class="button-container">
          <Fab color="primary" on:click={() => save()} extended>
              <Icon class="material-icons">save</Icon>
              <Label>Save</Label>
          </Fab>
      </div>
      
  </Paper>
  </div>
  <style lang="scss">
      @use '@material/typography/index' as typography;
      h1 {
          @include typography.typography('headline3');
          text-align: center;
      }
  
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