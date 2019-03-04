<template>
  <div class="grids">
    <h1>洗车预约单</h1>
    <kendo-grid
      :data-source="orders"
      :sortable-mode="'multiple'"
      :sortable-allow-unsort="true"
      :sortable-show-indexes="true"
      :pageable-button-count="5"
      :server-filtering="true"
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

export default {
  name: "client_orders",
  data() {
    return {
      orders: []
    };
  },
  created() {
    let url = "http://fuel.upctech.com.cn/api/wxapi/cw/list-order/";
    axios.get(url).then(res => {
      console.log(res.data);
      this.orders = res.data;
    });
  },
  methods: {
    showDetails: function(e) {
      var grid = this.$refs.grid.kendoWidget();
      var dataItem = grid.dataItem($(e.currentTarget).closest("tr"));
      console.log(dataItem);
      // console.log(e);
    },
    GetOrders() {
      let params = {
        access_key: "xunjiepf",
        url:
          "https://banana.xunjiepf.cn/api/extend/getorderlist?access_key=xunjiepf"
      };
      axios.get(url, params, data).then(res => {
        console.log(res.data);
      });
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
</style>
