<template>
    <!-- <b-navbar toggleable="md" variant="light">
        <b-navbar-brand href="#">BootstrapVue</b-navbar-brand>
        <b-navbar-nav>
            <b-nav-item href="#">
                <router-link to="/">Home</router-link>
            </b-nav-item>
            <b-nav-item href="#">
                <router-link to="/home">UserHome</router-link>
            </b-nav-item>
            <b-nav-item-dropdown text="Admin" left>
                <b-dropdown-item href="#">
                    <router-link to="/admin-home">Admin Home</router-link>

                </b-dropdown-item>
                <b-dropdown-item href="#">
                    <router-link to="/dists">dists</router-link>

                </b-dropdown-item>
                <b-dropdown-item href="#">
                    <router-link to="/projects">projects</router-link>

                </b-dropdown-item>
                <b-dropdown-item href="#">
                    <router-link to="/settings">settings</router-link>

                </b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown text="Dists" left>
                <b-dropdown-item href="#">
                    <router-link to="/admin-home">Admin Home</router-link>

                </b-dropdown-item>
                <b-dropdown-item href="#">
                    <router-link to="/dists">dists</router-link>

                </b-dropdown-item>
                <b-dropdown-item href="#">
                    <router-link to="/projects">projects</router-link>

                </b-dropdown-item>
                <b-dropdown-item href="#">
                    <router-link to="/settings">settings</router-link>

                </b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item href="#" right>
                <router-link to="/login">login</router-link>
            </b-nav-item>
        </b-navbar-nav>
    </b-navbar> -->
    <div class="home">

      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          fixed
          prop="Name"
          label="Name"
          width="170">
        </el-table-column>
        <el-table-column
          prop="Mobile"
          label="Mobile"
          width="180">
        </el-table-column>
        <el-table-column
          prop="Dept"
          label="Dept"
          width="140">
        </el-table-column>
        <el-table-column
          prop="cn_name"
          label="cn_name"
          width="140">
        </el-table-column>
        <el-table-column
          prop="email"
          label="email"
          width="300">
        </el-table-column>
        <!--<el-table-column-->
          <!--prop="zip"-->
          <!--label="邮编"-->
          <!--width="120">-->
        <!--</el-table-column>-->
        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
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
  name: "AdminHome",
  data () {
    return {
      tableData: items
    }
  }
};
</script>
<style scoped>

</style>
