<template>
  <div style="height:100%">
    <b-container fluid>
      <div v-if="user_type==='Admin'">
        <AdminMenu />
      </div>
      <!-- 操作员 -->
      <div v-if="user_type==='Dist'">
        <DistMenu />
      </div>
      <!-- 用户 -->
      <div v-if="user_type==='User'">
        <UserMenu />
      </div>
      <!--<UserMenu />-->
    </b-container>
    <div id="app">
      <div style="height:100%">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import AdminMenu from "@/components/admin-menu.vue";
import DistMenu from "@/components/dist-menu.vue";
import UserMenu from "@/components/user-menu.vue";

export default {
  name: "App",
  data() {
    return {
      user_type: "Admin"
    };
  },
  components: {
    AdminMenu,
    DistMenu,
    UserMenu
  },
  created() {
    
    console.log("session created", window.sessionStorage.getItem("role"));
    
  }
};
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
}
#app {
  height: calc(100% - 61px);
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #252529;
  /*margin-top: 60px;*/
  /*width:100% !important;*/
}
.bg-info {
  background-color: #b9e7ef;
}
</style>
