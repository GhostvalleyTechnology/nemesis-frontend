<script lang="ts">
  import Dialog, { Title, Content, Actions } from '@smui/dialog';
  import Button, { Label } from '@smui/button';
  import { confirm } from '../stores';

  let open = false;

  confirm.subscribe(c => {
    if(c.title != "") {
      open = true;
    }
  });

</script>

<Dialog
  bind:open
  aria-labelledby="simple-title"
  aria-describedby="simple-content"
>
  <!-- Title cannot contain leading whitespace due to mdc-typography-baseline-top() -->
  <Title id="simple-title">{$confirm.title}</Title>
  <Content id="simple-content">{$confirm.message}</Content>
  <Actions>
    <Button>
      <Label>Nein</Label>
    </Button>
    <Button on:click={() => {$confirm.func()}}>
      <Label>Ja</Label>
    </Button>
  </Actions>
</Dialog>