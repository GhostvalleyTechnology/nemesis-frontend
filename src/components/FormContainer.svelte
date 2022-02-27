<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Paper from "@smui/paper";
  import IconButton from '@smui/icon-button';

  export let icon = 'edit';
  export let showIcon = false;

  const dispatch = createEventDispatcher();
  function doDispatch() {
    dispatch('icon-click');
  }
</script>

<div class="container">
  <div class="content">
    <!-- <Paper elevation={6}> -->
      <slot/>
    <!-- </Paper> -->
  </div>
  {#if showIcon}
    <div class="icon-button">
      <IconButton color="primary" class="material-icons" on:click={doDispatch}>
        {icon}
      </IconButton>
    </div>
  {/if}
</div>

<style lang="scss">
  .container {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: auto 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }

  .content { 
    grid-area: 1 / 1 / 3 / 3; 
  }
  .icon-button { 
    grid-area: 1 / 2 / 2 / 3;
    padding: 20px 20px 0 0;
  }

</style>