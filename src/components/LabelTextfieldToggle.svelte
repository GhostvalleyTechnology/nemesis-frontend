<script lang="ts">
  import Textfield from "@smui/textfield";
  export let value: string;
  export let style = "width: 100%;";
  export let label: string;
  export let edit = false;
  export let type = "";
  export let prefix="";
  export let checkPattern=".*";
</script>

<Textfield
  bind:value
  input$emptyValueUndefined={true}
  input$emptyValueNull={true}
  {prefix}
  {style}
  {label}
  {type}
  input$class={edit ? '' : 'font-color'}
  disabled={!edit}
  input$pattern={checkPattern}
/>

<style lang="scss">
  /* :global(.show > .mdc-line-ripple::before) {
    border-bottom-color: rgba(0, 0, 0, 0) !important;
  } */
</style>