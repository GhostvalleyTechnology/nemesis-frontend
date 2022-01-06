<script lang="ts">
    import LayoutGrid, { Cell } from '@smui/layout-grid';
    import Textfield from '@smui/textfield';
    import Radio from '@smui/radio';
    import FormField from '@smui/form-field';
    import { Client } from '../classes/Client';
    import PieChart from '../components/PieChart.svelte';

    let percent = 0;
    let client = new Client();
</script>
<div class="form-container">
<h1>Needs Assessment</h1>
<input type="number" min="0" max="100" bind:value={percent}>
<PieChart size={200} {percent} />
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
    <Cell span={5}>
        <div class="gender-container">
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
    <Cell span={3}>
        <Textfield style="width: 100%;" bind:value={client.birthday} label="Birthday" type="date"/>
    </Cell>
    <Cell span={4}>
        <Textfield style="width: 100%;" bind:value={client.birthdayPlace} label="Birth Place"/>
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
</div>

<style lang="scss">
    @use '@material/typography/index' as typography;
    h1 {
        @include typography.typography('headline3');
        text-align: center;
    }
    .form-container {
        max-width: 1000px;
        margin: auto;
    }
    .gender-container {
        display: flex;
        justify-content: space-evenly;
    }
</style>