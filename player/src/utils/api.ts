import { Target } from "@icon-park/vue-next";
import http from "./http";
import { IBanner } from "@/modules/banner";

{
    banners:{
        pic:''
        TargetId:1
    }
    code:200
}


export async function useBanner() {
  const banners = await http.get<{banners:IBanner[]}>('/banner',{type:1});
  return banners;
}