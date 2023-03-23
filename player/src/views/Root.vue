<script setup lang="ts">
import Menu from '@/components/layout/menu/index.vue'
import Footer from '@/components/layout/footer/index.vue'
import { ref } from 'vue'


</script>

<template>
  <div class="module">
    <div class="module-left">
      <Menu />
    </div>
    <div class="module-main"> 
      <router-view />
      <div>
        <Footer />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$orangeColor: #f60;
$greyColor: #f3f3f3;

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
