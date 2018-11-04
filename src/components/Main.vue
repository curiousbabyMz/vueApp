<template>
    <div class="container wrap">
        <router-view></router-view>
        <foot-nav></foot-nav>
    </div>
</template>
<style>
@import url('//at.alicdn.com/t/font_884344_g0z2wy2cbel.css');
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.wrap > div:nth-of-type(1) {
  flex: 1;
  overflow: auto;
}

</style>

<script>
import footNav from "@/components/foot-nav.vue";

export default {
  components: {
    footNav
  }
};
</script>