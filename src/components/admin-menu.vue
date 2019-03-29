<template>
  <b-navbar
    toggleable="md"
    variant="light"
  >
    <b-navbar-brand href="#">管理员</b-navbar-brand>
    <b-navbar-nav>
      <b-nav-item href="#">
        <router-link to="/admin">主页</router-link>
      </b-nav-item>
      <b-nav-item href="#">
        <router-link to="/admin-users">用户列表</router-link>
      </b-nav-item>
      <b-nav-item href="#">
        <router-link to="/admin-dists">员工列表</router-link>
      </b-nav-item>
      <b-nav-item href="#">
      <router-link to="/Arealist">区域列表</router-link>
    </b-nav-item>
      <!--<b-nav-item href="#">-->
      <!--<router-link to="/dists">dists</router-link>-->
      <!--</b-nav-item>-->
      <b-nav-item href="#">
        <router-link to="/ClientOrders">洗车预约单</router-link>
      </b-nav-item>
      <b-nav-item href="#">
        <router-link to="/ClientOrdersAll">洗车订单</router-link>
      </b-nav-item>
      <b-nav-item href="#">
        <router-link to="/map">地图显示</router-link>
      </b-nav-item>
      <!--<b-nav-item href="#">-->
        <!--<router-link to="/projects">projects</router-link>-->
      <!--</b-nav-item>-->
      <!--<b-nav-item-dropdown-->
        <!--text="Setting"-->
        <!--left-->
      <!--&gt;-->

        <!--<b-dropdown-item href="#">-->
          <!--<router-link to="/settings">settings</router-link>-->

        <!--</b-dropdown-item>-->
      <!--</b-nav-item-dropdown>-->

      <!--<b-nav-item-->
        <!--href="#"-->
        <!--right-->
      <!--&gt;-->
        <!--<router-link to="/login">login</router-link>-->
      <!--</b-nav-item>-->
      <b-nav-item
        href="#"
        right
        @click="logout"
      >
        退出登录
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
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
