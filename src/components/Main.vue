<template>
    <div class="container">
        <router-view></router-view>
        <foot-nav></foot-nav>
    </div>
</template>
<style>
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
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