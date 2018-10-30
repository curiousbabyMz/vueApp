<template>
    <div class="container">
        <div class="head">
            <span class="search-i iconfont icon-search"></span><input type="text" v-model="keyword" @input="search" placeholder="请输入你要找的关键字"/><span class="search-clear iconfont icon-cancel" @click="clear"></span>
        </div>
        <div class="main">
            <div class="detail" v-for="(v,i) in list" :key="i">
                <div class="search-img"><img v-lazy='getImages(v.images.small)' alt=""></div>
                <div class="info">
                    <h1>{{v.title}} <span>{{v.year}} {{v.subtype}}</span></h1>
                    <div>导演：<span v-for="(d,i) in v.directors" :key="i">{{d.name}} </span></div>
                    <div>主演：<span v-for="(d,i) in v.casts" :key="i">{{d.name}} </span></div>
                    <div>类型：<span v-for="(d,i) in v.genres" :key="i">{{d}} </span></div>

                </div>
            </div>
        </div>
    </div>
</template>
<style>
.head {
  flex: 0;
  width: 100%;
  line-height: 30px;
  padding: 15px 0;
  background: rgb(29, 151, 39);
}
.head input {
  width: 90%;
  line-height: inherit;
  outline: none;
  border: none;
  border-radius: 5px;
  text-indent: 2.5em;
}
.head .search-i {
  position: relative;
  left: 1.5em;
}
.head .search-clear {
  position: relative;
  right: 2em;
}
.main {
  overflow: auto;
}
.detail {
  display: flex;
  border-bottom: 1px solid #ddd;
  align-items: center;
  padding: 10px;
}
.info {
  padding: 5px;
  align-self: flex-start;
  text-align: left;
  font-size: 10px;
}
.info h1 span {
  font-size: 5px;
}
img {
  width: 8em;
}
</style>

<script>
import { getImages } from "@/base/util.js";
export default {
  data() {
    return {
      keyword: "钢铁侠" || null,
      list: []
    };
  },
  mounted() {
    this.search();
  },
  methods: {
    search: function() {
      fetch(`/api/search?tag=${this.keyword}&count=10`)
        .then(r => {
          return r.json();
        })
        .then(r => {
          console.log(r);
          this.list = r.subjects;
        })
        .catch(e => {
          console.log(e);
        });
    },
    clear: function() {
      this.keyword = null;
    },
    getImages: getImages
  }
};
</script>

