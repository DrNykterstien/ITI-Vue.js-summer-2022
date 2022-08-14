<template>
  <div class="container">
    <HeaderComponent />
    <div class="row">
      <ListComponent />
      <TableComponent />
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import ListComponent from './components/ListComponent.vue'
import TableComponent from './components/TableComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
    ListComponent,
    TableComponent
  }
}
</script>

<style>
</style>
