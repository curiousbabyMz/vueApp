<template>
    <swiper class="swiper-box">
      <swiper-slide class="swiper-item" v-for="(v,i) in swiperList" :key="i">{{v}}</swiper-slide>
      <div class="swiper-pagination" slot="swiperOption.pagination"></div>
    </swiper>
</template>
<style>
.swiper-box,
.swiper-item {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
.swiper-box {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.swiper-item {
  height: 5rem;
}
</style>

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
