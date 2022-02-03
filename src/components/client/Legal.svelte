<script lang="ts">
    import {
        ClientDto,
        ProofOfIdentityDto,
        ProofOfIdentityService,
        ProofOfIdentityType,
    } from "../../gen";
    export let client: ClientDto;
    export let edit: boolean;

    import { open } from "../OpenFile";
    import LayoutGrid, { Cell } from "@smui/layout-grid";
    import Textfield from "@smui/textfield";
    import ProofOfIdentity from "./ProofOfIdentity.svelte";

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
        ProofOfIdentityService.get(item.id).then(response => {
            open(response)
        });
    }
</script>

<LayoutGrid style="padding-bottom: 3rem;">
    <Cell span={6}>
        <Textfield style="width: 100%;" bind:value={client.bank} label="Bank" />
    </Cell>
    <Cell span={6}>
        <Textfield style="width: 100%;" bind:value={client.bic} label="BIC" />
    </Cell>
    <Cell span={12}>
        <Textfield style="width: 100%;" bind:value={client.iban} label="IBAN" />
    </Cell>
</LayoutGrid>

<div class="container">
        <div class="thumbnail {hasDriversLicence ? 'available' : 'unavailable'}">
            <img src="/drivers.png" alt="Führerschein" on:click={() => getProof(hasDriversLicence, driversLicence)}/>
            <div class="label">Führerschein</div>
            <ProofOfIdentity clientId={client.id} bind:item={driversLicence} {edit}/>
        </div>

        <div class="thumbnail {hasPassport ? 'available' : 'unavailable'}">
            <img src="/passport.png" alt="Reisepass" on:click={() => getProof(hasPassport, passport)}/>
            <div class="label">Reisepass</div>
            <ProofOfIdentity clientId={client.id} bind:item={passport} {edit}/>
        </div>

        <div class="thumbnail {hasIdentityCard ? 'available' : 'unavailable'}">
            <img src="/perso.png" alt="Personalausweis" on:click={() => getProof(hasIdentityCard, identityCard)}/>
            <div class="label">Personalausweis</div>
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
    img {
        max-width: 80px;
        max-height: 53px;
    }
    .unavailable img {
        opacity: 0.2;
    }
</style>