<template>
    <swiper class="swiper-box" :options='swiperOption'>
      <swiper-slide v-for="(v,i) in swiperList" :key="i" ><img :src="getImages(v.images.small)" alt=""></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>
<style>
.swiper-box {
  display: flex;
}
img {
  width: 12rem;
}
</style>

<script>
import { getImages } from "@/base/util";
export default {
  props: {
    swiperOption: {
      type: Object
    },
    swiperList: {
      type: Array,
      default: []
    }
  },
  methods: {
    getImages: getImages
  }
};
</script>
