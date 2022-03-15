<script lang="ts">
  import { slide } from "svelte/transition";
  import LayoutGrid, { Cell } from "@smui/layout-grid";
  import Button, { Label, Icon } from "@smui/button";
  import { PartnerIntermediaryNumberDto } from "../../gen";
  import H2 from "../H2.svelte";
  import LabelTextfieldToggle from "../LabelTextfieldToggle.svelte";
  export let dtos: PartnerIntermediaryNumberDto[];
  export let edit = false;

  function remove(dto: PartnerIntermediaryNumberDto) {
    let temp = dtos;
    dtos = temp.filter((item) => item !== dto);
  }

  function add() {
    let temps = dtos;
    let temp: PartnerIntermediaryNumberDto = {
      description: "",
      number: ""
    };
    temps.push(temp);
    dtos = temps;
  }
</script>

<H2>Vermittlernummern</H2>
<LayoutGrid style="padding-bottom: 3rem;">
  {#each dtos as dto}
    <Cell span={11}
      ><div transition:slide>
        <LayoutGrid style="padding-bottom: 3rem; border-radius:5px;">
          <Cell span={6}>
            <LabelTextfieldToggle label="Bezeichnung" bind:value={dto.description} {edit} />
          </Cell>
          <Cell span={6}>
            <LabelTextfieldToggle
              label="Nummer"
              bind:value={dto.number}
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
        <Label>Vermittlernummer hinzufügen</Label>
      </Button>
    </Cell>
  {/if}
</LayoutGrid>
