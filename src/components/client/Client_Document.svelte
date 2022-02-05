<script lang="ts">
    import LayoutGrid, { Cell } from '@smui/layout-grid';
    import FormField from '@smui/form-field';
    import Checkbox from '@smui/checkbox';
    import Textfield from '@smui/textfield';
    import type { Document } from '../classes/Document';

    export let document: Document;
</script>

    <LayoutGrid style="padding-bottom: 3rem;">
        <Cell span={6}>
            <Textfield style="width: 100%;" bind:value={document.name} label="Name"/>
        </Cell>
        <Cell span={6}>
            <Textfield style="width: 100%;" bind:value={document.date} label="Date" type="date" disabled/>
        </Cell>
        <Cell span={6}>
            <Textfield style="width: 100%;" bind:value={document.contractor} label="Contractor"/>
        </Cell>
        <Cell span={3}>
            <Textfield style="width: 100%;" bind:value={document.type} label="Type"/>
        </Cell>
        <Cell span={3}>
            <FormField>
                <Checkbox bind:checked={document.signed} />
                <span slot="label">Signed</span>
            </FormField>
        </Cell>
    </LayoutGrid>


