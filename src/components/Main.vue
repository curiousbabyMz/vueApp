<template>
    <div>
        <router-view>Main</router-view>
        <foot-nav></foot-nav>
    </div>
</template>

<script>
import footNav from "@/components/foot-nav.vue";

export default {
  components: {
    footNav
  }
};
</script>