<template>
  <div class="container car-container">
    <div class="back"><router-link :to='"/index"'><span class="iconfont icon-leftopen"></span></router-link></div>
    <div class="items">
      <div v-for="(v,i) in goodsList" :key="i" class="item">
        <div class="film-pic"><img :src="v.url" alt=""></div>
        <div class="film-name">{{v.title}}</div>
        <div class="film-count">{{v.number+v.stock}}</div>
        <div class="film-price">￥{{v.price}}</div>
        <div class="film-edit">
          <span class="iconfont icon-plus" @click="change(v.id,1)"></span>
          <span class="iconfont icon-minus" @click="change(v.id,-1)"></span>
          <span class="iconfont icon-trashempty" @click="clear(v.id)"></span>
        </div>
      </div>
    </div>
    <div class="foot"><span class="sum">￥{{sum}}</span><button @click="pay">支 付</button></div>
    <transition name="toastT">
    <div class="toast" v-if="toast">
      <p>是否支付？</p>
      <div><button @click="submit(true)">是</button><button @click="submit(true)">否</button></div>
    </div>
    </transition>
  </div>
</template>
<style>
.car-container {
  background: linear-gradient(bottom, #dfdfdf, #efefef);
  /* display: flex; */
  /* flex-direction: column; */
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
  flex: 1;
}
.film-pic img {
  width: 50px;
}
.foot {
  height: 50px;
  padding-left: 50px;
  display: flex;
  justify-content: space-between;
  background: #efefef;
  border-top: #dfdfdf;
}
.foot .sum {
  font-size: 22px;
  color: #6ac421;
  text-shadow: 0, 0, 1px #1b3308;
  align-self: center;
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
.toast {
  position: absolute;
  margin: auto;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 70%;
  height: 25%;
  background: rgba(56, 221, 166, 0.904);
  color: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  overflow: hidden;
}
.toast p {
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.toast div {
  display: flex;
  flex: 1;
}
.toast button {
  flex: 1;
  border: none;
  background: #efefef;
  font-size: 1rem;
}
.toastT-enter-active,.toastT-leave-active{
  transition: transform .3s ease-out;
}
.toastT-enter,.toastT-leave-to{
  transform: scale(0,0)
}
</style>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      toast: false
    };
  },
  computed: {
    goodsList() {
      return this.$store.state.goodsList;
    },
    sum() {
      let sum = 0;
      this.$store.state.goodsList.map(i => {
        sum += i.price * i.number;
      });
      return sum;
    }
  },
  mounted() {
    console.log(this.goodsList);
  },
  methods: {
    ...mapMutations({
      del: "deleteGoods",
      update: "updateGoods",
      addOrder: "addOrder"
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
      if (n + val == 0) {
        this.del(i);
        return;
      }
      this.update({
        index: i,
        key: "number",
        value: n + val <= 0 ? 1 : n + val
      });
    },
    pay() {
      this.toast = true;
    },
    submit(p) {
      this.toast=false;
      console.log(`pay $${this.sum}`);
      let order = {
        goodsList: this.goodsList,
        sum: this.sum,
        paid: p
      };
      this.addOrder(order);
    }
  }
};
</script>
