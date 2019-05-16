<template>
  <div class="amap-wrapper">
    <el-amap class="amap-box" vid="map" :zoom="zoom" :center="center"></el-amap>
  </div>
</template>
<script>
import vueamap from "vue-amap";
export default {
  data() {
    return {
      zoom: 16,
      center: [121.406051, 31.179695]
    };
  },
  created() {
    vueamap.initAMapApiLoader({
      key: "ef6b6dd7425cd776af1d4b4b4926472f",
      plugin: [
        "AMap.Autocomplete", //输入提示插件
        "AMap.PlaceSearch", //POI搜索插件
        "AMap.Scale", //右下角缩略图插件 比例尺
        "AMap.OverView", //地图鹰眼插件
        "AMap.ToolBar", //地图工具条
        "AMap.MapType", //类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
        "AMap.PolyEditor", //编辑 折线多，边形
        "AMap.CircleEditor", //圆形编辑器插件
        "AMap.Geolocation" //定位控件，用来获取和展示用户主机所在的经纬度位置
      ],
      uiVersion: "1.0"
    });
  },
  mounted() {}
};
</script>
<style scoped>
.amap-wrapper {
  height: 500px;
}
</style>
