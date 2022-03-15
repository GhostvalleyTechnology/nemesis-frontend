<script lang="ts">
  import { navigate } from "svelte-routing";
  import LayoutGrid, { Cell } from "@smui/layout-grid";
  import { PartnerDto, PartnerService } from "../gen";
  import isNumeric from "../isNumeric";
  import LabelTextfieldToggle from "../components/LabelTextfieldToggle.svelte";
  import FormContainer from "../components/FormContainer.svelte";
  import { admin } from '../stores';
  import FloatingActionButton from "../components/FloatingActionButton.svelte";
  import H1 from "../components/H1.svelte";
  import PartnerContact from "../components/partner/PartnerContact.svelte";
  import PartnerLogin from "../components/partner/PartnerLogin.svelte";
  import PartnerServiceComponent from "../components/partner/PartnerService.svelte";
  import Group from "../components/Group.svelte"; 
  import PartnerIntermediaryNumber from "../components/partner/PartnerIntermediaryNumber.svelte";

  export let id: string;
  let edit = false;

  let partner: PartnerDto = {
    contacts: [],
    logins: [],
    services: [],
    intermediaryNumbers: [],
  };
  if (isNumeric(id)) {
    PartnerService.get(+id).then((data) => (partner = data));
  } else {
    edit = true;
  }

  function save() {
    if (isNumeric(id)) {
      PartnerService.update(partner).then(() => navigate("/partners"));
    } else {
      PartnerService.add(partner).then(() => navigate("/partners"));
    }
  }
  
</script>

<FormContainer showIcon={$admin} on:icon-click={() => edit = !edit}>
  <H1>Partner</H1>
  <LayoutGrid style="padding-bottom: 3rem;">
    <Cell span={12}>
      <LabelTextfieldToggle bind:value={partner.name} label="Name" {edit}/>
    </Cell>
    <Cell span={12}>
      <LabelTextfieldToggle bind:value={partner.website} label="Website" {edit}/>
    </Cell>
    <Cell span={12}>
      <LabelTextfieldToggle bind:value={partner.iban} label="IBAN" {edit}/>
    </Cell>
    <Cell span={6}>
      <LabelTextfieldToggle bind:value={partner.bank} label="Bank" {edit}/>
    </Cell>
    <Cell span={6}>
      <LabelTextfieldToggle bind:value={partner.bic} label="BIC" {edit}/>
    </Cell>
    <Cell span={12}>
      <Group>
        <PartnerContact bind:dtos={partner.contacts} {edit}/>
      </Group>
    </Cell>
    <Cell span={12}>
      <Group>
        <PartnerLogin bind:dtos={partner.logins} {edit}/>
      </Group>
    </Cell>
    <Cell span={12}>
      <Group>
        <PartnerIntermediaryNumber bind:dtos={partner.intermediaryNumbers} {edit}/>
      </Group>
    </Cell>
    <Cell span={12}>
      <Group>
        <PartnerServiceComponent bind:dtos={partner.services} {edit}/>
      </Group>
    </Cell>
  </LayoutGrid>
 
  {#if edit}
  <div class="button-container">
    <FloatingActionButton on:click={() => save()} label='Save' icon='save' float={false}/>
  </div>
  {/if}
</FormContainer>

<style lang="scss">
  .button-container {
    display: flex;
    justify-content: flex-end;
    margin: 1rem;
  }
</style>
