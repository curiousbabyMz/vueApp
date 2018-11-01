<template>
    <div class="container">
        <swiper :swiperOption="swiperOption" :swiperList='swiperList'></swiper>
        <films></films>
    </div>
</template>
<style>
/* #container {
  display: flex;
  flex-direction: column;
   flex: 1; 
} */
.iconfont {
  font-style: normal;
}
a,
a:active,
a:visited {
  text-decoration: none;
  color: black;
}
</style>

<script>
import swiper from "@/components/swiper";
import films from "@/components/films";
import { surl } from "@/base/util";
export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        }
      },
      swiperList: []
    };
  },
  mounted() {
    fetch(`${surl}in_theaters?count=5`)
      .then(r => {
        // console.log(r);
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
