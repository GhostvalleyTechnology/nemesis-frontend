<h3><slot/></h3>
<style lang="scss">
  @use "@material/typography/index" as typography;
  h3 {
    @include typography.typography("headline6");
  }
</style>