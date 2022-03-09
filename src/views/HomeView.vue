<template>
  <div class="home">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
    <TableComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import TableComponent from '@/components/TableComponent.vue'

export default {
  name: 'HomeView',
  components: {
    TableComponent
  }
}
</script>


