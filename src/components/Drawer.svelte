<div use:links>
  <Router>
    <Drawer variant="dismissible" bind:open>
      <Header>
        <Title>Domí</Title>
        <Subtitle>Domí organises, manages and informs!</Subtitle>
      </Header>
      <Content>
        <List>
          <Item href="/" on:click={() => setActive('Home')} activated={active === 'Home'}>
            <Text>Home</Text>
          </Item>
          <Item href="clients" on:click={() => setActive('Clients')} activated={active === 'Clients'}>
            <Text>Clients</Text>
          </Item>
        </List>
      </Content>
    </Drawer>
  
    <AppContent>
      <Route path="clients" component="{Clients}"/>
    </AppContent>
  </Router>
</div>
  
  <script lang="ts">
      import Clients from "../routes/Clients.svelte";
    import { Router, links, Route } from "svelte-routing";
    import Drawer, {
      AppContent,
      Content,
      Header,
      Title,
      Subtitle,
    } from '@smui/drawer';
    import List, { Item, Text } from '@smui/list';
  
    let open = true;
    let active = 'Home';
  
    function setActive(value: string) {
      active = value;
    }
  </script>