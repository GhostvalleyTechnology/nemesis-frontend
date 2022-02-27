<script lang="ts">
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
  import { open, hasFile } from '../OpenFile';
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
      ClientContractService.add(contract).then(response => {addNewContract(response); upload()});
    } else {
      ClientContractService.update(contract).then(_ => upload());
    }
  }

  function upload() {
    policyRequestFileUpload.trigger();
    policyFileUpload.trigger();
  }


const policyRequestSubmit = (e: CustomEvent<{ file: File; }>) => {
  ClientContractService.uploadPolicyRequest({
    clientContractId: contract.id,
    file: e.detail.file,
    fileExtension: e.detail.file.type,
    fileName: e.detail.file.name
  });
}
const policySubmit = (e: CustomEvent<{ file: File; }>) => {
  ClientContractService.uploadPolicy({
    clientContractId: contract.id,
    file: e.detail.file,
    fileExtension: e.detail.file.type,
    fileName: e.detail.file.name
  });
}

const openPolicy = (dto: ClientContractDto) => {
  ClientContractService.getPolicy(dto.id).then(response => window.open(response));
}
const openPolicyRequest = (dto: ClientContractDto) => {
  ClientContractService.getPolicyRequest(dto.id).then(response => window.open(response));
}
</script>

<FormContainer>
      <H2>{$l.contract.newContractTitle}</H2>
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
</style>