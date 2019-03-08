<template>
  <div class="grids">
    <h1>洗车预约单</h1>

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
    <!--<ul class="wrk-list">-->
      <!--<li-->
        <!--v-for="wk in workers"-->
        <!--:key="wk.uid"-->
      <!--&gt;-->
        <!--<div class="view">-->
          <!--<button class="destroy">{{wk.uid}} {{wk.nick_name}}&#45;&#45;</button>-->
        <!--</div>-->
      <!--</li>-->
    <!--</ul>-->

    <!--<select name="" id="" @change="getValue" v-model="uid">-->
      <!--<option value="">&#45;&#45;请选择员工&#45;&#45;</option>-->
      <!--<option v-for="wk in workers"-->
              <!--:key="wk.uid" :value="wk.uid">{{wk.nick_name}}</option>-->
    <!--</select>-->
    <div>
      <el-select v-model="worker_id" placeholder="请选择" @change="getValue" >
        <el-option
          v-for="wk in workers"
          :key="wk.uid"
          :label="wk.nick_name"
          :value="wk.uid" class="select">
        </el-option>
      </el-select>
    </div>


    <kendo-datasource
      ref="datasource1"
      :transport-read-url="'http://fuel.upctech.com.cn/api/wxapi/cw/list-order/'"
      :page-size='20'
      :server-paging="false"
    >
    </kendo-datasource>
    <kendo-grid
      ref="grid"
      :data-source-ref="'datasource1'"
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
        :field="'item_title'"
        :title="'服务项目'"
        :width="220"
        :filterable-cell-operator="'contains'"
        :filterable-cell-suggestion-operator="'contains'"
      >
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
        :command="{ text: '派单', click: showDetails }"
        :title="'&nbsp;'"
        :width="100"
      ></kendo-grid-column>
    </kendo-grid>
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
    };
  },
  created() {
    let wrk_url = "http://dev.upctech.com.cn/api/dis/getworklist";
    axios.get(wrk_url).then(res => {
      console.log(res);
      this.workers = res.data;
    });
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
      // alert('"' + dataItem.order_no + '" 准备派单.');
      // this.data.toDispatch.append(dataItem.order_no);

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
          this.toDispatch.push(dataItem.order_no);
          // this.orders_id.push(dataItem.order_id)
          // console.log(dataItem.order_no);

         let params = {}
          params.order_ids =this.orders_id
          params.order_status = 2
          console.log("系统ID",params)
         this.$axios.post("/dis/updateOrderStatus",params).then(res=>{
           console.log(res)
           //派单数据
           let orders = {}
           orders.order_id = this.orders_id
           orders.start_time = this.starttime
           orders.end_time = this.endtime
           this.orders.push(orders)



         })
       }else if(dataItem.order_status == 2){
         this.toDispatch.push(dataItem.order_no);
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
    // GetOrders() {
    //   let params = {
    //     // access_key: "xunjiepf",
    //     url: "http://dev.upctech.com.cn/api/dis/getorderlist"
    //   };
    //   axios.get(url, params, data).then(res => {
    //     console.log(res.data);
    //   });
    // }
    moveDist(j){
      console.log(j)
      if(j == 0){
        // this.orders_id.shift()
        this.toDispatch.shift()
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
      this.postParmas()
    },
    //获取派单数据
    getdata(){



    },
    //请求派单接口
    postParmas(){
      // order_list.worker_id=parseInt(this.worker_id)
      // order_list.order_id=this.orders_id
      // order_list.start_time=this.starttime
      // order_list.end_time = this.endtime
      console.log("派单数据",this.order_list)
      this.$axios.post("/dis/dispatchorder",this.order_list).then(res=>{
        this.toDispatch =[]
        this.orders=[]
        console.log(res)
      }).catch(err=>{
        console.log(err)
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
  width: 90%;
  margin:auto;
}
  .select{
    display: block;
  }
</style>
