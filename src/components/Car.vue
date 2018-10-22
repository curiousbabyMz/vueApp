<template>
  <div>
    <div v-for="(v,i) in goodsList" :key="i">{{v}}</div>
  </div>
</template>
<script>
export default {
  computed: {
    goodsList() {
      return this.$store.state.goodsList;
    }
  }
};
</script>
