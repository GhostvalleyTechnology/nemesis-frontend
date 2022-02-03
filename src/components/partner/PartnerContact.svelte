<script lang="ts">
  import { slide } from "svelte/transition";
  import LayoutGrid, { Cell } from "@smui/layout-grid";
  import Button, { Label, Icon } from "@smui/button";
  import { PartnerContactDto } from "../../gen";
  import H2 from "../H2.svelte";
  import LabelTextfieldToggle from "../LabelTextfieldToggle.svelte";
  export let dtos: PartnerContactDto[];
  export let edit = false;

  function remove(dto: PartnerContactDto) {
    let contacts = dtos;
    dtos = contacts.filter((item) => item !== dto);
  }

  function add() {
    let contacts = dtos;
    let contact: PartnerContactDto = {
      email: "",
      name: "",
      phone: "",
      remarks: "",
    };
    contacts.push(contact);
    dtos = contacts;
  }
</script>

<H2>Kontakte</H2>
<LayoutGrid style="padding-bottom: 3rem;">
  {#each dtos as dto}
    <Cell span={11}
      ><div transition:slide>
        <LayoutGrid style="padding-bottom: 3rem;">
          <Cell span={12}>
            <LabelTextfieldToggle
              label="Anmerkung"
              bind:value={dto.remarks}
              {edit}
            />
          </Cell>
          <Cell span={6}>
            <LabelTextfieldToggle label="Name" bind:value={dto.name} {edit} />
          </Cell>
          <Cell span={6}>
            <LabelTextfieldToggle
              label="Telefon"
              bind:value={dto.phone}
              {edit}
            />
          </Cell>
          <Cell span={12}>
            <LabelTextfieldToggle
              label="E-Mail"
              bind:value={dto.email}
              {edit}
            />
          </Cell>
        </LayoutGrid>
      </div></Cell
    >
    {#if edit}
      <Cell span={1} align="middle"
        ><div transition:slide>
          <Button on:click={() => remove(dto)}>
            <Icon class="material-icons">close</Icon>
          </Button>
        </div></Cell
      >
    {/if}
  {/each}
  {#if edit}
    <Cell span={12}>
      <Button on:click={() => add()}>
        <Icon class="material-icons">add</Icon>
        <Label>Kontakt hinzufügen</Label>
      </Button>
    </Cell>
  {/if}
</LayoutGrid>
