<template>
    <div id="container">
        <swiper :swiperOption="swiperOption" :swiperList='swiperList'></swiper>
    </div>
</template>
<script>
import swiper from "@/components/swiper";
export default {
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        direction: "horizontal"
      },
      swiperList: [1, 23, 4, 45, 8]
    };
  },
  components: {
    swiper
  }
};
</script>
