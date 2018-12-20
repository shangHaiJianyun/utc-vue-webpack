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


    <h2>Show Dists</h2>
    <!-- Content here -->
    <b-row class="text-center">
    <b-col cols="3">filter</b-col>
    <b-col cols="9">
    results
    <b-table striped hover :items="items"></b-table>
    </b-col>
    </b-row>
    <!--<a href="javascript:;" class="log-btn" @click="showtocken">showtocken</a>-->

  </div>
</template>

<script>
  const user_item = [
    { isActive: true, age: 40, first_name: "Dickerson", last_name: "Macdonald" },
    { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw" },
    { isActive: false, age: 89, first_name: "Geneva", last_name: "Wilson" },
    { isActive: true, age: 38, first_name: "Jami", last_name: "Carney" }
  ];
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
        tableData: items,
        items:user_item
      }
    },
    created(){
      console.log("token", this.$store.state.token)
      this.$axios.get("/user/index",{headers:{"Authorization":'Bearer ' + this.$store.state.token}}).then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
    }
  };
</script>
<style scoped>
  .home{
    border:1px solid red;
  }
</style>
