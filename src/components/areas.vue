<template>
  <div class="area-list">
    <div class="pagetitle">区域列表</div>
    <kendo-datasource
      ref="datasource1"
      :transport-read-url="'https://dev.upctech.com.cn/api/map/list_area'"
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
      <kendo-grid-column :field="'area_id'" :title="'区间ID'" :width="220"></kendo-grid-column>
      <kendo-grid-column :field="'address'" , :title="'地址'" :width="120"></kendo-grid-column>
      <kendo-grid-column :field="'business'" , :title="'具体地址'" :width="120"></kendo-grid-column>
      <kendo-grid-column :field="'surrounds'" , :title="'周围建筑'" :width="120"></kendo-grid-column>
      <!--<kendo-grid-column-->
      <!--:field="'cen_loc'"-->
      <!--:title="'中心点'"-->
      <!--:width="220"-->
      <!--&gt;</kendo-grid-column>-->
      <kendo-grid-column :field="'level'" :title="'价格系数'" :width="220"></kendo-grid-column>
      <kendo-grid-column :command="{ text: '开启', click:circuiton}" :title="'&nbsp;'" :width="100"></kendo-grid-column>
      <kendo-grid-column :command="{ text: '关闭', click: circuitoff}" :title="'&nbsp;'" :width="100"></kendo-grid-column>
    </kendo-grid>
  </div>
</template>

<script>
export default {
  data() {
    return {
      area: ""
    };
  },
  created() {
    var _that = this;
    this.$axios.get(_that.$api + "/api/map/list_area").then(res => {
      console.log(res);
    });
  },
  methods: {
    circuiton() {
      console.log(1);
    },
    circuitoff() {
      console.log(2);
    }
  }
};
</script>

<style scoped>
</style>
