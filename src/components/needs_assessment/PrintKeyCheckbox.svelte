<script lang="ts">
  import l from '../../localisation';
  export let k: string;
  export let v: boolean;
  export let check: any = null;
  export let kc = 'key';
  export let vc = 'value';
  let result = false;
  $: result = check === undefined || check === null || ( typeof check == 'boolean' ? check === true : true );
</script>
{#if result}
<div class="{kc}">{k}</div><div class="{vc}">{v == true ? $l.yes: $l.no}</div>
{/if}