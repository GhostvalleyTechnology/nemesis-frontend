<script lang="ts">
  import l from '../../localisation';
  export let k: string;
  export let v: boolean;
  export let check: any = v;
  export let kc = '';
  export let vc = '';
</script>
{#if check !== undefined && check !== null}
<div class="{kc}">{k}</div><div class="{vc}">{v == true ? $l.yes: $l.no}</div>
{/if}