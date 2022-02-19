<script lang="ts">
    import { slide } from 'svelte/transition';
    import IconButton, { Icon } from '@smui/icon-button';
    export let value: boolean;
    export let label: string = "";
    export let labelStyle: string = "body1";
    export let disabled = false;
</script>
<div class="container">
    <div class="button">
        <IconButton toggle bind:pressed={value} {disabled}>
            <Icon class="material-icons">check_box_outline_blank</Icon>
            <Icon class="material-icons" on>check_box</Icon>
        </IconButton>
    </div>
    <div class="label {labelStyle}" on:click={() => value = !value}>{label}</div>
    {#if value}
        <div transition:slide|local style='grid-area: main;'>
            <slot class="content"/>
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
        padding: 50px;
    }
</style>