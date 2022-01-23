<script lang="ts">
    import { navigate } from "svelte-routing";
    import LayoutGrid, { Cell } from '@smui/layout-grid';
    import Textfield from '@smui/textfield';
    import Paper from '@smui/paper';
    import Fab, { Label, Icon } from '@smui/fab';
    import { EmployeeService, Employee } from "../gen";

    export let id: number|string;
    let employee: Employee;
    if(Number.isInteger(id)) {
        EmployeeService.get(id as number).then(data => employee = data);
    }

    function save() {
        if(id == 0) {
            alert(window.location.origin);
        } else {
            alert(window.location.origin);
        }
        navigate("/employees");
    }
</script>

<div class="form-container">
<Paper elevation={6}>
    <LayoutGrid style="padding-bottom: 3rem;">
        <Cell span={12}>
            <Textfield style="width: 100%;" bind:value={employee.name} label="Name"/>
        </Cell>
        <Cell span={12}>
            <Textfield style="width: 100%;" bind:value={employee.email} label="E-Mail"/>
        </Cell>
    </LayoutGrid>
    <div class="button-container">
        <Fab color="primary" on:click={() => save()} extended>
            <Icon class="material-icons">save</Icon>
            <Label>Save</Label>
        </Fab>
    </div>
    
</Paper>
</div>
<style>
    .form-container {
        max-width: 1000px;
        margin: auto;
    }

    .button-container {
        display: flex;
        justify-content: flex-end;
        margin: 1rem;
    }
</style>