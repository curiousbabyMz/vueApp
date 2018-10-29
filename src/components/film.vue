<template>
    <div class="film">
        <h3 class="film_type">
            <span>{{p.type}}</span>
            <router-link :to='{path:"/classify/"+p.url}'><span class="more iconfont ">更多<span class="icon-angleright"></span></span></router-link>
        </h3>
        <div class="film_list"  :ref="p.el" :data-request='p.url'>
              <ul class="clearfix">
                  <router-link tag='li' v-for="(v) in array" :key="v.id" :to='{path:"/film-detail/"+v.id}'>
                      <div class="film_list_img"><img v-lazy="getImages(v.images.small)" alt=""></div>
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
<style>
.film_type {
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
}
.film_list {
  overflow: hidden;
}

.clearfix {
  list-style: none;
  display: flex;
  width: 100%;
}
.clearfix > li {
  margin: 5px;
}
</style>

<script>
import { getStyle, getImages } from "@/base/util";
import BScroll from "better-scroll";
export default {
  props: {
    p: {
      el: null,
      url: null,
      type: null
    }
  },
  data() {
    return {
      scroller: null,
      array: []
    };
  },
  mounted() {
    const el = this.$refs[this.p.el];
    this.scroller = this.initScroll(el);
    const { request } = el.dataset;

    fetch(`/api/${request}?start=${Math.floor(Math.random() * 10)}`)
      .then(r => {
        return r.json();
      })
      .then(r => {
        console.log(r);
        this.array = r.subjects;
        this.$nextTick(() => {
          this.freshWidth(el.children[0]);
          this.scroller.refresh();
        });
      })
      .catch(e => {
        console.log(e);
      });
  },
  methods: {
    initScroll(el) {
      return new BScroll(el, {
        click: true,
        probeType: 3,
        scrollX: true,
        scrollY: false
      });
    },
    freshWidth(el) {
      var width = getStyle(el.children[0], "width");
      var padding = getStyle(el.children[0], "padding-right");
      el.style.width = el.children.length * (width + padding + 2) + "px";
      console.log(el.style.width);
    },
    getImages: getImages
  }
};
</script>
