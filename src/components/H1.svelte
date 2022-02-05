<script lang="ts">
  export let description: string = '';
  let showDescription = false;
  $: showDescription = description !== undefined && description !== null && description !== ''
</script>

<h1><slot/></h1>
{#if showDescription}
  <div class='font-color'>{description}</div>
{/if}
<style lang="scss">
  @use "@material/typography/index" as typography;
  h1 {
    @include typography.typography("headline3");
  }
</style>