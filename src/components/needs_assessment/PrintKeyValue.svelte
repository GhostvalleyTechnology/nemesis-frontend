<script lang="ts">
  export let k: string;
  export let v: string;
  export let check: any = v;
  export let kc = '';
  export let vc = '';
  function is():boolean {
    let result = check !== undefined && check !== null
    if(result && typeof check == 'boolean') {
      return check === true;
    }
  }
</script>
{#if is()}
<div class="{kc}">{k}</div><div class="{vc}">{v}</div>
{/if}