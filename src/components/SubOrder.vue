<template>
<div class="d-flex grid justify-between p-4">
  <div class="name">Zidane Wright</div>
  <div class="order-desc">Medium Oven Jerk Chicken w/ Rice and Peas and Steam Veg</div>
  <div class="cost">$450</div>
</div>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SubOrder extends Vue {}
</script>

<style lang="scss" scoped>

.grid {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-column-gap: 10px;
  justify-items: center;
}
</style>