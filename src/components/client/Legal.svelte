<script lang="ts">
    import {
        ClientDto,
        ProofOfIdentityDto,
        ProofOfIdentityService,
        ProofOfIdentityType,
    } from "../../gen";
    export let client: ClientDto;
    export let edit: boolean;

    import LayoutGrid, { Cell } from "@smui/layout-grid";
    import ProofOfIdentity from "./ProofOfIdentity.svelte";
    import LabelTextfieldToggle from "../LabelTextfieldToggle.svelte";

    let hasDriversLicence = false;
    let hasIdentityCard = false;
    let hasPassport = false;
    let driversLicence: ProofOfIdentityDto = {
        type: ProofOfIdentityType.DRIVERS_LICENCE
    };
    let identityCard: ProofOfIdentityDto = {
        type: ProofOfIdentityType.PASSPORT
    };
    let passport: ProofOfIdentityDto = {
        type: ProofOfIdentityType.IDENTITY_CARD
    };
    $: hasDriversLicence = driversLicence.id !== undefined && driversLicence.id !== null && driversLicence.id > 0
    $: hasIdentityCard = identityCard.id !== undefined && identityCard.id !== null && identityCard.id > 0
    $: hasPassport = passport.id !== undefined && passport.id !== null && passport.id > 0
    for (let item of client.proofOfIdentities) {
        switch (item.type) {
            case ProofOfIdentityType.DRIVERS_LICENCE:
                driversLicence = item;
                hasDriversLicence = true;
                break;
            case ProofOfIdentityType.IDENTITY_CARD:
                identityCard = item;
                hasIdentityCard = true;
                break;
            case ProofOfIdentityType.PASSPORT:
                passport = item;
                hasPassport = true;
                break;
        }
    }

    function getProof(check: boolean, item: ProofOfIdentityDto) {
        if(!check) {
            return;
        }
        ProofOfIdentityService.get(item.id).then(response => window.open(response));
    }
</script>
<LayoutGrid style="padding-bottom: 3rem;">
    <Cell span={6}>
        <LabelTextfieldToggle bind:value={client.bank} label="Bank" {edit}/>
    </Cell>
    <Cell span={6}>
        <LabelTextfieldToggle bind:value={client.bic} label="BIC" {edit}/>
    </Cell>
    <Cell span={12}>
        <LabelTextfieldToggle bind:value={client.iban} label="IBAN" {edit}/>
    </Cell>
</LayoutGrid>

<div class="container">
        <div class="thumbnail {hasDriversLicence ? 'available' : 'unavailable'}">
            <img src="/drivers.png" alt="Führerschein" on:click={() => getProof(hasDriversLicence, driversLicence)}/>
            <div class="label" on:click={() => getProof(hasDriversLicence, driversLicence)}>Führerschein</div>
            <ProofOfIdentity clientId={client.id} bind:item={driversLicence} {edit}/>
        </div>

        <div class="thumbnail {hasPassport ? 'available' : 'unavailable'}">
            <img src="/passport.png" alt="Reisepass" on:click={() => getProof(hasPassport, passport)}/>
            <div class="label" on:click={() => getProof(hasPassport, passport)}>Reisepass</div>
            <ProofOfIdentity clientId={client.id} bind:item={passport} {edit}/>
        </div>

        <div class="thumbnail {hasIdentityCard ? 'available' : 'unavailable'}">
            <img src="/perso.png" alt="Personalausweis" on:click={() => getProof(hasIdentityCard, identityCard)}/>
            <div class="label" on:click={() => getProof(hasIdentityCard, identityCard)}>Personalausweis</div>
            <ProofOfIdentity clientId={client.id} bind:item={identityCard} {edit}/>
        </div>
</div>

<style lang="scss">
    .container {
        display: flex;
        justify-content: space-evenly;
    }
    .thumbnail {
        text-align: center;
    }
    .available {
        cursor: pointer;
    }
    img {
        max-width: 80px;
        max-height: 53px;
    }
    .unavailable img {
        opacity: 0.2;
    }
</style>