<script lang="ts">
  import Textfield from "@smui/textfield";
  export let value: string;
  export let style = "width: 100%;";
  export let label: string;
  export let edit = false;
  export let type = "";
</script>

{#if edit}
  <Textfield
    input$emptyValueUndefined={true}
    input$emptyValueNull={true}
    {style}
    bind:value
    {label}
    {type}
  />
{:else}
  <Textfield
    input$emptyValueUndefined={true}
    input$emptyValueNull={true}
    disabled
    {style}
    input$class="font-color"
    bind:value
    {label}
  />
{/if}
