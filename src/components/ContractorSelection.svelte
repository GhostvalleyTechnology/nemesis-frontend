<script lang="ts">
    import l from '../localisation';
    import Autocomplete from '@smui-extra/autocomplete';
    import { Partner, PartnerService } from '../gen'

    export let partner: Partner;
    export let style = '';
    let partnerList: Partner[] = []
    let value = '';
    let options: string[] = [];

    PartnerService.list().then(result => {
        console.log(JSON.stringify(result))
        partnerList = result;
        partnerList.unshift({name: ''});
        if(partner && partner.id) {
            value = partnerList.find(item => item.id = partner.id).name;
        }
        options = partnerList.map(item => item.name);
    })
    $: if(value) {
        let maybeFound = partnerList.find(item => value == item.name);
        if(maybeFound) {
            partner = maybeFound;
        }
    }
</script>
<Autocomplete bind:value={value} bind:options={options} {style} label={$l.payment.contractor} textfield$style={style}/>