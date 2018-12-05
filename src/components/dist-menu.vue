<template>
    <b-navbar toggleable="md" variant="light">
        <b-navbar-brand href="#">My Project</b-navbar-brand>
        <b-navbar-nav>
            <b-nav-item href="#">
                <router-link to="/">Home</router-link>
            </b-nav-item>
            <b-nav-item href="#">
                <router-link to="/home">UserHome</router-link>
            </b-nav-item>
            <b-nav-item href="#">
                <router-link to="/dist-home">Dist Home</router-link>
            </b-nav-item>
            <b-nav-item href="#">
                <router-link to="/submit-project">submit-project</router-link>
            </b-nav-item>
            <b-nav-item href="#">
                <router-link to="/dispute-project">Distupe projects</router-link>
            </b-nav-item>
            <b-nav-item-dropdown text="Dists" left>

                <b-dropdown-item href="#">
                    4464
                </b-dropdown-item>
                <!-- <b-dropdown-item href="#">
                    <router-link to="/settings">settings</router-link>

                </b-dropdown-item> -->
            </b-nav-item-dropdown>

            <b-nav-item href="#" right>
                <router-link to="/login">login</router-link>
            </b-nav-item>
        </b-navbar-nav>
    </b-navbar>
</template>

<script>
export default {
  name: "DistMenu",
  data() {
    return {
      msg: "welcome dist"
    };
  }
};
</script>
