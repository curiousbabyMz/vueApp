<template>
    <div class="foot-nav-containner">
        <div class="bottom-nav">
            <router-link :to='{name:"home"}' tag='li' class="bottom-nav__li bottom-nav__li--home iconfont icon-home" ></router-link>
            <router-link :to='{name:"search"}' tag='li' class="bottom-nav__li bottom-nav__li--search iconfont icon-search"></router-link>
            <router-link :to='{name:"car"}' tag='li' class="bottom-nav__li bottom-nav__li--car iconfont icon-basket"><span class="redP" v-if="number>0">{{number}}</span></router-link>
            <router-link :to='{name:"vip"}' tag='li' class="bottom-nav__li bottom-nav__li--vip iconfont icon-user"></router-link>
        </div>
    </div>
</template>
<style>
@import url("//at.alicdn.com/t/font_884344_k7mmcuuxcd.css");
.bottom-nav {
  display: flex;
  padding: 10px 0;
  margin: 0;
  box-shadow: 0 0 3px 1px #ddd;
}
.bottom-nav__li {
  flex-grow: 1;
  list-style: none;
  /* border: 1px solid #ddd;
  border-width: 0 1px; */
  font-size: 20px;
}
.redP {
  background: #f00;
  border-radius: 50%;
  font-size: 5px;
  padding: 1px 4px;
  color: #fff;
}
/* .icon {
  font-family: "iconfont";
} */
/* @font-face {
  font-family: "iconfont"; /* project id 884344 */
/* src: url("//at.alicdn.com/t/font_884344_8plbz9bm6hp.eot");
  src: url("//at.alicdn.com/t/font_884344_8plbz9bm6hp.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_884344_8plbz9bm6hp.woff") format("woff"),
    url("//at.alicdn.com/t/font_884344_8plbz9bm6hp.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_884344_8plbz9bm6hp.svg#iconfont") format("svg");
} */
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

