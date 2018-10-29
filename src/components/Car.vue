<template>
  <div class="car-container">
    <div class="back"><router-link to='/index'><span class="iconfont icon-leftopen"></span></router-link></div>
    <div class="items">
      <div v-for="(v,i) in goodsList" :key="i" class="item">
        <div class="film-pic"><img :src="v.url" alt=""></div>
        <div class="film-name">{{v.title}}</div>
        <div class="film-count">{{v.number+v.stock}}</div>
        <div class="film-price">￥{{v.price*v.number}}</div>
        <div class="film-edit">
          <span class="iconfont icon-plus" @click="change(v.id,1)"></span>
          <span class="iconfont icon-minus" @click="change(v.id,-1)"></span>
          <span class="iconfont icon-trashempty" @click="clear(v.id)"></span>
        </div>
      </div>
    </div>
    <div class="foot"><button @click="console.log('pay')">支 付</button></div>
  </div>
</template>
<style>
.car-container {
  background: linear-gradient(bottom, #dfdfdf, #efefef);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: inherit;
}
.items {
  flex-grow: 1;
  margin: 50px 0;
}
.item {
  background: #fff;
  padding: 0 10px;
  margin: 5px 0;
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
.foot {
  height: 50px;
  display: flex;
  justify-content: flex-end;
  background: #efefef;
  border-top: #dfdfdf;
}
.foot button {
  padding: 0 50px;
  border: none;
  background: rgb(26, 206, 95);
  /* color: rgb(19, 126, 60); */
  color: #fff;
  font-size: 18px;
  font-weight: bold;
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
