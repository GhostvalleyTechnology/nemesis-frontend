<h2><slot/></h2>
<style lang="scss">
  @use "@material/typography/index" as typography;
  h2 {
    @include typography.typography("headline5");
  }
</style>