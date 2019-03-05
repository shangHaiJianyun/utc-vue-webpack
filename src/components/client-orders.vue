<template>
  <div class="grids">
    <h1>洗车预约单</h1>

    <h3>待派单</h3>
    <!-- <p>{{toDispatch}}</p> -->

    <ul class="wrk-list">
      <li
        v-for="j in toDispatch"
        :key="j"
      >
        <div class="view">
          <button class="destroy">{{j}} -</button>
        </div>
      </li>
    </ul>
    <h3>选择技师</h3>
    <ul class="wrk-list">
      <li
        v-for="wk in workers"
        :key="wk.uid"
      >
        <div class="view">
          <button class="destroy">{{wk.uid}} {{wk.nick_name}}--</button>
        </div>
      </li>
    </ul>

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
      workers: []
    };
  },
  created() {
    let wrk_url = "http://dev.upctech.com.cn/api/dis/getworklist";
    axios.get(wrk_url).then(res => {
      console.log(res);
      this.workers = res.data.data;
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
    }
    // GetOrders() {
    //   let params = {
    //     // access_key: "xunjiepf",
    //     url: "http://dev.upctech.com.cn/api/dis/getorderlist"
    //   };
    //   axios.get(url, params, data).then(res => {
    //     console.log(res.data);
    //   });
    // }
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
</style>
