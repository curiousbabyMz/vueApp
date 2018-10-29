<template>
    <swiper class="swiper-box" :options='swiperOption'>
      <swiper-slide class="swiper-item" v-for="(v,i) in swiperList" :key="i" >
        <img :src="getImages(v.images.small)" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>
<style>
.swiper-box,
.swiper-item {
  width: 100%;
  background: linear-gradient(#444, #222);
  /* padding-top: 8px; */
}
img {
  width: 12rem;
}
</style>

<script>
import "swiper/dist/css/swiper.css";

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
  // mounted() {
  //   console.log(this.swiperOption);
  // },
  // components: {
  //   swiper
  // }
};
</script>
