import {defineStore} from 'pinia'
import {ref,reactive} from 'vue'
import {IBanner} from '@/modules/banner'
import { useBanner } from '@/utils/api'

export const useBannerStore = defineStore('banner',()=>{
    const banners = ref<IBanner[]>([]);
    
    const getBanners = async ()=>{
        if(banners.length) return;
        banners = await useBanner
    }
    return {
        banners,
        getBanners
    }
})
