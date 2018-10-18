<template>
    <div id="container">
        <swiper :swiperOption="swiperOption" :swiperList='swiperList'></swiper>
        <films></films>
    </div>
</template>
<script>
import swiper from "@/components/swiper";
import films from "@/components/films";
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
    swiper,
    films
  }
};
</script>
