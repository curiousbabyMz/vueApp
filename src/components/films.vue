<template>
    <div>
        <film :p='filmType.topFilmData'></film>
    </div>
</template>
<script>
import film from "@/components/film";
export default {
  data() {
    return {
      filmType: {
        topFilmData: {
          el: "scroll-top250",
          url: "top250",
          type: "top250"
        }
      }
    };
  },
  components: {
    film
  }
  //   mounted() {
  //     fetch("/api/v2/movie/top250?start=0&count=25")
  //       .then(r => {
  //         return r.json();
  //       })
  //       .then(r => {
  //         this.filmList = r.subjects;
  //         console.log(r);
  //       })
  //       .catch(e => {
  //         console.log(e);
  //       });
  //   }
};
</script>

