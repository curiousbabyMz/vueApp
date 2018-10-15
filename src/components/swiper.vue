<template>
    <swiper class="swiper-box">
    <swiper-slide class="swiper-item" v-for="(v,i) in swiperList" :key="i">{{v}}</swiper-slide>
    <div class="swiper-pagination" slot="swiperOption.pagination"></div>
    </swiper>
</template>

<script>
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
  }
};
</script>
