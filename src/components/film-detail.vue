<template>
    <div class="container Fdetail-container">
      <div class="back" @click="b" ><span class="iconfont icon-leftopen"></span></div>
      <div class="head" :style="{background:`url(${getImages(data.images.large)}) center/cover`}">
        <div><img v-lazy="getImages(data.images.small)" alt=""/></div>
        <div class="filmTitle">
          <h3>{{data.title}}</h3>
          <h2>{{data.rating.average}}</h2>
          <h5>{{data.ratings_count}}人评价</h5>
        </div>
      </div>
      <div class="main">
        <div>导演：<span v-for="(v,i) in data.directors" :key="i">{{v.name}} </span></div>
        <div>类型：<span v-for="(v,i) in data.genres" :key="i">{{v}} </span></div>
        <div>年份：{{data.year}}</div>
        <div>地区：<span v-for="(v,i) in data.countries" :key="i">{{v}} </span></div>
        <h4>{{data.title}}的剧情介绍</h4>
        <p>
        {{data.summary}}
        </p>
      </div>
      <div class="add">
        <button @click="add">add moive</button>
      </div>
      <div id="toast" v-if="addSuccess">成功加入购物车</div>
    </div>
</template>
<style>
.Fdetail-container {
  /* display: flex; */
  /* flex-direction: column; */
  height: inherit;
  justify-content: center;
  position: relative;
  text-align: left;
}
.head {
  padding: 40px 20px 0;
  display: flex;
  color: #fff;
  position: relative;
}
.head::before {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    rgba(0, 0, 0, 0.644)
  );
}
.head img {
  width: 100px;
  transform: translateY(20px);
}
.head .title {
  padding: 10px;
  z-index: 1;
}
.main {
  flex-grow: 1;
  padding: 50px 20px 20px;
}
.add {
  margin: 5px 0;
  text-align: center;
}
.add > button {
  padding: 10px 20px;
  color: rgb(11, 96, 122);
  background: none;
  border: 1px solid rgb(11, 96, 122);
}
#toast {
  position: absolute;
  margin: auto;
  width: 100px;
  height: 1.5em;
  padding: 10px 20px;
  text-align: center;
  vertical-align: middle;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(204, 204, 204, 0.767);
  border-radius: 10px;
  animation: move 1.6s forwards;
}
h4 {
  color: #888;
}
p {
  text-indent: 2em;
}
@keyframes move {
  from {
    opacity: 1;
    transform: translateY(0);
  }

  to {
    opacity: 0;
    transform: translateY(-100%);
  }
}
/* .back {
  font-family: "iconfont";
  position: absolute;
  width: 30px;
  height: 30px;
  top: 20px;
  left: 20px;
  z-index: 1;
} */
a {
  text-decoration: none;
}
/* @font-face {
  font-family: "iconfont"; project id 884344 
  src: url("//at.alicdn.com/t/font_884344_8plbz9bm6hp.eot");
  src: url("//at.alicdn.com/t/font_884344_8plbz9bm6hp.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_884344_8plbz9bm6hp.woff") format("woff"),
    url("//at.alicdn.com/t/font_884344_8plbz9bm6hp.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_884344_8plbz9bm6hp.svg#iconfont") format("svg");
} */
</style>

<script>
import { getImages, surl } from "@/base/util";
export default {
  data() {
    return {
      addSuccess: null,
      data: {}
    };
  },
  activated() {
    fetch(`${surl}subject/${this.$route.params.id}`)
      .then(r => {
        return r.json();
      })
      .then(r => {
        console.log(r);
        this.data = r;
      })
      .catch(e => {
        console.log(e);
      });
  },
  methods: {
    add: function() {
      var idhas = this.$store.state.goodsList.find(i => {
        return i.id == this.$route.params.id;
      });
      if (!idhas) {
        var data = {
          url: getImages(this.data.images.small),
          title: this.data.title,
          price: Math.floor(Math.random() * 100),
          stock: "盒",
          number: 1,
          select: false,
          id: this.data.id
        };
        this.$store.commit("addGoods", data);
        this.addSuccess = true;
      } else {
        return alert("已加入购物车");
      }
    },
    b: function() {
      this.$router.go(-1);
    },
    getImages: getImages
  }
};
</script>

