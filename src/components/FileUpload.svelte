<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { fade } from 'svelte/transition';
  const dispatch = createEventDispatcher<{submit:{file:File}}>();
  export let autoSubmit = false;
  // checks if drag&drop is supported by the browser
  const isAdvancedUpload = () => {
    let div = document.createElement("div");
    return (
      ("draggable" in div || ("ondragstart" in div && "ondrop" in div)) &&
      "FormData" in window &&
      "FileReader" in window
    );
  };

  let droppedFiles: FileList;
  let isDrag = false;

  const prevent = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const addDragOver = (e: DragEvent) => {
    prevent(e);
    isDrag = true;
  };
  const removeDragOver = (e: DragEvent) => {
    prevent(e);
    isDrag = false;
  };
  const drop = (e: DragEvent) => {
    removeDragOver(e);
    droppedFiles = e.dataTransfer.files;
    if(autoSubmit) {
      trigger();
    }
  };

  export const trigger = async () => {
    if(droppedFiles == undefined) {
      return;
    }
    let file = droppedFiles.item(0);
    dispatch('submit', { file });
  };

  let droppedFileIcon = "check";
  const changeCheckToDelete = () => {
    if(droppedFiles !== undefined) {
      droppedFileIcon = "close";
    }
  }
  const changeCheckBack = () => {
    droppedFileIcon = "check";
  }
</script>

  <form
    class="box {isAdvancedUpload ? 'has-advanced-upload' : ''} {isDrag ? 'is-dragover' : ''}"
    method="post"
    action=""
    enctype="multipart/form-data"
    on:drag={prevent}
    on:dragstart={prevent}
    on:dragover={addDragOver}
    on:dragenter={addDragOver}
    on:dragend={removeDragOver}
    on:dragleave={removeDragOver}
    on:drop={drop}
  >
    <div class="box__input">
      <div class="box__icon">
        {#if isDrag || droppedFiles !== undefined }
        <span class="material-icons pointer {droppedFileIcon == 'close' ? 'primary' : ''}" transition:fade={{duration: 100}} 
          on:focus={changeCheckToDelete} 
          on:mouseover={changeCheckToDelete}
          on:mouseout={changeCheckBack}
          on:blur={changeCheckBack}
          on:click={() => {droppedFiles = undefined; changeCheckBack();}}
          >{droppedFileIcon}</span>
        {:else}
        <span class="material-icons" transition:fade={{duration: 100}}>upload</span>
        {/if}
      </div>
      
      <input type="file" id="file" bind:files={droppedFiles} hidden />
      <label class="pointer" for="file">
        {#if droppedFiles}
          {#each droppedFiles as item}
            {item.name}
          {/each}
        {:else}
          <strong class="box__choose">Choose a file</strong><span class="box__dragndrop">&nbsp;or drag it here</span>.
        {/if}
      </label>
    </div>
  </form>

<style lang="scss">
  @use '../theme/constants';

  .pointer {
    cursor: pointer;
  }
  .box {
    font-size: 1.25rem;
    padding: 80px 20px;
    text-align: center;
    width: 100%;
    max-width: 480px;
    margin: auto;
  }
  .box.has-advanced-upload {
    outline: 2px dashed #92b0b3;
    outline-offset: -10px;
    -webkit-transition: outline-offset 0.15s ease-in-out,
      background-color 0.15s linear;
    transition: outline-offset 0.15s ease-in-out,
      background-color 0.15s linear;
  }
  .box.is-dragover {
    outline-offset: -20px;
    outline-color: constants.$primary;
  }
  .box.is-dragover .material-icons {
    color: constants.$primary
  }
  .box__dragndrop,
  .box__icon {
    display: none;
  }
  .box.has-advanced-upload .box__dragndrop {
    display: inline;
  }
  .box.has-advanced-upload .box__icon {
    width: 100%;
    height: 80px;
    fill: #92b0b3;
    margin-bottom: 40px;
    display: grid;
    place-items: center;
    grid-template-areas: "icon-stack";
  }
  .box.has-advanced-upload .box__icon span{
    font-size: 5rem;
    grid-area: icon-stack;
  }

  label:hover,
  label:focus,
  .primary {
    color: constants.$primary;
  }
</style>