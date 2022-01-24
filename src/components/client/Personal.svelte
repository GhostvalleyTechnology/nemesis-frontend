<script lang="ts">
    import { slide } from 'svelte/transition';
    import LayoutGrid, { Cell } from '@smui/layout-grid';
    import Textfield from '@smui/textfield';
    import Radio from '@smui/radio';
    import FormField from '@smui/form-field';
    import Checkbox from '@smui/checkbox';
    import Button, { Label, Icon } from '@smui/button';
    import { Client, MaritalStatus } from '../../gen';
    import GenericPerson from './GenericPerson.svelte';

    export let client: Client;
</script>

<LayoutGrid style="padding-bottom: 3rem;">
    <Cell span={6}>
        <Textfield style="width: 100%;" bind:value={client.firstName} label="First Name"/>
    </Cell>
    <Cell span={6}>
        <Textfield style="width: 100%;" bind:value={client.lastName} label="Last Name"/>
    </Cell>
    <Cell span={12}>
        <Textfield style="width: 100%;" bind:value={client.email} label="E-Mail"/>
    </Cell>
    <Cell span={6}>
        <div class="radio-container">
            <FormField>
                <Radio bind:group={client.gender} value="m" touch />
                <span slot="label">male</span>
            </FormField>
            <FormField>
                <Radio bind:group={client.gender} value="f" touch />
                <span slot="label">female</span>
            </FormField>
            <FormField>
                <Radio bind:group={client.gender} value="x" touch />
                <span slot="label">divers</span>
            </FormField>
        </div>
    </Cell>
    <Cell span={6}>
        <Textfield style="width: 100%;" bind:value={client.birthday} label="Birthday" type="date"/>
    </Cell>
    <Cell span={6}>
        <Textfield style="width: 100%;" bind:value={client.nationality} label="Nationality"/>
    </Cell>
    <Cell span={6}>
        <Textfield style="width: 100%;" bind:value={client.birthPlace} label="Birth Place"/>
    </Cell>
    <Cell span={6}>
        <Textfield style="width: 100%;" bind:value={client.occupation} label="Occupation"/>
    </Cell>
    <Cell span={6}>
        <Textfield style="width: 100%;" bind:value={client.socialInsuranceInstitution} label="Social Insurance Institution"/>
    </Cell>
    <Cell span={6}>
        <Textfield style="width: 100%;" bind:value={client.title} label="Title"/>
    </Cell>
    <Cell span={6}>
        <Textfield style="width: 100%;" bind:value={client.academicDegree} label="Degree"/>
    </Cell>
    <Cell span={12} align="middle">
        <FormField>
            <Checkbox bind:checked={client.militaryServiceDone} touch />
            <span slot="label">Military / Social Service Done?</span>
        </FormField>
    </Cell>
    <Cell span={12} align="middle">
        <FormField>
            <Checkbox bind:checked={client.smoker} touch />
            <span slot="label">Smoker?</span>
        </FormField>
    </Cell>
    <Cell span={3} align="middle">
        <FormField>
            <Checkbox bind:checked={client.pets} touch />
            <span slot="label">Pets?</span>
        </FormField>
    </Cell>
    {#if client.pets}
    <Cell span={9}><div transition:slide|local>
        <Textfield style="width: 100%;" bind:value={client.petsRemarks} label="Remarks about your pets"/></div>
    </Cell>
    {/if}
    <Cell span={12}>
        <div class="radio-container">
            <FormField>
                <Radio bind:group={client.maritalStatus} value="single" touch />
                <span slot="label">single</span>
            </FormField>
            <FormField>
                <Radio bind:group={client.maritalStatus} value="married" touch />
                <span slot="label">married</span>
            </FormField>
            <FormField>
                <Radio bind:group={client.maritalStatus} value="divorced" touch />
                <span slot="label">divorced</span>
            </FormField>
        </div>
    </Cell>
    {#if client.maritalStatus == MaritalStatus.MARRIED}
    <Cell span={12}><div transition:slide>
        <GenericPerson person={client.partner}/></div>
    </Cell>
    {/if}

    {#each client.children as child}
    <Cell span={1} align="middle"><div transition:slide>
        <Button color="secondary" on:click={() => removeChild(child)}>
            <Icon class="material-icons">remove_circle_outline</Icon>
        </Button>
    </div></Cell>
    <Cell span={11}><div transition:slide>
        <GenericPerson person={child}/>
    </div></Cell>
    {/each}
    <Cell span={12}>
        <Button color="secondary" on:click={() => addChild()}>
            <Icon class="material-icons">add_circle_outline</Icon>
            <Label>Add child</Label>
        </Button>
    </Cell>
</LayoutGrid>

<LayoutGrid style="padding-bottom: 3rem;">
    <Cell span={12}>
        <Textfield style="width: 100%;" bind:value={client.address} label="Address"/>
    </Cell>
    <Cell span={4}>
        <Textfield style="width: 100%;" bind:value={client.country.displayName} label="Country"/>
    </Cell>
    <Cell span={4}>
        <Textfield style="width: 100%;" bind:value={client.zipCode} label="Zip Code"/>
    </Cell>
    <Cell span={4}>
        <Textfield style="width: 100%;" bind:value={client.city} label="City"/>
    </Cell>
    <Cell span={6}>
        <Textfield style="width: 100%;" bind:value={client.phone} label="Phone"/>
    </Cell>
    <Cell span={6}>
        <Textfield style="width: 100%;" bind:value={client.mobile} label="Mobile"/>
    </Cell>
</LayoutGrid>

<style lang="scss">
    @use '@material/typography/index' as typography;
    h1 {
        @include typography.typography('headline3');
        text-align: center;
    }
    h2 {
        @include typography.typography('headline4');
    }
    .form-container {
        max-width: 1000px;
        margin: auto;
    }
    .radio-container {
        display: flex;
        justify-content: space-evenly;
    }
</style>