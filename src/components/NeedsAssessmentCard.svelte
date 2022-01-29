<script lang="ts">
    import Card, { Content, Media, MediaContent } from '@smui/card';
    export let subtitle = "";
    export let text = "";
</script>

<Card>
    <Media style="background-image: url(https://place-hold.it/320x180?text=16x9&fontsize=23);" aspectRatio="16x9">
      <MediaContent>
        <h2
          class="mdc-typography--headline6"
          style="color: #fff; position: absolute; bottom: 16px; left: 16px; margin: 0;"
        >
          {subtitle}
        </h2>
      </MediaContent>
    </Media>
    <Content><span class="text">{text}</span></Content>
  </Card>

<style lang="scss">
    @use '@material/typography/index' as typography;
    h2 {
        @include typography.typography('headline6');
    }
    .text {
        @include typography.typography('body1');
    }
  
</style>