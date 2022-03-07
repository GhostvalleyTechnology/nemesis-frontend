<script lang="ts">
  import Button, {Icon, Label} from '@smui/button';
  import { ProofOfIdentityDto, ProofOfIdentityService } from '../../gen';
  export let item: ProofOfIdentityDto;
  export let edit = false;
  export let clientId: number;
  
  let showAdd = false;
  $: showAdd = item == null || item == undefined || item.id == null || item.id == undefined || item.id == 0;

  let inputfield;
  function selectFile() {
    inputfield.click();
  }

  function add() {
    ProofOfIdentityService.add({
      clientId: clientId,
      file: file,
      type: item.type,
      fileName: item.type
    }).then(response => item = response);
  }

  function remove() {
    let temp = item.type;
    ProofOfIdentityService.delete(item.id).then(_ => {
      item = {
        id: null,
        type: temp
      }
    });
  }

  
  let file: Blob;
  let valueTypeFiles: FileList | null = null;
  $: if (valueTypeFiles != null && valueTypeFiles.length) {
    file = valueTypeFiles.item(0);
  }
</script>
{#if edit}
  {#if showAdd}
  <Button on:click={selectFile}>
    <Icon class="material-icons">add</Icon>
    <Label>Hinzufügen</Label>
  </Button>
  
    <input bind:this={inputfield} bind:files={valueTypeFiles} type="file" on:change={add} hidden={true}/>
  
  {:else}
  <Button on:click={remove}>
    <Icon class="material-icons">close</Icon>
    <Label>Löschen</Label>
  </Button>
  {/if}
{/if}
