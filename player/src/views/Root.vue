<script setup lang="ts">
import { ref } from 'vue'


const msg = ref('首页')
</script>

<template>
  <h1>{{ msg }}</h1>
  <div class="box">
    <ul>
      <li>12123</li>
      <li>12123</li>
      <li>12123</li>
      <li>12123</li>
    </ul>
    <p>niahoahao</p>
  </div>

</template>

<style scoped lang="scss">

$orangeColor:#f60;
$greyColor:#f3f3f3; 
  .box {
    color: $orangeColor;
    ul li {
      background: $greyColor;
    }
    p {
      color: $orangeColor;
    }
  }
</style>
