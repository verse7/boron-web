<template>
<div class="d-flex justify-center align-center flex-column">
  <h1>Order Title</h1>
  <div class="orders-container">
    <SubOrder v-for="i in [1,2,3]" :key="i"/>
    <div class="d-flex justify-between p-4">
      <div class="name">Gabrielle Higgins</div>
      <div class="order-desc">Medium Oven Jerk Chicken w/ Rice and Peas and Steam Veg</div>
      <div class="cost">$450</div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SubOrder from '@/components/SubOrder.vue';

export default {
  name: 'order',
  components: {
    SubOrder
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.orders-container {
  width: 600px;
  min-height: 100px;
  height: auto;
  border: 1px solid pink;
  border-radius: 16px;
}


</style>
