<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'
import { useBannerStore } from '@/store/banner'; //状态管理 pinia
import { ref,onMounted } from 'vue';
import { storeToRefs } from "pinia";

const { banners } = storeToRefs(useBannerStore());
const { getBanners } = useBannerStore();

onMounted(async()=> //挂载完成 getBanner 
{
    console.log(banners);
    await getBanners();
})

</script>

<template>
    <Swiper slide-prev-class="auto" :grab-cursor="true">
        <SwiperSlide v-for="item in banners" :key="item.targetId">
            <img :src="item.pic" class="banner-image" />
        </SwiperSlide>
    </Swiper>
</template>

<style scoped></style>