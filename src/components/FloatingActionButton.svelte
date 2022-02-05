<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Fab, {Label, Icon} from "@smui/fab";
  export let icon = 'add';
  export let label = '';
  export let float = true;
  const dispatch = createEventDispatcher();
  function doDispatch() {
    dispatch('click');
  }
  let extended = false;
  $: extended = (label !== undefined && label !== null && label !== '');
  let containerClass = '';
  $: containerClass = float ? 'float' : ''
</script>


<div class={containerClass}>
  <Fab color="primary" on:click={doDispatch} {extended}>
    <Icon class="material-icons">{icon}</Icon>
    {#if extended}
    <Label>{label}</Label>
    {/if}
  </Fab>
</div>

<style lang="scss">
  .float {
    position: fixed;
    bottom: 2rem;
    right: 3rem;
    z-index: 1;
  }
</style>