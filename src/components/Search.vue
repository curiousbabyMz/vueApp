<template>
    <div class="container">
        <div class="head">
            <div class="search-i iconfont icon-search"></div><input type="text" v-model="keyword" placeholder="请输入你要找的关键字"/><div class="search-clear iconfont icon-cancel" @click="clear"></div>
        </div>
        <div class="main" ref="list">
          <div>
            <div class="loading">loading</div>
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
    </div>
</template>
<style>
.head {
  flex: 0;
  width: 100%;
  line-height: 30px;
  padding: 15px 0;
  background: rgb(29, 151, 39);
  position: relative;
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
  display: inline-block;
  position: absolute;
  left: 1.5em;
}
.head .search-clear {
  display: inline-block;
  position: absolute;
  right: 2em;
}
.main {
  overflow: auto;
}
.main > div {
  position: relative;
}
.loading {
  position: absolute;
  margin: auto;
  top: -40px;
  left: 0;
  right: 0;
  height: 40px;
  line-height: 40px;
  animation: load 1s infinite alternate ease-in;
}
@keyframes load {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
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
import BScroll from "better-scroll";
export default {
  data() {
    return {
      keyword: "钢铁侠" || null,
      list: []
    };
  },
  mounted() {
    this.search();
    this.scroller = new BScroll(this.$refs.list, {
      scrollX: false,
      scrollY: true,
      click: true,
      pullDownRefresh: {
        treshold: 80
      },
      pullUpLoad: {
        treshold: -80
      }
    });
    this.scroller.on("pullingDown", () => {
      this.search("down");
    });
    this.scroller.on("pullingUp", () => {
      this.search("up");
    });
  },
  watch: {
    keyword() {
      this.search();
    }
  },
  methods: {
    search: function(type = "") {
      this.list = [];
      fetch(`/api/search?tag=${this.keyword}&count=10`)
        .then(r => {
          return r.json();
        })
        .then(r => {
          console.log(r);
          this.list = r.subjects;
          this.$nextTick(() => {
            this.scroller.refresh();
            if (type == "down") {
              this.scroller.finishPullDown();
              this.scroller.scrollTo(0, 0, 1000);
            }
            if (type == "up") {
              this.scroller.finishPullUp();
            }
          });
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

