<template>
  <div class="home">
    <h2>用户主页</h2>
    <!--<el-table-->
      <!--:data="tableData"-->
      <!--border-->
      <!--style="width: 100%">-->
      <!--<el-table-column-->
        <!--fixed-->
        <!--prop="Name"-->
        <!--label="Name"-->
        <!--width="170">-->
      <!--</el-table-column>-->
      <!--<el-table-column-->
        <!--prop="Mobile"-->
        <!--label="Mobile"-->
        <!--width="180">-->
      <!--</el-table-column>-->
      <!--<el-table-column-->
        <!--prop="Dept"-->
        <!--label="Dept"-->
        <!--width="140">-->
      <!--</el-table-column>-->
      <!--<el-table-column-->
        <!--prop="cn_name"-->
        <!--label="cn_name"-->
        <!--width="140">-->
      <!--</el-table-column>-->
      <!--<el-table-column-->
        <!--prop="email"-->
        <!--label="email"-->
        <!--width="300">-->
      <!--</el-table-column>-->
      <!--&lt;!&ndash;<el-table-column&ndash;&gt;-->
      <!--&lt;!&ndash;prop="zip"&ndash;&gt;-->
      <!--&lt;!&ndash;label="邮编"&ndash;&gt;-->
      <!--&lt;!&ndash;width="120">&ndash;&gt;-->
      <!--&lt;!&ndash;</el-table-column>&ndash;&gt;-->
      <!--<el-table-column-->
        <!--fixed="right"-->
        <!--label="操作"-->
        <!--width="100">-->
        <!--<template slot-scope="scope">-->
          <!--<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>-->
          <!--<el-button type="text" size="small">编辑</el-button>-->
        <!--</template>-->
      <!--</el-table-column>-->
    <!--</el-table>-->

  </div>
</template>

<script>
  const items = [{
    Name: '天龙八部',
    Mobile: '15564896358',
    Dept: '人事',
    cn_name: '000',
    email: '1105148155@qq.com',
  }, {
    Name: '天龙八部',
    Mobile: '15564896358',
    Dept: '人事',
    cn_name: '000',
    email: '1105148155@qq.com',
  }, {
    Name: '天龙八部',
    Mobile: '15564896358',
    Dept: '人事',
    cn_name: '000',
    email: '1105148155@qq.com',
  }, {
    Name: '天龙八部',
    Mobile: '15564896358',
    Dept: '人事',
    cn_name: '000',
    email: '1105148155@qq.com',
  }]

  export default {
    name: "UsersHome",
    data () {
      return {
        tableData: items
      }
    }
  };
</script>
