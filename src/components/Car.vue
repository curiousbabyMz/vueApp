<template>
  <div class="container">
    <div v-for="(v,i) in goodsList" :key="i" class="item">
      <div class="film-pic"><img :src="v.url" alt=""></div>
      <div class="film-name">{{v.title}}</div>
      <div class="film-count">{{v.number+v.stock}}</div>
      <div class="film-price">￥{{v.price*v.number}}</div>
      <div class="film-edit">
        <span class="icon" @click="change(v.id,1)">&#xe756;</span>
        <span class="icon" @click="change(v.id,-1)">&#xe72c;</span>
        <span class="icon" @click="clear(v.id)">&#xe7cc;</span>
      </div>
    </div>
  </div>
</template>
<style>
.container {
  background: #eee;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
}
.item {
  background: #fff;
  padding: 10px;
  margin: 10px 0;
  display: flex;
  align-items: center;
}
.item div {
  margin: 5px;
  flex-grow: 1;
}
.film-pic img {
  width: 50px;
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
import { mapMutations } from "vuex";
export default {
  computed: {
    goodsList() {
      return this.$store.state.goodsList;
    }
  },
  mounted() {
    console.log(this.goodsList);
  },
  methods: {
    ...mapMutations({
      del: "deleteGoods",
      update: "updateGoods"
    }),
    findPosition(id) {
      return this.goodsList.findIndex(item => {
        return item.id == id;
      });
    },
    clear(id) {
      var i = this.findPosition(id);
      this.del(i);
    },
    toggleSelect(id) {
      var i = this.findPosition(id);
      this.update({
        index: i,
        key: "select",
        value: !this.goodsList[i].select
      });
    },
    change(id, val) {
      let i = this.findPosition(id);
      let n = this.goodsList[i].number;
      this.update({
        index: i,
        key: "number",
        value: n + val <= 0 ? 1 : n + val
      });
    }
  }
};
</script>
