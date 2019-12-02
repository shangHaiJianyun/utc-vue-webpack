<template>
  <div>
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="/admin" is-active>
        <router-link to="/admin">主页</router-link>
      </el-menu-item>
      <el-menu-item index="/admin-users">
        <router-link to="/admin-users">用户列表</router-link>
      </el-menu-item>
      <el-menu-item index="/admin-dists">
        <router-link to="/admin-dists">员工列表</router-link>
      </el-menu-item>
      <el-menu-item index="/Arealist">
        <router-link to="/Arealist">区域列表</router-link>
      </el-menu-item>
      <el-menu-item index="/ClientOrders">
        <router-link to="/ClientOrders">洗车预约单</router-link>
      </el-menu-item>
      <el-menu-item index="/ClientOrdersAll">
        <router-link to="/ClientOrdersAll">洗车订单</router-link>
      </el-menu-item>
      <el-menu-item index="/map">
        <router-link to="/map">地图显示</router-link>
      </el-menu-item>
      <el-menu-item index="/simulated-form">
        <router-link to="/simulated-form">模拟表单</router-link>
      </el-menu-item>

      <el-menu-item index="/order-map">
        <router-link to="/order-map">订单地图</router-link>
      </el-menu-item>
      <el-menu-item index="/gould-map">
        <router-link to="/gould-map">高德地图</router-link>
      </el-menu-item>
      <el-menu-item index="/official-activities">
        <router-link to="/official-activities">官方活动</router-link>
      </el-menu-item>
      <el-menu-item index="/sharing-activities">
        <router-link to="/sharing-activities">用户活动</router-link>
      </el-menu-item>
      <el-menu-item index="/simulation-gantt">
        <router-link to="/simulation-gantt">模拟甘特</router-link>
      </el-menu-item>
      <el-menu-item index="/strategy-map">
        <router-link to="/strategy-map">战略地图</router-link>
      </el-menu-item>
      <el-menu-item index="/official-account">
        <router-link to="/official-account">公众号设置</router-link>
      </el-menu-item>
      <el-menu-item index="/official-list">
        <router-link to="/official-list">公众号关注</router-link>
      </el-menu-item>
      <el-menu-item index="/source-query">
        <router-link to="/source-query">来源记录</router-link>
      </el-menu-item>

      <el-menu-item index="8" @click="logout">退出登录</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "AdminMenu",
  data() {
    return {
      msg: "welcome admin"
    };
  },
  methods: {
    logout() {
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
</style>

