<template>
  <div>
    <div class="pagetitle">洗车订单</div>
    <el-form label-width="80px" :ref="amount" :model="amount" v-show="flag" class="from">
      <el-form-item label="返回金额">
        <el-input v-model="amount.back"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="fromtext">关闭</el-button>
      </el-form-item>
    </el-form>
    <!--<div class="orders">-->
    <!--<h3>待派单</h3>-->
    <!-- <p>{{toDispatch}}</p> -->

    <!--<ul class="wrk-list">-->
    <!--<li-->
    <!--v-for="(j,index) in toDispatch"-->
    <!--:key="j"-->
    <!--&gt;-->
    <!--<div class="view">-->
    <!--<button class="destroy" @click="moveDist(index)">{{j}} -</button>-->
    <!--</div>-->
    <!--</li>-->
    <!--</ul>-->
    <!--<h3>选择技师</h3>-->
    <!--<div >-->
    <!--<el-select v-model="worker_id" placeholder="请选择" @chang     e="getValue" :disabled="disabled">-->
    <!--<el-option-->
    <!--v-for="wk in workers"-->
    <!--:key="wk.uid"-->
    <!--:label="wk.nick_name"-->
    <!--:value="wk.uid" class="select">-->
    <!--</el-option>-->
    <!--</el-select>-->
    <!--</div>-->
    <!--<button class="btn" @click="postParmas">提交</button>-->
    <!--</div>-->

    <div class="grids">
      <kendo-datasource
        ref="datasource1"
        :transport-read-url="this.$api+'/api/dis/getorderlist'"
        :page-size="20"
        :server-paging="false"
      ></kendo-datasource>
      <kendo-grid
        ref="grid"
        :data-source-ref="'datasource1'"
        :sortable-mode="'multiple'"
        :sortable-allow-unsort="true"
        :sortable-show-indexes="true"
        :pageable-button-count="5"
        :server-filtering="true"
        :pageable="true"
        :filterable-mode="'row'"
      >
        <kendo-grid-column :field="'order_no'" :width="220"></kendo-grid-column>
        <kendo-grid-column :field="'order_id'" , :title="'系统订单编号'" :width="120"></kendo-grid-column>
        <kendo-grid-column :field="'nick_name'" :title="'用户昵称'" :width="220"></kendo-grid-column>
        <kendo-grid-column
          :field="'item_title'"
          :title="'服务项目'"
          :width="120"
          :filterable-cell-operator="'contains'"
          :filterable-cell-suggestion-operator="'contains'"
        ></kendo-grid-column>
        <kendo-grid-column :field="'address_detail'" :title="'地址'" :width="250"></kendo-grid-column>
        <kendo-grid-column :field="'order_status'" :title="'订单状态'" :width="120" :format="'{0:c}'"></kendo-grid-column>
        <kendo-grid-column :field="'service_date'" :title="'服务时间'" :width="120" :format="'{0:c}'"></kendo-grid-column>
        <kendo-grid-column :field="'start_time'" :title="'预约开始'" :width="120"></kendo-grid-column>
        <kendo-grid-column :field="'end_time'" :title="'预约截止'" :width="120"></kendo-grid-column>
        <kendo-grid-column
          :command="{ text: '更改', click: showDetails }"
          :title="'&nbsp;'"
          :width="100"
        ></kendo-grid-column>
        <kendo-grid-column :command="{ text: '详情', click: shows}" :title="'&nbsp;'" :width="100"></kendo-grid-column>
      </kendo-grid>
    </div>
  </div>
</template>


<script>
// import http from '../api/http'
import axios from "axios";
// Vue.prototype.$http = axios;
import { DropdownsInstaller } from "@progress/kendo-ui";
import time from "../api/time";

export default {
  name: "client_orders",
  data() {
    return {
      orders: [],
      toDispatch: [],
      workers: [],
      worker_id: "",
      orders_id: "",
      orders_time: "",
      starttime: "",
      endtime: "",
      order_list: {},
      worker: {},
      disabled: true,
      amount: {
        back: ""
      },
      flag: false
    };
  },
  created() {
    // let wrk_url = "http://dev.upctech.com.cn/api/dis/getworklist";
    // let params = {}
    // params.city = "上海市"
    // axios.post(wrk_url,params).then(res => {
    //   console.log(res);
    //   this.workers = res.data;
    // });
    // this.GetOrders();
  },
  methods: {
    // parameterMap: function(options, operation) {
    //   if (operation !== "read" && options.models) {
    //     return { models: kendo.stringify(options.models) };
    //   }
    // },
    shows: function(e) {
      let that = this;
      e.preventDefault();
      var grid = this.$refs.grid.kendoWidget();
      var dataItem = grid.dataItem(e.currentTarget.closest("tr"));
      console.log("详情信息", dataItem);

      let params = {};
      params.order_no = dataItem.order_no;
    },
    fromtext() {
      this.flag = false;
    },
    showDetails: function(e) {
      var _that = this;
      e.preventDefault();
      var grid = this.$refs.grid.kendoWidget();
      var dataItem = grid.dataItem(e.currentTarget.closest("tr"));
      // alert('"' + dataItem.order_no + '" 准备派单.');
      // this.data.toDispatch.append(dataItem.order_no);

      //获取数据
      this.orders_id = dataItem.order_id;
      //
      //
      // //获取预约开始时间前一个小时
      // this.starttime = dataItem.service_date + ' ' + dataItem.start_time
      // this.endtime = dataItem.service_date + " " +  dataItem.end_time

      //判断订单状态
      if (dataItem.order_status == 1) {
        // this.orders_id.push(dataItem.order_id)
        // console.log(dataItem.order_no);

        let params = {};
        params.access_key = "xunjiepf";
        params.order_ids = this.orders_id;
        params.order_status = 2;
        console.log("系统ID", params);
        this.$axios
          .post(_that.$api + "/api/dis/updateOrderStatus", params)
          .then(res => {
            this.toDispatch.push(dataItem.order_no);

            //派单数据
            this.$message({
              showClose: true,
              message: res.data.errmsg
            });
          })
          .catch(function(error) {
            console.log(error);
          });
      } else {
        this.$message({
          showClose: true,
          message: "此单不能更新!"
        });
      }
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
  width: 95%;
  /*float:left*/
  margin: auto;
}
.select {
  display: block;
}
.orders {
  width: 19%;
  float: right;
  /*border:1px solid red*/
}
.btn {
  margin: 20px 0;
  width: 70%;
}
.wrk-list li {
  margin: 8px 0;
}
</style>
