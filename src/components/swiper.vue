<template>
    <swiper class="swiper-box">
      <swiper-slide class="swiper-item" v-for="(v,i) in swiperList" :key="i" ><img :src="getImages(v.images.small)" alt=""></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>
<style>
.swiper-box,
.swiper-item {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
</style>

<script>
import "project\vueApp\node_modules\vue-awesome-swiper\node_modulesswiperdistcssswiper.css";
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
  data() {
    return {};
  },
  methods: {
    getImages: getImages
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>
