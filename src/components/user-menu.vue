<template>
  <b-navbar toggleable="md" variant="light">
    <b-navbar-brand href="#">用户</b-navbar-brand>
    <b-navbar-nav>
      <b-nav-item href="#">
        <router-link to="/user">主页</router-link>
      </b-nav-item>
      <!--<b-nav-item href="#">-->
        <!--<router-link to="/home">UserHome</router-link>-->
      <!--</b-nav-item>-->
      <!--<b-nav-item href="#">-->
        <!--<router-link to="/admin-home">Home2</router-link>-->
      <!--</b-nav-item>-->
      <!--<b-nav-item href="#">-->
        <!--<router-link to="/dists">dists</router-link>-->
      <!--</b-nav-item>-->
      <!--<b-nav-item href="#">-->
        <!--<router-link to="/projects">projects</router-link>-->
      <!--</b-nav-item>-->
      <b-nav-item-dropdown text="Setting" left>

        <b-dropdown-item href="#">
          <router-link to="/settings">settings</router-link>

        </b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item href="#" right>
        <router-link to="/login">login</router-link>
      </b-nav-item>
      <b-nav-item href="#" right @click="logout">
        退出登录
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
    export default {
      name: "user",
      methods:{
        logout(){
          console.log("00000")
          this.$store.commit("del_token","")
          this.$parent.user_type = ''
          this.$router.push("/login")
        }
      }
    }
</script>

<style scoped>

</style>
