<template>
  <div class="hello">
    <h1>component: HelloWorld {{ msg }}</h1>
    <h2>Essential Links</h2>

    <h2>Ecosystem</h2>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        fixed
        prop="Name"
        label="Name"
        width="150">
      </el-table-column>
      <el-table-column
        prop="Mobile"
        label="Mobile"
        width="120">
      </el-table-column>
      <el-table-column
        prop="Dept"
        label="Dept"
        width="120">
      </el-table-column>
      <el-table-column
        prop="cn_name"
        label="cn_name"
        width="120">
      </el-table-column>
      <el-table-column
        prop="email"
        label="email"
        width="300">
      </el-table-column>
      <el-table-column
      prop="wechat"
      label="wechat"
      width="120">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

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
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      tableData: items
    };
  },
  methods: {
    handleClick(row) {
      console.log(row.Dept);
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
