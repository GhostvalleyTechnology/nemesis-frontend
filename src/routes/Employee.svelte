<script lang="ts">
    import { navigate } from "svelte-routing";
    import LayoutGrid, { Cell } from '@smui/layout-grid';
    import Textfield from '@smui/textfield';
    import Checkbox from '@smui/checkbox';
    import FormField from '@smui/form-field';
    import Paper from '@smui/paper';
    import Fab, { Label, Icon } from '@smui/fab';
    import { EmployeeService, Employee } from "../gen";

    export let id: string;
    let employee: Employee = {name: "", email: "", admin: false};
    if(isNumeric(id)) {
        EmployeeService.get(+id).then(data => employee = data);
    }

    function save() {
        if(isNumeric(id)) {
            EmployeeService.update(employee).then(() => navigate("/employees"));
        } else {
            EmployeeService.add(employee).then(() => navigate("/employees"));
        }
    }

    function isNumeric(value: string) {
        return /^\d+$/.test(value);
    }
</script>
<div class="form-container">
<Paper elevation={6}>
    <h1>Employee</h1>
    <LayoutGrid style="padding-bottom: 3rem;">
        <Cell span={12}>
            <Textfield style="width: 100%;" bind:value={employee.name} label="Name"/>
        </Cell>
        <Cell span={12}>
            <Textfield style="width: 100%;" bind:value={employee.email} label="E-Mail"/>
        </Cell>
        <Cell span={12} align="middle">
            <FormField>
                <Checkbox bind:checked={employee.admin} touch />
                <span slot="label">Admin</span>
            </FormField>
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

    .button-container {
        display: flex;
        justify-content: flex-end;
        margin: 1rem;
    }
</style>