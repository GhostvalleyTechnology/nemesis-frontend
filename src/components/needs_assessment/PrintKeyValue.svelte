<script lang="ts">
  export let k: string;
  export let v: string;
  export let check: any = v;
  export let kc = 'key';
  export let vc = 'value';
  let result = false;
  $: check = (check !== undefined && check !== null) ? check : v;
  $: result = check !== undefined && check !== null && ( typeof check == 'boolean' ? check === true : true );
</script>
{#if result}
<div class="{kc}">{k}</div><div class="{vc}">{v}</div>
{/if}