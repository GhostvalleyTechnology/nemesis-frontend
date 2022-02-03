<script lang="ts">
  import { slide } from "svelte/transition";
  import LayoutGrid, { Cell } from "@smui/layout-grid";
  import Button, { Label, Icon } from "@smui/button";
  import { PartnerLoginDto } from "../../gen";
  import H2 from "../H2.svelte";
  import LabelTextfieldToggle from "../LabelTextfieldToggle.svelte";
  import StylizedCheckbox from "../StylizedCheckbox.svelte";
  export let dtos: PartnerLoginDto[];
  export let edit = false;

  function remove(dto: PartnerLoginDto) {
    let contacts = dtos;
    dtos = contacts.filter((item) => item !== dto);
  }

  function add() {
    let contacts = dtos;
    let contact: PartnerLoginDto = {
      link: "",
      username: "",
      password: "",
      adminOnly: false,
    };
    contacts.push(contact);
    dtos = contacts;
  }
</script>

<H2>Logins</H2>
<LayoutGrid style="padding-bottom: 3rem;">
  {#each dtos as dto}
    <Cell span={11}
      ><div transition:slide>
        <LayoutGrid style="padding-bottom: 3rem; border-radius:5px;" class="{dto.adminOnly?'admin-content':''}">
          <Cell span={12}>
            <LabelTextfieldToggle
              label="Link"
              bind:value={dto.link}
              {edit}
            />
          </Cell>
          <Cell span={6}>
            <LabelTextfieldToggle label="Username" bind:value={dto.username} {edit} />
          </Cell>
          <Cell span={6}>
            <LabelTextfieldToggle
              label="Passwort"
              bind:value={dto.password}
              {edit}
            />
          </Cell>
          {#if edit}
          <Cell span={12}>
            <StylizedCheckbox bind:value={dto.adminOnly} label="Admin-Login"/>
          </Cell>
          {/if}
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
