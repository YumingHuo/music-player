<script setup lang="ts">

import { ref,defineProps } from 'vue'
const {icon,size,fill } = defineProps<{ 
    icon: any,
    size?: number | string,
    fill?: string | string[]
 }>()

</script>

<template>
  <component :is="icon" :size="size" :fill="fill"/>

</template>

<style scoped>

</style>
