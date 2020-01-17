<template>
  <div>
    <el-menu class="el-menu-demo"
             mode="horizontal"
             background-color="#545c64"
             text-color="#fff"
             active-text-color="#ffd04b">
      <el-menu-item index="/admin"
                    is-active>
        <router-link to="/admin">主页</router-link>
      </el-menu-item>
      <el-menu-item index="/admin-users">
        <router-link to="/admin-users">小程序用户</router-link>
      </el-menu-item>
      <el-menu-item index="/admin-dists">
        <router-link to="/admin-dists">可派单技师</router-link>
      </el-menu-item>
      <el-menu-item index="/Arealist">
        <router-link to="/Arealist">区域列表</router-link>
      </el-menu-item>
      <el-submenu index="3">
        <template slot="title"
                  class="titletext">洗车订单</template>
        <el-menu-item index="/ClientOrders">
          <router-link to="/ClientOrders">洗车预约单</router-link>
        </el-menu-item>
        <el-menu-item index="/ClientOrdersAll">
          <router-link to="/ClientOrdersAll">全部订单</router-link>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title"
                  class="titletext">地图显示</template>
        <el-menu-item index="/map">
          <router-link to="/map">全部地图</router-link>
        </el-menu-item>
        <el-menu-item index="/order-map">
          <router-link to="/order-map">订单地图</router-link>
        </el-menu-item>
        <el-menu-item index="/strategy-map">
          <router-link to="/strategy-map">战略地图</router-link>
        </el-menu-item>
      </el-submenu>

      <el-menu-item index="/simulated-form">
        <router-link to="/simulated-form">模拟表单</router-link>
      </el-menu-item>
      <el-submenu index="5">
        <template slot="title"
                  class="titletext">活动设置</template>
        <el-menu-item index="/official-activities">
          <router-link to="/official-activities">官方活动</router-link>
        </el-menu-item>
        <el-menu-item index="/sharing-activities">
          <router-link to="/sharing-activities">用户活动</router-link>
        </el-menu-item>

      </el-submenu>

      <el-menu-item index="/simulation-gantt">
        <router-link to="/simulation-gantt">模拟甘特</router-link>
      </el-menu-item>
      <el-submenu index="6">
        <template slot="title"
                  class="titletext">公众号设置</template>
        <el-menu-item index="/official-account">
          <router-link to="/official-account">公众号设置</router-link>
        </el-menu-item>
        <el-menu-item index="/official-list">
          <router-link to="/official-list2">公众号用户</router-link>
        </el-menu-item>
        <el-menu-item index="/source-query">
          <router-link to="/source-query">来源记录</router-link>
        </el-menu-item>

      </el-submenu>

      <el-menu-item index="/base-setting">
        <router-link to="/base-setting">基数设置</router-link>
      </el-menu-item>

      <el-submenu index="10">
        <template slot="title"
                  class="titletext">代理设置</template>
        <el-menu-item index="/agent-list">
          <router-link to="/agent-list">代理列表</router-link>
        </el-menu-item>
        <el-menu-item index="/proxy-settings">
          <router-link to="/proxy-settings">代理参数</router-link>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"
                  class="titletext">物业查询</template>
        <el-menu-item index="/property-address">
          <router-link to="/property-address">物业列表</router-link>
        </el-menu-item>
        <el-menu-item index="/property-user">
          <router-link to="/property-user">用户查询</router-link>
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="8"
                    @click="logout"
                    class="quit">退出登录<i class="el-icon-circle-close"></i></el-menu-item>
    </el-menu>

  </div>
</template>

<script>
export default {
  name: "AdminMenu",
  data () {
    return {
      msg: "welcome admin"
    };
  },
  methods: {
    logout () {
      console.log("00000");
      this.$store.commit("del_token", "");
      this.$parent.user_type = "";
      this.$router.push("/login");
    }
  }
};
</script>
<style>
.container-fluid {
  padding: 0;
}
a {
  color: white;
}
.container-fluid .el-menu--horizontal > .el-submenu .el-submenu__title {
  line-height: 65px;
}
.el-menu-item a {
  color: white;
}
.container-fluid .el-menu--horizontal > .quit {
  float: right;
}
</style>

