<script lang="ts">
  export let margin = '50px 0 70px 0';
</script>

<hr style="margin: {margin};"/>

<style lang="scss">
  @use '../theme/constants';
  hr {
    height: 1px;
    width: 100%;
    border: none;
    background-color: constants.$secondary-light;
    opacity: 0.25;
  }
</style>