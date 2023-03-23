<script setup lang="ts">
import { ref } from 'vue'
import { useMenu } from './useMenu'

const { menus } = useMenu();

</script>

<template>
  <div class="module-menu" v-for="(item, i) in menus" :key="i">
    <div class="title"> {{ item.name }} </div>
    <div class="menus" v-for="menu in item.menus" :key="menu.key">
      <router-link :to="{name:menu.key}"> {{ menu.name }}</router-link>
      <!-- <a> {{ menu.name }}</a> -->
    </div>
  </div>
</template>

<style scoped>

</style>
