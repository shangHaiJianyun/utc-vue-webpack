<template>
  <div id="app">
    <div id="allmap" ref="allmap" :style="{height:heights}"></div>
    <router-view></router-view>
  </div>
</template>
 
<script>
import mapimg1 from "../../assets/images/y-map.png";
import mapimg2 from "../../assets/images/r-map.png";
import mapimg3 from "../../assets/images/v-map.png";
import mapimg4 from "../../assets/images/b-map.png";
import mapimg5 from "../../assets/images/g-map.png";
export default {
  name: "App",
  data() {
    return {
      heights: document.documentElement.clientHeight + "px",
      mapimg: [mapimg1, mapimg2, mapimg3, mapimg4, mapimg5]
    };
  },
  methods: {
    map() {
      var _that = this;
      let sendmap = {
        loc: [
          [121.5444, 31.133756],
          [121.5174, 31.159264],
          [121.5158, 31.127223],
          [121.5534, 31.128088],
          [121.5168, 31.126905],
          [121.5445, 31.119619],
          [121.5194, 31.152233],
          [121.5186, 31.132619],
          [121.5585, 31.138564],
          [121.5666, 31.15448],
          [121.55, 31.117452],
          [121.5534, 31.135111],
          [121.5374, 31.15685],
          [121.5333, 31.123844],
          [121.5204, 31.133615],
          [121.5158, 31.114979],
          [121.5199, 31.122665],
          [121.5406, 31.123645],
          [121.5365, 31.133494],
          [121.5443, 31.150115]
        ]
      };
      _that.$axios
        .post("http://dev.upctech.com.cn/api/map/cluster_address", sendmap)
        .then(res => {
          for (let ind in res.data) {
            for (let x in res.data[ind]) {
              var sendarr = res.data[ind][x];
              map.panTo(sendarr[0].lng, sendarr[0].lng); //将地图的中心点更改为给定的点
              for (var s = 0; s < sendarr.length; s++) {
                var points = new BMap.Point(sendarr[s].lng, sendarr[s].lat); //创建坐标点
                markerFun(points, _that.mapimg[x]);
              }
            }
          }
        })
        .catch(err => {
          console.log(err);
        });

      var map = new BMap.Map("allmap"); // 百度地图API功能
      var point = new BMap.Point(120.382029, 30.312903); // 默认点
      map.centerAndZoom(point, 18);

      map.enableScrollWheelZoom(); //启用滚轮放大缩小，默认禁用
      map.enableContinuousZoom();
      function markerFun(points, mapimg) {
        var icon = new BMap.Icon(mapimg, new BMap.Size(100, 100), {
          anchor: new BMap.Size(100, 100)
        });
        var mkr = new BMap.Marker(points, { icon: icon }); // 创建标注
        map.addOverlay(mkr); //方法addOverlay() 向地图中添加覆盖物
      }
    }
  },
  mounted() {
    this.map();
  }
};
</script>
 
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#allmap {
  height: 500px;
  overflow: hidden;
}
</style>
 