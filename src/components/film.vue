<template>
    <div class="film">
        <h3 class="film_type">
            <span>{{type}}</span>
            <router-link :to='{path:"/classify/"+url}'><span class="more"><em>更多</em></span></router-link>
        </h3>
        <div class="film_list" :ref="el" :data-request='url'>
            <ul class="clearfix">
                <router-link tag='li' v-for="(v) in array" :key="v.id" :to='{path:"/film-detail/"+v.id}'>
                    <div class="film_list_img"></div>
                        <div class="film__list__detail">
                        <h4 class="film__list__title">{{v.title}}</h4>
                        <p class="film__list__rank">评分：{{v.rating.average}}</p>
                        <p class="film__list__rank">
                            <span :class="{rankColor:v.rating.average>((i-0.5)*2)}" class="iconfont icon-rank" v-for="i in 5" :key="i"></span>
                        </p>
                    </div>
                </router-link>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  mounted: function() {
    fetch("/api/v2/movie/top250?start=0&count=25")
      .then(r => {
        return r.json();
      })
      .then(r => {
        console.log(r);
      })
      .catch(e => {
        console.log(e);
      });
  }
};
</script>
