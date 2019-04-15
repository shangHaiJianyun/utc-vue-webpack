<template>
<div>
   
 
<el-menu
  class="el-menu-demo"
  mode="horizontal"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="/admin" is-active> <router-link to="/admin">主页</router-link></el-menu-item>
  <el-menu-item index="/admin-users"> <router-link to="/admin-users">用户列表</router-link></el-menu-item>
  <el-menu-item index="/admin-dists"> <router-link to="/admin-dists">员工列表</router-link></el-menu-item>
  <el-menu-item index="/Arealist"> <router-link to="/Arealist">区域列表</router-link></el-menu-item>
  <el-menu-item index="/ClientOrders"> <router-link to="/ClientOrders">洗车预约单</router-link></el-menu-item>
  <el-menu-item index="/ClientOrdersAll"> <router-link to="/ClientOrdersAll">洗车订单</router-link></el-menu-item>
  <el-menu-item index="/map"><router-link to="/map">地图显示</router-link></el-menu-item>
  <el-menu-item index="/simulated-form"><router-link to="/simulated-form">模拟表单</router-link></el-menu-item>
  
   <el-menu-item index="8"  @click="logout">退出登录</el-menu-item>

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
  .container-fluid{
    padding:0
  }
</style>

