<template>
    <div class="foot-nav-containner">
        <ul class="bottom-nav">
            <router-link :to='{name:"home"}' tag='li' class="bottom-nav__li bottom-nav__li--home" >home</router-link>
            <router-link :to='{name:"search"}' tag='li' class="bottom-nav__li bottom-nav__li--search">search</router-link>
            <router-link :to='{name:"car"}' tag='li' class="bottom-nav__li bottom-nav__li--car"><span class="icon">&#xe622;</span><span class="redP" v-if="number>0">{{number}}</span></router-link>
            <router-link :to='{name:"vip"}' tag='li' class="bottom-nav__li bottom-nav__li--vip">vip</router-link>
        </ul>
    </div>
</template>
<style>
.redP {
  background: #f00;
  border-radius: 50%;
  padding: 1px 4px;
  color: #fff;
}
.icon {
  font-family: "iconfont";
}
@font-face {
  font-family: "iconfont"; /* project id 884344 */
  src: url("//at.alicdn.com/t/font_884344_8plbz9bm6hp.eot");
  src: url("//at.alicdn.com/t/font_884344_8plbz9bm6hp.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_884344_8plbz9bm6hp.woff") format("woff"),
    url("//at.alicdn.com/t/font_884344_8plbz9bm6hp.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_884344_8plbz9bm6hp.svg#iconfont") format("svg");
}
</style>

<script>
export default {
  computed: {
    number() {
      return this.$store.getters.goodsNumber;
    }
  }
};
</script>

