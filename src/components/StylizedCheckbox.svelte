<script lang="ts">
    import IconButton, { Icon } from '@smui/icon-button';
    export let value: boolean;
    export let label: string = "";
</script>
<div class="container">
<IconButton toggle bind:pressed={value}>
    <Icon class="material-icons">check_box_outline_blank</Icon>
    <Icon class="material-icons" on>check_box</Icon>
</IconButton>
<div class="label">{label}</div>
</div>

<style lang="scss">
    @use '@material/typography/index' as typography;
    .label {
        @include typography.typography('body1');
    }
    .container {
        display: flex;
        align-items: center;
        column-gap: 5px;
    }
</style>