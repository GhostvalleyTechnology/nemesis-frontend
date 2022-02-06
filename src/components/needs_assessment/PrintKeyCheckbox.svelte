<script lang="ts">
  import l from '../../localisation';
  export let k: string;
  export let v: boolean;
  export let check: any = null;
  export let kc = 'key';
  export let vc = 'value';
  export let remarks = '';
  let result = false;
  let showRemarks = false;
  $: showRemarks = remarks !== undefined && remarks !== null;
  $: result = check === undefined || check === null || ( typeof check == 'boolean' ? check === true : true );
</script>

{#if result}
<div class="{kc}">{k}</div><div class="{vc}">{v == true ? $l.yes: $l.no}
  {#if showRemarks}
    <div class="remarks">{remarks}</div>
  {/if}
</div>
{/if}