<template>
  <div>
    <h1>洗车预约单</h1>
    <el-form label-width="80px" :ref="mapsd" :model="mapsd"  v-show="flag" class="from">
      <el-form-item label="基准价格">
        <el-input v-model="mapsd.base_rate"></el-input>
      </el-form-item>
      <el-form-item label="车型系数">
        <el-input v-model="mapsd.car_rate"></el-input>
      </el-form-item>
      <el-form-item label="频次系数">
        <el-input v-model="mapsd.frequency_rate"></el-input>
      </el-form-item>
      <el-form-item label="地址系数">
        <el-input v-model="mapsd.address_rate"></el-input>
      </el-form-item>

      <el-form-item label="节日系数">
        <el-input v-model="mapsd.holiday_rate"></el-input>
      </el-form-item>
      <el-form-item label="派单系数">
        <el-input v-model="mapsd.order_rate"></el-input>
      </el-form-item>
      <el-form-item label="总价格">
        <el-input v-model="mapsd.money"></el-input>
      </el-form-item>
      <el-form-item label="技师价格">
        <el-input v-model="mapsd.true_money"></el-input>
      </el-form-item>




      <el-form-item>
        <el-button type="primary" @click="fromtext">关闭</el-button>
      </el-form-item>
    </el-form>
    <div class="orders">
      <h3>待派单</h3>
      <!-- <p>{{toDispatch}}</p> -->

      <ul class="wrk-list">
        <li
          v-for="(j,index) in toDispatch"
          :key="j"
        >
          <div class="view">
            <button class="destroy" @click="moveDist(index)">{{j}} -</button>
          </div>
        </li>
      </ul>
      <h3>选择技师</h3>
      <div >
        <el-select v-model="worker_id" placeholder="请选择" @change="getValue" :disabled="disabled">
          <el-option
            v-for="wk in workers"
            :key="wk.uid"
            :label="wk.nick_name"
            :value="wk.uid" class="select">
          </el-option>
        </el-select>
      </div>
      <button class="btn" @click="postParmas">提交</button>
    </div>


    <div class="grids">
      <!--<kendo-datasource-->
        <!--ref="datasource1"-->
        <!--:transport-read-url="'http://dev.upctech.com.cn/api/dis/getorderlist'"-->
        <!--:page-size='20'-->
        <!--:server-paging="false"-->
      <!--&gt;-->
      <!--</kendo-datasource>-->
      <kendo-grid
        ref="grid"
        :data-source="datasource1"
        :sortable-mode="'multiple'"
        :sortable-allow-unsort="true"
        :sortable-show-indexes="true"
        :pageable-button-count="5"
        :server-filtering="true"
        :pageable='true'
        :filterable-mode="'row'"
      >

        <kendo-grid-column
          :field="'order_no'"
          :width="220"
        ></kendo-grid-column>
        <kendo-grid-column
          :field="'order_id'",
          :title = "'系统订单编号'"
          :width="120"
        ></kendo-grid-column>
        <kendo-grid-column
          :field="'nick_name'"
          :title="'用户昵称'"
          :width="220"
        ></kendo-grid-column>
        <kendo-grid-column
          :field="'create_time'"
          :title="'下单时间'"
          :width="220"
        ></kendo-grid-column>
       
        <kendo-grid-column
          :field="'item_title'"
          :title="'服务项目'"
          :width="120"
          :filterable-cell-operator="'contains'"
          :filterable-cell-suggestion-operator="'contains'"
        >
          </kendo-grid-column>
        <kendo-grid-column
          :field="'address_detail'"
          :title="'地址'"
          :width="250"
        ></kendo-grid-column>
        <kendo-grid-column
          :field="'order_status'"
          :title="'订单状态'"
          :width="120"
          :format="'{0:c}'"
        ></kendo-grid-column>
        <kendo-grid-column
          :field="'service_date'"
          :title="'服务时间'"
          :width="120"
          :format="'{0:c}'"
        ></kendo-grid-column>
        <kendo-grid-column
          :field="'start_time'"
          :title="'预约开始'"
          :width="120"
        ></kendo-grid-column>
        <kendo-grid-column
          :field="'end_time'"
          :title="'预约截止'"
          :width="120"
        ></kendo-grid-column>
        <kendo-grid-column
          :command="{ text: '选择', click: showDetails }"
          :title="'&nbsp;'"
          :width="100"
        ></kendo-grid-column>
        <kendo-grid-column
          :command="{ text: '详情', click: show}"
          :title="'&nbsp;'"
          :width="100"
        ></kendo-grid-column>
      </kendo-grid>
    </div>

  </div>
</template>


<script>
// import http from '../api/http'
import axios from "axios";
// Vue.prototype.$http = axios;
import { DropdownsInstaller } from "@progress/kendo-ui";
import time from "../api/time"

export default {
  name: "client_orders",
  data() {
    return {
      orders: [],
      toDispatch: [],
      workers: [],
      worker_id:"",
      orders_id:'',
      orders_time:'',
      starttime:'',
      endtime:"",
      order_list:{},
      worker :{},
      disabled:true,
      datasource1:"",
      mapsd:{
        car_rate:"",
        frequency_rate:"",
        address_rate:"",
        holiday_rate:"",
        order_rate:0.98,
        money:"",
        base_rate:1,
        true_money:""
      },
      flag:false
    };
  },
  created() {
    let date = new Date()
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var newTime=date.getFullYear() + '-' + m + '-' +d
    console.log('当前时间',newTime)
    let wrk_url = "http://dev.upctech.com.cn/api/dis/getworklist";
    let params = {}
    params.city = "上海市"
    params.date = newTime
    axios.post(wrk_url,params).then(res => {
      console.log(res);
      this.workers = res.data;
    });
    this.GetOrders()
  },
  methods: {
    // parameterMap: function(options, operation) {
    //   if (operation !== "read" && options.models) {
    //     return { models: kendo.stringify(options.models) };
    //   }
    // },
    showDetails: function(e) {
      e.preventDefault();
      var grid = this.$refs.grid.kendoWidget();
      var dataItem = grid.dataItem(e.currentTarget.closest("tr"));
      //获取数据
      this.orders_id =dataItem.order_id


      //获取预约开始时间前一个小时
      this.starttime = dataItem.service_date + ' ' + dataItem.start_time
      this.endtime = dataItem.service_date + " " +  dataItem.end_time
      // starttime = starttime.replace(new RegExp("-","gm"),"/");
      // var starttimeHaoMiao = (new Date(starttime)).getTime();
      // starttimeHaoMiao = starttimeHaoMiao - 60*60*1000
      // console.log("hao",starttimeHaoMiao)
      //
      // var date = new Date(starttimeHaoMiao);
      //
      // var m = date.getMonth() + 1;
      // m = m < 10 ? ('0' + m) : m;
      // var d = date.getDate();
      // d = d < 10 ? ('0' + d) : d;
      // var h = date.getHours();
      // h = h < 10 ? ('0' + h) : h;
      // var minute = date.getMinutes();
      // var second = date.getSeconds();
      // minute = minute < 10 ? ('0' + minute) : minute;
      // second = second < 10 ? ('0' + second) : second;
      //
      // var newTime=date.getFullYear() + '-' + m + '-' +d+ ' ' + h + ':' + minute + ':' + second;
      // console.log(newTime)
      // this.orders_time = newTime
      // console.log(this.orders_time)


      //判断订单状态
       if(dataItem.order_status == 1){

          // this.orders_id.push(dataItem.order_id)
          // console.log(dataItem.order_no);

         let params = {}
          params.order_ids =this.orders_id
          params.order_status = 2
          console.log("系统ID",params)
         this.$axios.post("/dis/updateOrderStatus",params).then(res=>{
           this.toDispatch.push(dataItem.order_no);
           console.log(res)
           //派单数据
           let orders = {}
           orders.order_id = this.orders_id
           orders.start_time = this.starttime
           orders.end_time = this.endtime
           this.orders.push(orders)
            this.disabled = false


         })
       }else if(dataItem.order_status == 2){
         this.toDispatch.push(dataItem.order_no);
         this.disabled = false
         // this.orders_id.push(dataItem.order_id)
         let orders = {}
         orders.order_id = this.orders_id
         orders.start_time = this.starttime
         orders.end_time = this.endtime
         this.orders.push(orders)
       }else{
         this.$message({
          showClose: true,
          message: '此单不能派发！'
        });
       }
    },
    GetOrders() {
      let that = this
      let start_s = new Date()
      let start_date = start_s.getTime()
      let start = new Date(start_s - 86400000)
      let end_date = start_date + 172800000
      let end = new Date(end_date)
      var end_m = end.getMonth() + 1;
      end_m = end_m < 10 ? ('0' + end_m) : end_m;
      var end_d = end.getDate();
      end_d = end_d < 10 ? ('0' + end_d) : end_d;
      var end_time=end.getFullYear() + '-' + end_m + '-' +end_d

      console.log("end_time",end_time)
      var m = start.getMonth() + 1;
      m = m < 10 ? ('0' + m) : m;
      var d = start.getDate();
      d = d < 10 ? ('0' + d) : d;
      var start_time=start.getFullYear() + '-' + m + '-' +d
      console.log("shijian",start)
      console.log("时间...",start_time)
      let  url = "http://dev.upctech.com.cn/api/dis/getorderlist"
      let  postparams = {}
      postparams.order_status = 2
      postparams.start_service_date = start_time
      postparams.end_service_date = end_time
      console.log("数据",postparams)
      this.$axios.post(url,postparams).then(res => {
        console.log("状态码为2",res.data);
        that.datasource1  = res.data
      });
    },
    moveDist(j){
      if(j == 0){
        // this.orders_id.shift()
        this.toDispatch.shift()
        this.disabled = true
      }else{
        // this.orders_id.splice(j,1)
        this.toDispatch.splice(j,1)
      }

    },
    getValue(){
      this.order_list.data = []
      console.log("...",this.worker_id)
      this.worker.worker_id = parseInt(this.worker_id)
      this.worker.orders =this.orders
      this.order_list.data.push(this.worker)

    },
    //获取派单数据
    show(e){
      let that = this
      e.preventDefault();
      var grid = this.$refs.grid.kendoWidget();
      var dataItem = grid.dataItem(e.currentTarget.closest("tr"));
      console.log("详情信息",dataItem)
      
      let params = {}
      params.order_no = dataItem.order_no
      that.$axios.post("/dis/getOrderDetail",params).then(res=>{
        console.log("系数",res)
        that.mapsd.car_rate = res.data.order_common_info.car_rate
        that.mapsd.frequency_rate = res.data.order_common_info.frequency_rate
        that.mapsd.address_rate = res.data.order_common_info.address_rate
        that.mapsd.holiday_rate = res.data.child_list[0].holiday_rate
        that.mapsd.money = res.data.order_common_info.average_money
        let money = that.mapsd.car_rate * that.mapsd.frequency_rate * that.mapsd.address_rate * that.mapsd.holiday_rate * that.mapsd.order_rate * that.mapsd.base_rate
        that.mapsd.true_money = money
        console.log("jiage",money)
        this.flag = true
      }).catch(err=>{
        console.log(err)
      })

    },
    fromtext(){
      this.flag = false
    },
    //请求派单接口
    postParmas(){

      this.worker_id = ""
      // order_list.worker_id=parseInt(this.worker_id)
      // order_list.order_id=this.orders_id
      // order_list.start_time=this.starttime
      // order_list.end_time = this.endtime
      console.log("派单数据",this.order_list)
      this.$axios.post("/dis/dispatchorder",this.order_list).then(res=>{
        this.toDispatch =[]
        this.orders=[]
        this.disabled = true
        this.$message({
          message: res.data[0][0].errmsg,
          type: 'success'
        });
        console.log(res)
      }).catch(err=>{
        console.log(err)
        this.toDispatch =[]
        this.orders=[]
        this.disabled = true
        this.$message({
          message: "派单失败！",
          type: 'success'
        });
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.grids {
  width: 80%;
  float:left
}
  .select{
    display: block;
  }
  .orders{
    width:19%;
    float:right;
    /*border:1px solid red*/
  }
  .btn{
    margin:20px 0;
    width:70%;

  }
  .wrk-list li{
    margin:8px 0;
  }
.from{
  width: 50%;
  position: fixed;
  margin: 60px auto;
  left: 0;
  right: 0;
  z-index: 10;
  background: white;

}
</style>
