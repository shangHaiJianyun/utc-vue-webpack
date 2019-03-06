<template>
  <div>
    <b-container fluid>
       <div v-if="user_type==='Admin'">
        <AdminMenu />
      </div>
      <div v-if="user_type==='Dist'">
        <DistMenu />
      </div>
      <div v-if="user_type==='User'">
        <UserMenu />
      </div>
      <!--<UserMenu />-->

    </b-container>
    <div id="app">
      <div>
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
      user_type: window.sessionStorage.getItem("role")
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
/* <style lang = "scss" >  */
body {
  /*width: 100%;*/
  margin: 0px;
  padding: 0px;
  /*border:1px solid blue;*/
}
#app {
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
