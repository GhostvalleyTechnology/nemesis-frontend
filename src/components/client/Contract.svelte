<script lang="ts">
  import { confirm, snackbar } from '../../stores';
  import l from '../../localisation';
  import LayoutGrid, { Cell } from '@smui/layout-grid';
  import { ClientContractDto, ClientContractService, ClientDto, CloudFileDto, PaymentFrequency } from '../../gen';
  import H2 from "../H2.svelte";
  import FormContainer from "../FormContainer.svelte";
  import LabelTextfieldToggle from "../LabelTextfieldToggle.svelte";
  import ServiceTypeSelection from '../ServiceTypeSelection.svelte';
  import EuroTextfield from '../EuroTextfield.svelte';
  import Button, { Label, Icon } from '@smui/button';
  import PaymentFrequencySelection from '../PaymentFrequencySelection.svelte';
  import ContractorSelection from '../ContractorSelection.svelte';
  import FloatingActionButton from '../FloatingActionButton.svelte';
  import { ContractRoute } from './ContractRouteType';
  import StylizedCheckbox from '../StylizedCheckbox.svelte';
  import FileUpload from '../FileUpload.svelte';
  import H3 from '../H3.svelte';
  import Divider from '../Divider.svelte';

  export let client: ClientDto;
  export let edit: boolean;
  export let selectedContract: ContractRoute;
  let policyRequestFileUpload: FileUpload;
  let policyFileUpload: FileUpload;

  let contract: ClientContractDto = { clientId: client.id, paymentFrequency: PaymentFrequency.UNKNOWN };
  if(selectedContract.edit) {
    contract = client.contracts.find(item => item.id == selectedContract.id);
  }
  const addNewContract = (dto: ClientContractDto) => {
    contract = dto;
    client.contracts.push(contract);
  }
  const save = () => {
    if (selectedContract.add) {
      ClientContractService.add(contract).then(response => {addNewContract(response); upload(); snackbar.set("Polizze erstellt.");});
    } else {
      ClientContractService.update(contract).then(_ => {upload(); snackbar.set("Polizze geändert.");});
    }
  }

  function upload() {
    if(policyRequestFileUpload) { policyRequestFileUpload.trigger(); }
    if(policyFileUpload) { policyFileUpload.trigger(); }
    selectedContract.add = false;
    selectedContract.edit = false;
  }

const policyRequestSubmit = (e: CustomEvent<{ file: File; }>) => {
  ClientContractService.uploadPolicyRequest({
    clientContractId: contract.id,
    file: e.detail.file,
    fileExtension: e.detail.file.type,
    fileName: e.detail.file.name
  }).then(response => contract = response);
}
const policySubmit = (e: CustomEvent<{ file: File; }>) => {
  ClientContractService.uploadPolicy({
    clientContractId: contract.id,
    file: e.detail.file,
    fileExtension: e.detail.file.type,
    fileName: e.detail.file.name
  }).then(response => contract = response);
}

const openPolicy = (dto: ClientContractDto) => {
  ClientContractService.getPolicy(dto.id).then(response => window.open(response));
}
const openPolicyRequest = (dto: ClientContractDto) => {
  ClientContractService.getPolicyRequest(dto.id).then(response => window.open(response));
}
const deleteContract = () => {
  confirm.set({title: 'Dokument löschen?', message: 'Dokument unwiderruflich löschen?', func: () => {
    ClientContractService.delete(contract.id).then(_ => {
      let temp = client.contracts;
      let index = client.contracts.findIndex(d => d.id == contract.id);
      temp.splice(index, 1);
      client.contracts = temp;
      selectedContract.add = false;
      selectedContract.edit = false;
    });
  }});
}
</script>

<FormContainer>
      <div class="header-container">
        <div class="header-item">
      <H2>{selectedContract.add ? $l.contract.newContractTitle : $l.contract.editContractTitle}</H2>
    </div>
    <div class="header-item">
      {#if selectedContract.edit}
      <Button on:click={deleteContract}>
        <Icon class="material-icons">close</Icon>
        <Label>Polizze löschen</Label>
      </Button>
      {/if}
    </div>
      </div>
      <LayoutGrid style="padding-bottom: 3rem;">
          <Cell span={6}>
            <LabelTextfieldToggle {edit} label={$l.contract.contractNumber} bind:value={contract.contractNumber}/>
          </Cell>
          <Cell span={6}>
            <ServiceTypeSelection {edit} bind:service={contract.serviceType}/>
          </Cell>
          <Cell span={6}>
            <StylizedCheckbox bind:value={contract.legacy} label={$l.contract.legacy}/>
          </Cell>
          <Cell span={6}>
            <ContractorSelection bind:partner={contract.contractor} {edit}/>
          </Cell>
          <Cell span={6}>
            <EuroTextfield bind:integer={contract.paymentValue} {edit}/>
          </Cell>
          <Cell span={6}>
            <PaymentFrequencySelection bind:paymentFrequency={contract.paymentFrequency} />
          </Cell>
          <Cell span={6}>
            <LabelTextfieldToggle {edit} bind:value={contract.contractDate} label="Vertragsdatum" type="date"/>
          </Cell>
          <Cell span={12}>
            <H3>Polizzenanfrage</H3>
            {#if contract.policyRequest && contract.policyRequest.fileName}
            <div class="file-button-container">
              <Button on:click={() => { openPolicyRequest(contract) }}>
                <Icon class="material-icons">description</Icon>
                <Label>Dokument öffnen</Label>
              </Button>
              <Button on:click={() => { contract.policyRequest = undefined}}>
                <Icon class="material-icons">close</Icon>
                <Label>Dokument löschen</Label>
              </Button>
            </div>
            {:else}
            <FileUpload bind:this={policyRequestFileUpload} on:submit={policyRequestSubmit} />
            {/if}
          </Cell>
          <Cell span={12}>
            <Divider/>
            <H3>Polizze</H3>
            {#if contract.policy && contract.policy.fileName}
            <div class="file-button-container">
              <Button on:click={() => { openPolicy(contract) }}>
                <Icon class="material-icons">description</Icon>
                <Label>Dokument öffnen</Label>
              </Button>
              <Button on:click={() => { contract.policy = undefined}}>
                <Icon class="material-icons">close</Icon>
                <Label>Dokument löschen</Label>
              </Button>
            </div>
            {:else}
            <FileUpload bind:this={policyFileUpload} on:submit={policySubmit} />
            {/if}
          </Cell>

      </LayoutGrid>
      <FloatingActionButton on:click={save} icon='save' label={$l.save}/>
    </FormContainer>

<style lang="scss">
.file-button-container {
  display: flex;
  justify-content: space-evenly;
}
.header-container {
  display: flex;
  justify-content: space-between;
}
.header-item {
  align-self: center;
}
</style>