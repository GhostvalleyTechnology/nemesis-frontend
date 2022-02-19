<script lang="ts">
  import Snackbar, { Actions, Label, SnackbarComponentDev } from "@smui/snackbar";
  import IconButton from '@smui/icon-button';
  import { snackbar } from "../stores"
  let msg = "";
  let component: SnackbarComponentDev;
  snackbar.subscribe(value => {
    if(value != "") {
      msg = value;
      component.open();
    }
  })
</script>

<Snackbar bind:this={component}>
  <Label>{msg}</Label>
  <Actions>
    <IconButton class="material-icons" title="Dismiss">close</IconButton>
  </Actions>
</Snackbar>