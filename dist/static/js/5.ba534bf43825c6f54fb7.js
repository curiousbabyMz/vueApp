webpackJsonp([5],{RzwZ:function(t,a){},tGTu:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("HE8n"),i={data:function(){return{addSuccess:null,data:{}}},activated:function(){var t=this;fetch("/api/subject/"+this.$route.params.id).then(function(t){return t.json()}).then(function(a){console.log(a),t.data=a}).catch(function(t){console.log(t)})},methods:{add:function(){var t=this;if(this.$store.state.goodsList.find(function(a){return a.id==t.$route.params.id}))return alert("已加入购物车");var a={url:Object(s.a)(this.data.images.small),title:this.data.title,price:Math.floor(100*Math.random()),stock:"盒",number:1,select:!1,id:this.data.id};this.$store.commit("addGoods",a),this.addSuccess=!0},getImages:s.a}},n={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container Fdetail-container"},[e("div",{staticClass:"back"},[e("router-link",{attrs:{to:"/index"}},[e("span",{staticClass:"iconfont icon-leftopen"})])],1),t._v(" "),e("div",{staticClass:"head",style:{background:"url("+t.getImages(t.data.images.large)+") center/cover"}},[e("div",[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.getImages(t.data.images.small),expression:"getImages(data.images.small)"}],attrs:{alt:""}})]),t._v(" "),e("div",{staticClass:"title"},[e("h3",[t._v(t._s(t.data.title))]),t._v(" "),e("h2",[t._v(t._s(t.data.rating.average))]),t._v(" "),e("h5",[t._v(t._s(t.data.ratings_count)+"人评价")])])]),t._v(" "),e("div",{staticClass:"main"},[e("div",[t._v("导演："),t._l(t.data.directors,function(a,s){return e("span",{key:s},[t._v(t._s(a.name)+" ")])})],2),t._v(" "),e("div",[t._v("类型："),t._l(t.data.genres,function(a,s){return e("span",{key:s},[t._v(t._s(a)+" ")])})],2),t._v(" "),e("div",[t._v("年份："+t._s(t.data.year))]),t._v(" "),e("div",[t._v("地区："),t._l(t.data.countries,function(a,s){return e("span",{key:s},[t._v(t._s(a)+" ")])})],2),t._v(" "),e("h4",[t._v(t._s(t.data.title)+"的剧情介绍")]),t._v(" "),e("p",[t._v("\n    "+t._s(t.data.summary)+"\n    ")])]),t._v(" "),e("div",{staticClass:"add"},[e("button",{on:{click:t.add}},[t._v("add moive")])]),t._v(" "),t.addSuccess?e("div",{attrs:{id:"toast"}},[t._v("成功加入购物车")]):t._e()])},staticRenderFns:[]};var d=e("C7Lr")(i,n,!1,function(t){e("RzwZ")},null,null);a.default=d.exports}});
//# sourceMappingURL=5.ba534bf43825c6f54fb7.js.map