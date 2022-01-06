<script lang="ts">
    import type { Client } from '../classes/Client';
    export let client: Client;

    import LayoutGrid, { Cell } from '@smui/layout-grid';
    import Textfield from '@smui/textfield';
</script>

<LayoutGrid style="padding-bottom: 3rem;">
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