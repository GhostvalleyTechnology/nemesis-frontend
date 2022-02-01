<script lang="ts">
    import { slide } from 'svelte/transition';
    import IconButton, { Icon } from '@smui/icon-button';
    let open: boolean = false;
    export let label: string = "";
    export let labelStyle: string = "body1";
</script>
<div class="container">
    <div class="button">
        <IconButton toggle bind:pressed={open}>
            <Icon class="material-icons" on>expand_less</Icon>
            <Icon class="material-icons">expand_more</Icon>
        </IconButton>
    </div>
    <div class="label {labelStyle}" on:click={() => open = !open}>{label}</div>
    {#if open}
        <div class="content" transition:slide|local>
            <slot/>
        </div>
    {/if}
</div>

<style lang="scss">
    .label {
        grid-area: h-right;
        align-self: center;
        justify-self: start;
    }
    .container {
        display: grid;
        width: 100%;
        grid-template-columns: auto 1fr;
        column-gap: 10px;
        grid-template-areas: 
            "h-left h-right"
            "main main";
    }
    .button {
        grid-area: h-left;
        align-self: center;
    }
    .content {
        grid-area: main;
        padding: 50px;
    }
</style>