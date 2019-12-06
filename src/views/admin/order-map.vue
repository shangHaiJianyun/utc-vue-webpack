<template>
  <div id="app">
    <el-button type="primary" :autofocus="true" @click="Todaylist">今日订单</el-button>
    <el-button type="primary" @click="tomorrowlist">明日订单</el-button>
    <div id="allmap" ref="allmap" :style="{height:heights}"></div>
    <router-view></router-view>
  </div>
</template>
 
<script>
import mapimg1 from "../../assets/images/r-map.png";
export default {
  name: "App",
  data() {
    return {
      Yesterday: "",
      Today: "",
      tomorrow: "",
      tomorrows: "",
      list: [],
      heights: document.documentElement.clientHeight - 101 + "px"
    };
  },
  mounted() {
    var _that = this;
    _that._data.Yesterday = this.GetDateStr(-1);
    _that._data.Today = this.GetDateStr(0);
    _that._data.tomorrow = this.GetDateStr(1);
    _that._data.tomorrows = this.GetDateStr(2);
    _that.Todaylist();
  },
  methods: {
    GetDateStr(AddDayCount) {
      var dd = new Date();
      dd.setDate(dd.getDate() + AddDayCount); //获取AddDayCount天后的日期
      var y = dd.getFullYear();
      var m = dd.getMonth() + 1; //获取当前月份的日期
      var d = dd.getDate();
      return y + "-" + m + "-" + d;
    },
    Todaylist() {
      var _that = this;
      _that._data.list = [];

      _that.$axios
        .post(_that.$api + "/api/dis/getorderlist", {
          start_service_date: _that._data.Yesterday,
          end_service_date: _that._data.tomorrow
        })
        .then(res => {
          res.data.forEach(function(element, index) {
            var obj = {};
            obj.lat = element.address_latitude;
            obj.lon = element.address_longitude;
            obj.text = element.address_detail;
            _that._data.list.push(obj);
          });
          _that.map();
        });
    },
    tomorrowlist() {
      var _that = this;
      _that._data.list = [];

      _that.$axios
        .post(_that.$api + "/api/dis/getorderlist", {
          start_service_date: _that._data.Today,
          end_service_date: _that._data.tomorrows,
          order_status: 2
        })
        .then(res => {
          res.data.forEach(function(element, index) {
            var obj = {};
            obj.lat = element.address_latitude;
            obj.lon = element.address_longitude;
            obj.text = element.address_detail;
            _that._data.list.push(obj);
          });
          _that.map();
        });
    },
    map() {
      var _that = this;
      var map = new BMap.Map("allmap"); // 百度地图API功能
      var point = new BMap.Point(121.487899486, 31.24916171); // 默认点
      map.centerAndZoom(point, 12);
      map.enableScrollWheelZoom(); //启用滚轮放大缩小，默认禁用
      map.enableContinuousZoom();
      for (var i = 0; i < _that._data.list.length; i++) {
        var points = new BMap.Point(
          _that._data.list[i].lon,
          _that._data.list[i].lat
        ); //创建坐标点

        markerFun(points, _that._data.list[i].text);
      }
      function markerFun(points, texts) {
        var icon = new BMap.Icon(mapimg1, new BMap.Size(100, 100), {
          anchor: new BMap.Size(100, 100)
        });
        var markers = new BMap.Marker(points, { icon: icon });
        var opts = {
          position: points, // 指定文本标注所在的地理位置
          offset: new BMap.Size(-150, -150) //设置文本偏移量
        };
        var label = new BMap.Label(texts, opts); // 创建文本标注对象
        label.setStyle({
          color: "red",
          fontSize: "14px",
          height: "20px",
          lineHeight: "20px",
          fontFamily: "微软雅黑"
        });
        map.addOverlay(label);
        map.addOverlay(markers);
      }
    }
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
}
#allmap {
  height: 500px;
  overflow: hidden;
}
</style>
 