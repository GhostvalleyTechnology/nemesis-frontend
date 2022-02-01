<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { Icon } from '@smui/icon-button';
  import Fab from "@smui/fab";
  export let icon = 'add';
  const dispatch = createEventDispatcher();
  function doDispatch() {
    dispatch('click');
  }
</script>

<div class="float">
  <Fab color="primary" on:click={doDispatch}>
    <Icon class="material-icons">{icon}</Icon>
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