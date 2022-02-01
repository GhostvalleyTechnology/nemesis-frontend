<script lang="ts">
  import l from "../localisation";
  import Paper from "@smui/paper";
  import { Input } from "@smui/textfield";
  import Icon from "@smui/textfield/icon";

  export let value = "";
</script>

<div class="solo-container">
  <Paper class="solo-paper" elevation={6}>
    <Icon class="material-icons">search</Icon>
    <Input bind:value placeholder={$l.search} class="solo-input font-color" />
  </Paper>
</div>

<style lang="scss">
  .solo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
  }
  * :global(.solo-paper) {
    display: flex;
    align-items: center;
    flex-grow: 1;
    max-width: 600px;
    margin: 0 12px;
    padding: 0 12px;
    height: 48px;
  }
  * :global(.solo-paper > *) {
    display: inline-block;
    margin: 0 12px;
  }
  * :global(.solo-input) {
    flex-grow: 1;
  }
  * :global(.solo-input::placeholder) {
    opacity: 0.6;
  }
</style>
