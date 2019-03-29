<template>
  <div class="hello">


    <!--<div-->
      <!--id="vueapp"-->
      <!--class="vue-app"-->
    <!--&gt;-->
      <!--<kendo-datasource-->
        <!--ref="datasource1"-->
        <!--:transport-read-url="'https://demos.telerik.com/kendo-ui/service/Products'"-->
        <!--:transport-read-data-type="'jsonp'"-->
        <!--:transport-update-url="'https://demos.telerik.com/kendo-ui/service/Products/Update'"-->
        <!--:transport-update-data-type="'jsonp'"-->
        <!--:transport-destroy-url="'https://demos.telerik.com/kendo-ui/service/Products/Destroy'"-->
        <!--:transport-destroy-data-type="'jsonp'"-->
        <!--:transport-create-url="'https://demos.telerik.com/kendo-ui/service/Products/Create'"-->
        <!--:transport-create-data-type="'jsonp'"-->
        <!--:transport-parameter-map="parameterMap"-->
        <!--:schema-model-id="'ProductID'"-->
        <!--:schema-model-fields="schemaModelFields"-->
        <!--:batch='true'-->
        <!--:page-size='20'-->
      <!--&gt;-->
      <!--</kendo-datasource>-->

      <!--<kendo-grid-->
        <!--:height="600"-->
        <!--:data-source="tableData"-->
        <!--:navigatable="true"-->
        <!--:pageable="true"-->
        <!--:editable="'popup'"-->
        <!--:sortable="true"-->
        <!--:toolbar="['create']"-->
      <!--&gt;-->
        <!--<kendo-grid-column-->
          <!--:field="'Name'"-->
          <!--:title="'Name'"-->
          <!--:width="200"-->
        <!--&gt;</kendo-grid-column>-->
        <!--<kendo-grid-column-->
          <!--:field="'Mobile'"-->
          <!--:title="'Mobile'"-->
          <!--:width="150"-->
          <!--:format="'{0:c}'"-->
        <!--&gt;</kendo-grid-column>-->
        <!--<kendo-grid-column-->
          <!--:field="'Dept'"-->
          <!--:title="'Dept'"-->
          <!--:width="120"-->
        <!--&gt;</kendo-grid-column>-->
        <!--<kendo-grid-column-->
          <!--:field="'cn_name'"-->
          <!--:title="'cn_name'"-->
          <!--:width="120"-->
        <!--&gt;</kendo-grid-column>-->
        <!--<kendo-grid-column-->
          <!--:field="'email'"-->
          <!--:title="'email'"-->
          <!--:width="180"-->
        <!--&gt;</kendo-grid-column>-->
        <!--<kendo-grid-column-->
          <!--:field="'wechat'"-->
          <!--:title="'wechat'"-->
          <!--:width="120"-->
        <!--&gt;</kendo-grid-column>-->
        <!--<kendo-grid-column-->
          <!--:command="['edit','destroy']"-->
          <!--:title="'&nbsp;'"-->
          <!--:width="120"-->
        <!--&gt;</kendo-grid-column>-->
      <!--</kendo-grid>-->
    <!--</div>-->



    <el-table
      :data="tableData.filter(data => !search || data.uid.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%">
      <el-table-column
        label="用户ID"
        prop="uid">
      </el-table-column>
      <el-table-column
        label="用户昵称"
        prop="nick_name">
      </el-table-column>
      <el-table-column
        label="所在城市"
        prop="city">
      </el-table-column>
      <el-table-column
        label="注册时间"
        prop="reg_time">
      </el-table-column>
      <el-table-column
        label="最近登录"
        prop="cuurent_login_time">
      </el-table-column>
      <el-table-column
        align="right">
        <template slot="header" slot-scope="scope">
          <el-input
            v-model="search"
            size="mini"
            placeholder="输入关键字搜索"/>
        </template>
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
const items = [
  {
    Name: "天龙八部2",
    Mobile: "15564896358",
    Dept: "人事",
    cn_name: "000",
    email: "1105148155@qq.com",
    wechat: "12333"
  },
  {
    Name: "天龙八部",
    Mobile: "15564896358",
    Dept: "人事",
    cn_name: "000",
    email: "1105148155@qq.com",
    wechat: "12333"
  },
  {
    Name: "天龙八部",
    Mobile: "15564896358",
    Dept: "人事",
    cn_name: "000",
    email: "1105148155@qq.com",
    wechat: "12333"
  },
  {
    Name: "天龙八部",
    Mobile: "15564896358",
    Dept: "人事",
    cn_name: "000",
    email: "1105148155@qq.com",
    wechat: "12333"
  }
];
export default {
  name: "Users",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      tableData:  "",
      search: '',
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
  created(){
    let params = {}
    params.city = "上海"
    this.$axios.post("/dis/getMemberList",params).then(res=>{
      console.log("USER",res.data)
      this.tableData  = res.data
    }).catch(err=>{
      console.log("err",err)
    })
  },
  methods: {
    handleClick(row) {
      console.log(row.Dept);
    },
    parameterMap: function(options, operation) {
      if (operation !== "read" && options.models) {
        return { models: kendo.stringify(options.models) };
      }
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
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
</style>
