<template>
    <div class="film">
        <h3 class="film_type">
            <span>{{p.type}}</span>
            <router-link :to='{path:"/classify/"+p.url}'><span class="more"><em>更多</em></span></router-link>
        </h3>
        <div class="film_list" :ref="p.el" :data-request='p.url'>
            <div id="containner">
            <ul class="clearfix" id='scroller'>
                <router-link tag='li' v-for="(v) in array" :key="v.id" :to='{path:"/film-detail/"+v.id}'>
                    <div class="film_list_img"><img v-lazy="v.images.small" alt=""></div>
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
    </div>
</template>
<style>
#containner {
  overflow: hidden;
}
.clearfix {
  display: flex;
  flex-shrink: 0;
}
</style>

<script>
import getStyle from "@/base/util";
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
    }
  }
};
</script>
