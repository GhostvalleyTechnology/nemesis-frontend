<script lang="ts">
    import { admin } from '../stores';
    let inAdminMode = false;
    admin.subscribe(value => {inAdminMode = value;});
</script>

{#if inAdminMode}
    <slot/>
{/if}