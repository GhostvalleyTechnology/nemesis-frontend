<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import IconButton from '@smui/icon-button';
  export let icon = 'settings';
  const dispatch = createEventDispatcher();
  function doDispatch() {
    dispatch('click');
  }
</script>

<div class="float">
  <IconButton color="primary" class="material-icons" on:click={doDispatch}>
    {icon}
  </IconButton>
</div>

<style lang="scss">
  .float {
    position: fixed;
    top: 2rem;
    right: 3rem;
    z-index: 1;
  }
</style>