<template>
    <div class="container vipContainer">
        <div class="vipHead">
            <div class="vipImg"><img src='../assets/logo.png' alt=""></div>
            <div class="vipInfo">
                <div class="name">name</div>
            </div>
            <div class="option">设置</div>
        </div>
        <div class="orders">
            <div class="nopay" @click="toggleChange">未付款<span :class="['iconfont','icon-angleright',{'arrowy':toggle.nopay}]"></span></div>
            <transition name="Toggle">
            <div class="list_nopay" v-if="toggle.nopay">
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
            </div>
            </transition>
            <div class="paid" @click="toggleChange">已付款<span :class="['iconfont','icon-angleright',{'arrowy':toggle.paid}]"></span></div>
            <transition name="Toggle">
            <div class="list_paid" v-if="toggle.paid">
                <div>8</div>
                <div>8</div>
                <div>8</div>
                <div>8</div>
                <div>8</div>
                <div>8</div>
                <div>8</div>
            </div>
            </transition>
            <div class="allOrders" @click="toggleChange">全部订单<span :class="['iconfont','icon-angleright',{'arrowy':toggle.allOrders}]"></span></div>
            <transition name="Toggle">
            <div class="list_allOrders" v-if="toggle.allOrders">
              <div class="orderItem"  v-for="(o,i) in ordersList" :key="i">
                <div class="orderNum">No.{{o.num}}</div>
                <div class="goodsList" v-for="(v,i) in o.goodsList" :key="i">
                  <div class="img"><img v-lazy="getImages(v.url)" alt=""></div>
                  <div class="title">{{v.title}}</div>
                  <div class="count">{{v.number+v.stock}}</div>
                  <div class="price">￥{{v.price}}</div>
                </div>
                <div class="sum">合计：￥{{o.sum}}</div>
                <!-- <div class="paid">{{o.paid}}</div> -->
              </div>
            </div>
            </transition>
        </div>
    </div>
</template>
<style>
.vipContainer {
  background: #efefef;
}
.vipHead {
  display: flex;
  padding: 10px 0;
  background: rgb(109, 179, 144);
  color: #fff;
  border-bottom: 1px solid rgb(7, 126, 53);
}
.vipHead .vipImg {
  width: 30%;
  height: 150px;
  margin: 20px;
  background: #efefef;
  display: flex;
  justify-content: center;
  align-items: center;
}
.vipImg img {
  width: 100%;
}
.vipHead .name {
  margin: 30px 20px;
  font-size: 25px;
  line-height: 2em;
  flex: 1;
}
.vipHead .option {
  position: absolute;
  right: 10px;
  top: 10px;
  padding: 10px;
}
.orders {
  flex: 1;
  overflow: auto;
}
.orderItem {
  padding: 10px;
  border: 1px solid #efefef;
  border-width: 1px 0;
}
.orderItem .orderNum {
  padding: 10px 0;
  text-align: left;
}
.orderItem .goodsList {
  display: flex;
  justify-content: space-between;
}
.orderItem .goodsList .img img {
  width: 4em;
}
.orderItem .goodsList .title,
.orderItem .goodsList .count,
.orderItem .goodsList .price {
  padding: 15px;
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
}
.orderItem .sum {
  padding: 10px 35px;
  text-align: right;
}

.nopay,
.paid,
.allOrders {
  display: flex;
  justify-content: space-between;
  text-indent: 2em;
  margin: 5px 0 0;
  padding: 10px 0;
  border: 1px solid #ddd;
  background: #fff;
}
[class*="list"] {
  margin: 0 1px;
  padding: 5px 0;
  background: #fff;
}
.Toggle-enter-active,
.Toggle-leave-active {
  transition: all 0.3s ease-out;
}
.Toggle-enter,
.Toggle-leave-to {
  transform-origin: 0 -20%;
  transform: rotateX(45deg);
  opacity: 0;
}
.arrowy {
  transform: rotate(90deg);
  transform-origin: 81% 45%;
}
</style>

<script>
import { getImages } from "@/base/util";
export default {
  data() {
    return {
      toggle: {
        nopay: false,
        paid: false,
        allOrders: false
      }
    };
  },
  computed: {
    ordersList() {
      return this.$store.state.ordersList;
    }
  },
  methods: {
    toggleChange(e) {
      console.log(this.ordersList);
      this.toggle[e.target.className] = !this.toggle[e.target.className];
    },
    getImages: getImages
  }
};
</script>
