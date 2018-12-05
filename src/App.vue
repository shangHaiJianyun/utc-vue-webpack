<template>
  <b-container fluid>
    <div v-if="user_type==='Admin'">
      <AdminMenu />
    </div>
    <div v-if="user_type==='Dist'">
      <DistMenu />
    </div>
    <div id="app">
      <b-container>
        <router-view />
      </b-container>
    </div>
  </b-container>
</template>

<script>
import AdminMenu from "@/components/admin-menu.vue";
import DistMenu from "@/components/dist-menu.vue";

export default {
  name: "App",
  data() {
    return {
      user_type: "Dist"
    };
  },
  components: {
    AdminMenu,
    DistMenu
  }
};
</script>

<style>
/* <style lang = "scss" >  */
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #252529;
  margin-top: 60px;
}
.bg-info {
  background-color: #b9e7ef;
}
</style>
