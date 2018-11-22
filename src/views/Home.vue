<template>
    <div class="home">
        <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
        <!-- <HelloWorld msg="Welcome to home page"/> -->
        <h1>Home</h1>
        <H2x msg="hello form h2" />
    </div>
</template>

<script>
// @ is an alias to /src
import H2x from "@/components/H2x.vue";

export default {
  name: "Home",
  data() {
    return {
      msg: "home vue"
    };
  },
  components: {
    H2x
  }
};
</script>


    
