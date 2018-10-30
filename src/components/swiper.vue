<template>
<div class="swipercontainer">
    <swiper class="swiper-box" :options='swiperOption'>
      <swiper-slide class="swiper-item" v-for="(v,i) in swiperList" :key="i" >
        <img :src="getImages(v.images.small)" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="title">热门精选</div>
</div>
</template>
<style>
.swiper-box,
.swiper-item {
  width: 100%;
  background: linear-gradient(#444, #222);
  /* padding-top: 8px; */
}
.swipercontainer {
  position: relative;
}
img {
  width: 12rem;
}
.title {
  position: absolute;
  bottom: 0;
  left: 0;
  background: rgba(214, 214, 214, 0.171);
  color: #efefef;
  width: 100%;
  font-size: 15px;
  text-indent: 1em;
  padding: 5px 0;
  text-align: left;
  z-index: 2;
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
