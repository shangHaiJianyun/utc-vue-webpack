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
      <el-select v-model="uid" placeholder="请选择" @change="getValue" >
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

export default {
  name: "client_orders",
  data() {
    return {
      orders: [],
      toDispatch: [],
      workers: [],
      uid:""
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
      this.toDispatch.push(dataItem.order_no);
      console.log(dataItem.order_no);
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
        this.toDispatch.shift()
      }else{
        this.toDispatch.splice(j,1)
      }

    },
    getValue(){
      console.log("...",this.uid)
      let orders=""
      if(this.toDispatch.length == 1){
        orders += this.toDispatch[0]
      }else{
        for(let i =0;i< this.toDispatch.length;i++){

          if(this.toDispatch.length == i+1){
            orders += this.toDispatch[i]
          }else{
            orders += this.toDispatch[i]+','
          }
        }
      }
      console.log(orders)
      let params = {}
      params.uid=parseInt(this.uid)
      params.order_ids=orders
      console.log("00",params)
      this.$axios.post("/dis/dispatchorder",params).then(res=>{
        this.toDispatch =[]
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
}
  .select{
    display: block;
  }
</style>
