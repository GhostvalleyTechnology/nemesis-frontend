<script lang="ts">
  import l from '../../localisation';
  import LayoutGrid, { Cell } from '@smui/layout-grid';
  import Textfield from '@smui/textfield';
  import Checkbox from '@smui/checkbox';
  import FormField from '@smui/form-field';
  import { ClientContractDto, ClientContractService, ClientDto } from '../../gen';
  import H2 from "../H2.svelte";
  import Icon from "@smui/textfield/icon";
  import FormContainer from "../FormContainer.svelte";
  import LabelTextfieldToggle from "../LabelTextfieldToggle.svelte";
  import ServiceTypeSelection from '../ServiceTypeSelection.svelte';
  import EuroTextfield from '../EuroTextfield.svelte';
  import PaymentFrequencySelection from '../PaymentFrequencySelection.svelte';
  import ContractorSelection from '../ContractorSelection.svelte';
  import FloatingActionButton from '../FloatingActionButton.svelte';
  import { ContractRoute } from './ContractRouteType';
  import { open, hasFile } from '../OpenFile';

  let valueTypeFiles: FileList | null = null;
  export let client: ClientDto;
  export let edit: boolean;
  export let selectedContract: ContractRoute;

  let contract: ClientContractDto = { clientId: client.id };
  if(selectedContract.edit) {
    contract = client.contracts.find(item => item.id == selectedContract.id);
  }
  
  function save() {
    if (selectedContract.add) {
      ClientContractService.add(contract).then(response => upload(response));
    } else {
      ClientContractService.update(contract).then(_ => upload(contract));
    }
  }

  function upload(dto: ClientContractDto) {
    if(valueTypeFiles !== undefined && valueTypeFiles !== null && valueTypeFiles.length > 0) {
      ClientContractService.upload({
        clientContractId: dto.id,
        file: valueTypeFiles.item(0),
        fileExtension: valueTypeFiles.item(0).type,
        fileName: valueTypeFiles.item(0).name,
      }).then(_ => back());
    } else {
      back();
    }
  }

  function back() {
    selectedContract.add = false;
    selectedContract.edit = false;
  }

  function openContract() {
    if(hasFile(contract.fileId)) {
      ClientContractService.get(contract.id).then(response => open(response))
    }
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
          <Cell span={6} align="middle">
              <FormField>
                  <Checkbox bind:checked={contract.legacy} touch />
                  <span slot="label">{$l.contract.legacy}</span>
              </FormField>
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
            {#if hasFile(contract.fileId)}
              <FloatingActionButton on:click={openContract} float={false} icon='description' label='Datei öffnen'/>
            {:else}
              <Textfield bind:files={valueTypeFiles} label={$l.file} type="file"/>
            {/if}
          </Cell>

      </LayoutGrid>
      <FloatingActionButton on:click={save} icon='save' label={$l.save}/>
    </FormContainer>
