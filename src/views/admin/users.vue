<template>
  <div class="hello">
    <div class="pagetitle">用户列表</div>

    <el-table
      :data="tableData.filter(data => !search || data.uid.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
    >
      <el-table-column label="用户ID" prop="uid"></el-table-column>
      <el-table-column label="用户昵称" prop="nick_name"></el-table-column>
      <el-table-column label="所在城市" prop="city"></el-table-column>
      <el-table-column label="注册时间" prop="reg_time"></el-table-column>
      <el-table-column label="最近登录" prop="cuurent_login_time"></el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      tableData: [],
      search: "",
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
  created() {
    var _that = this;
    let params = {};
    this.$axios
      .get(_that.$api + "/api/dis/getMemberList?city=上海")
      .then(res => {
        console.log("USER", res.data);
        _that.tableData = res.data;
      })
      .catch(err => {
        console.log("err", err);
      });
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
