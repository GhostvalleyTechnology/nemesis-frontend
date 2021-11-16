<script lang="ts">
    import Textfield from '@smui/textfield';
    import Icon from '@smui/textfield/icon';
    import { Client } from '../classes/Client';
    export let id:number;
    $: client = Client.byId(id); 
</script>

<h1>allo! {client.id} {client.firstName}</h1>

<!--
        client.id = id;
        client.gender = Gender.m;
        client.firstName = "Kevin";
        client.lastName = "Schmid";
        client.title = "Ing.";
        client.academicDegree = "BSc.";
        client.occupation = "Software Engineer";
        client.email = "schmid.kevin.manuel@gmail.com";
        client.phone = "03149/2164";
        client.mobile = "0043 660 41 77 516";
        client.country = Country.AT;
        client.zipCode = "8010";
        client.city = "Graz";
        client.address = "Monsbergergasse 5/10";
-->

<Textfield bind:value={client.firstName} label="First Name"/>
<Textfield bind:value={client.lastName} label="Last Name"/>