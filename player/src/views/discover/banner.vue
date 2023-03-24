<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'


</script>

<template>
    <Swiper slide-prev-class="auto" :grab-cursor="true">
        <SwiperSlide>
            slide - 1
        </SwiperSlide>
        <SwiperSlide>
            slide - 2
        </SwiperSlide>
        <SwiperSlide>
            slide - 3
        </SwiperSlide>
        <SwiperSlide>
            slide - 4
        </SwiperSlide>
        <SwiperSlide>
            slide - 5
        </SwiperSlide>
    </Swiper>
</template>

<style scoped></style>