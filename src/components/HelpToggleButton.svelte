<script lang="ts">
    import IconButton, { Icon } from '@smui/icon-button';
    export let value: boolean;
</script>

<IconButton toggle bind:pressed={value}>
    <Icon class="material-icons">help_outline</Icon>
    <Icon class="material-icons" on>help</Icon>
</IconButton>