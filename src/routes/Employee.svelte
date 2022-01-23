<script lang="ts">
    import { navigate } from "svelte-routing";
    import Paper from '@smui/paper';
    import Fab, { Label, Icon } from '@smui/fab';
    import Tab, { Icon as TabIcon, Label as TabLabel } from '@smui/tab';
    import TabBar from '@smui/tab-bar';

    import { Employee } from '../classes/Employee';
    export let id:number;
    $: employee = Employee.byId(id);

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