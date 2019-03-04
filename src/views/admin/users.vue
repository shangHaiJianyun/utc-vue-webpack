<template>
  <div class="hello">
    <!--<el-table-->
    <!--:data="tableData"-->
    <!--border-->
    <!--style="width: 100%">-->
    <!--<el-table-column-->
    <!--fixed-->
    <!--prop="Name"-->
    <!--label="Name"-->
    <!--width="150">-->
    <!--</el-table-column>-->
    <!--<el-table-column-->
    <!--prop="Mobile"-->
    <!--label="Mobile"-->
    <!--width="120">-->
    <!--</el-table-column>-->
    <!--<el-table-column-->
    <!--prop="Dept"-->
    <!--label="Dept"-->
    <!--width="120">-->
    <!--</el-table-column>-->
    <!--<el-table-column-->
    <!--prop="cn_name"-->
    <!--label="cn_name"-->
    <!--width="120">-->
    <!--</el-table-column>-->
    <!--<el-table-column-->
    <!--prop="email"-->
    <!--label="email"-->
    <!--width="300">-->
    <!--</el-table-column>-->
    <!--<el-table-column-->
    <!--prop="wechat"-->
    <!--label="wechat"-->
    <!--width="120">-->
    <!--</el-table-column>-->
    <!--<el-table-column-->
    <!--fixed="right"-->
    <!--label="操作"-->
    <!--width="100">-->
    <!--<template slot-scope="scope">-->
    <!--<el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>-->
    <!--<el-button type="text" size="small">编辑</el-button>-->
    <!--</template>-->
    <!--</el-table-column>-->
    <!--</el-table>-->

    <div id="vueapp" class="vue-app">
      <kendo-datasource ref="datasource1"
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
                        :batch='true'
                        :page-size='20'>
      </kendo-datasource>

      <kendo-grid :height="600"
                  :data-source="tableData"
                  :navigatable="true"
                  :pageable="true"
                  :editable="'popup'"
                  :sortable="true"
                  :toolbar="['create']">
        <kendo-grid-column :field="'Name'"
                           :title="'Name'"
                           :width="200"></kendo-grid-column>
        <kendo-grid-column :field="'Mobile'"
                           :title="'Mobile'"
                           :width="150"
                           :format="'{0:c}'"></kendo-grid-column>
        <kendo-grid-column :field="'Dept'"
                           :title="'Dept'"
                           :width="120"></kendo-grid-column>
        <kendo-grid-column :field="'cn_name'" :title="'cn_name'" :width="120"></kendo-grid-column>
        <kendo-grid-column :field="'email'" :title="'email'" :width="180"></kendo-grid-column>
        <kendo-grid-column :field="'wechat'" :title="'wechat'" :width="120"></kendo-grid-column>
        <kendo-grid-column :command="['edit','destroy']"
                           :title="'&nbsp;'"
                           :width="120"></kendo-grid-column>
      </kendo-grid>
    </div>

  </div>
</template>

<script>
  const items = [{
    Name: '天龙八部',
    Mobile: '15564896358',
    Dept: '人事',
    cn_name: '000',
    email: '1105148155@qq.com',
    wechat:"12333"
  }, {
    Name: '天龙八部',
    Mobile: '15564896358',
    Dept: '人事',
    cn_name: '000',
    email: '1105148155@qq.com',
    wechat:"12333"
  }, {
    Name: '天龙八部',
    Mobile: '15564896358',
    Dept: '人事',
    cn_name: '000',
    email: '1105148155@qq.com',
    wechat:"12333"
  }, {
    Name: '天龙八部',
    Mobile: '15564896358',
    Dept: '人事',
    cn_name: '000',
    email: '1105148155@qq.com',
    wechat:"12333"
  }]
  export default {
    name: "Users",
    data() {
      return {
        msg: "Welcome to Your Vue.js App",
        tableData: items,
        schemaModelFields: {
          ProductID: { editable: false, nullable: true },
          Name: { validation: { required: true } },
          Mobile: { type: 'number', validation: { required: true, min: 1 } },
          Dept: { type: 'boolean' },
          cn_name: { type: 'number', validation: { min: 0, required: true } },
          email: { type: 'number', validation: { min: 0, required: true } }
        }
      };
    },
    methods: {
      handleClick(row) {
        console.log(row.Dept);
      },
      parameterMap: function(options, operation) {
        if (operation !== 'read' && options.models) {
          return { models: kendo.stringify(options.models) }
        }
      }
    },
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
</style>
