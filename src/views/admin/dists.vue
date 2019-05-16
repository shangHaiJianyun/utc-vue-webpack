<template>
  <div class="home">
    <div class="pagetitle">员工列表</div>
    <!--<h2>Show Dists</h2>-->
    <!--&lt;!&ndash; Content here &ndash;&gt;-->
    <!--<b-row class="text-center">-->
    <!--<b-col cols="3">filter</b-col>-->
    <!--<b-col cols="9">-->
    <!--results-->
    <!--<b-table striped hover :items="items"></b-table>-->
    <!--</b-col>-->
    <!--</b-row>-->
    <!--<a href="javascript:;" class="log-btn" @click="showtocken">showtocken</a>-->

    <div id="vueapp" class="vue-app">
      <kendo-datasource
        ref="datasource1"
        :transport-read-url="'https://demos.telerik.com/kendo-ui/service/Products'"
        :transport-read-data-type="'jsonp'"
        :transport-update-url="'https://demos.telerik.com/kendo-ui/service/Products/Update'"
        :transport-update-data-type="'jsonp'"
        :transport-destroy-url="'https://demos.telerik.com/kendo-ui/service/Products/Destroy'"
        :transport-destroy-data-type="'jsonp'"
        :transport-create-url="'https://demos.telerik.com/kendo-ui/service/Products/Create'"
        :transport-create-data-type="'jsonp'"
        :transport-parameter-map="parameterMap"
        :schema-model-id="'ProductID'"
        :schema-model-fields="schemaModelFields"
        :batch="true"
        :page-size="20"
      ></kendo-datasource>

      <kendo-grid
        :height="600"
        :data-source="tableData"
        :pageable="true"
        :editable="'popup'"
        :sortable="true"
        :toolbar="['create']"
      >
        <kendo-grid-column :field="'Name'" :title="'Name'" :width="200"></kendo-grid-column>
        <kendo-grid-column :field="'Mobile'" :title="'Mobile'" :width="150" :format="'{0:c}'"></kendo-grid-column>
        <kendo-grid-column :field="'Dept'" :title="'Dept'" :width="120"></kendo-grid-column>
        <kendo-grid-column :field="'cn_name'" :title="'cn_name'" :width="120"></kendo-grid-column>
        <kendo-grid-column :field="'email'" :title="'email'" :width="180"></kendo-grid-column>
        <kendo-grid-column :command="['edit', 'destroy']" :title="'&nbsp;'" :width="120"></kendo-grid-column>
      </kendo-grid>
    </div>
  </div>
</template>

<script>
// const items = [
//   { isActive: true, age: 40, first_name: "Dickerson", last_name: "Macdonald" },
//   { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw" },
//   { isActive: false, age: 89, first_name: "Geneva", last_name: "Wilson" },
//   { isActive: true, age: 38, first_name: "Jami", last_name: "Carney" }
// ];
const items = [
  {
    Name: "天龙八部",
    Mobile: "15564896358",
    Dept: "人事",
    cn_name: "000",
    email: "1105148155@qq.com"
  },
  {
    Name: "天龙八部",
    Mobile: "15564896358",
    Dept: "人事",
    cn_name: "000",
    email: "1105148155@qq.com"
  },
  {
    Name: "天龙八部",
    Mobile: "15564896358",
    Dept: "人事",
    cn_name: "000",
    email: "1105148155@qq.com"
  },
  {
    Name: "天龙八部",
    Mobile: "15564896358",
    Dept: "人事",
    cn_name: "000",
    email: "1105148155@qq.com"
  }
];
export default {
  name: "ShowDists",
  data() {
    return {
      tableData: items,
      schemaModelFields: {
        ProductID: { editable: false, nullable: true },
        Name: { validation: { required: true } },
        Mobile: { type: "number", validation: { required: true, min: 1 } },
        Dept: { type: "boolean" },
        cn_name: { type: "number", validation: { min: 0, required: true } },
        email: { type: "number", validation: { min: 0, required: true } }
      }
    };
  },
  methods: {
    showtocken: function() {
      console.log("token in session", this.$store.state.token);
      var c = this.getCookie("session");
      console.log("show cookie", c);
    },
    parameterMap: function(options, operation) {
      if (operation !== "read" && options.models) {
        console.log(kendo.stringify(options.models));
        return { models: kendo.stringify(options.models) };
      }
    }
  }
};
</script>
