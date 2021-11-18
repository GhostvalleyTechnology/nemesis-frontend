<script lang="ts">
    import LayoutGrid, { Cell } from '@smui/layout-grid';
    import Textfield from '@smui/textfield';
    import Radio from '@smui/radio';
    import FormField from '@smui/form-field';
    import type { Client } from '../classes/Client';

    export let client: Client;
    let gender = ""; 
</script>

    <LayoutGrid>
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
            <div class="gender-container">
                <FormField>
                    <Radio bind:group={gender} value="M" touch />
                    <span slot="label">male</span>
                </FormField>
                <FormField>
                    <Radio bind:group={gender} value="W" touch />
                    <span slot="label">female</span>
                </FormField>
                <FormField>
                    <Radio bind:group={gender} value="X" touch />
                    <span slot="label">any</span>
                </FormField>
            </div>
        </Cell>
        <Cell span={6}>
            <Textfield style="width: 100%;" bind:value={client.birthday} label="Birthday" type="datetime-local"/>
        </Cell>
        <Cell span={6}>
            <Textfield style="width: 100%;" bind:value={client.occupation} label="Occupation"/>
        </Cell>
        <Cell span={3}>
            <Textfield style="width: 100%;" bind:value={client.title} label="Title"/>
        </Cell>
        <Cell span={3}>
            <Textfield style="width: 100%;" bind:value={client.academicDegree} label="Degree"/>
        </Cell>

        <div class="spacer"/>
        
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

        <div class="spacer"/>

        <Cell span={6}>
            <Textfield style="width: 100%;" bind:value={client.bank} label="Bank"/>
        </Cell>
        <Cell span={6}>
            <Textfield style="width: 100%;" bind:value={client.bic} label="BIC"/>
        </Cell>
        <Cell span={12}>
            <Textfield style="width: 100%;" bind:value={client.iban} label="IBAN"/>
        </Cell>
    </LayoutGrid>

<style>
    .gender-container {
        display: flex;
        justify-content: space-evenly;
    }
    .spacer {
        height: 2rem;
        grid-column-end: span 12;
    }
</style>