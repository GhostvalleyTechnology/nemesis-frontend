<script lang="ts">
  import Button, { Icon } from '@smui/button';
  import Textfield from '@smui/textfield';
  import { PartnerServiceTypeDto, PartnerServiceTypeService } from "../gen";

  let newService = '';
  let items: PartnerServiceTypeDto[] = [];
  function list() {
    PartnerServiceTypeService.list().then(response => items = response);
  }
  list();

  function remove(item: PartnerServiceTypeDto) {
    PartnerServiceTypeService.delete(item.id).then(_ => {
      items = items.filter(item => item.id == item.id);
      list();
    });
    
  }

  function add() {
    PartnerServiceTypeService.add({service: newService}).then(_ => {
      newService = '';
      list();
    })
  }
</script>

<div class="content">
  {#each items as item}
  <div class="container">
    <Button on:click={() => remove(item)}>
      <Icon class="material-icons">close</Icon>
    </Button>
    <div class="label">{item.service}</div>
  </div>
  {/each}

  <div class="container input">
    <Button style="align-self: center;" on:click={() => add()}>
      <Icon class="material-icons">add</Icon>
    </Button>
    <Textfield bind:value={newService} label='New Service Type' input$emptyValueUndefined={true} input$emptyValueNull={true} style="width: 100%;"/>
  </div>
</div>
<style lang="scss">
  .content {
    max-width: 800px;
    display: grid;

  }
  .container {
    display: flex;
    flex-direction: row;
  }
  .label {
    align-self: center;
  }
  .input {
    padding-top: 50px;
  }
</style>