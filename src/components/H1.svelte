<h1><slot/></h1>
<style lang="scss">
  @use "@material/typography/index" as typography;
  h1 {
    @include typography.typography("headline2");
    text-align: center;
  }
</style>