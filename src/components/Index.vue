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
      swiperList: []
    };
  },
  mounted() {
    fetch("/api/in_theaters")
      .then(r => {
        return r.json();
      })
      .then(r => {
        console.log(r);
        this.swiperList = r.subjects;
      })
      .catch(e => {
        console.log(e);
      });
  },
  components: {
    swiper,
    films
  }
};
</script>
