<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to home page"/> -->
    <h1>Home</h1>
    <ClientOrders msg="hello" />
  </div>
</template>

<script>
// @ is an alias to /src
import ClientOrders from "@/components/client-orders.vue";

export default {
  name: "Home",
  data() {
    return {
      msg: "home vue"
    };
  },
  components: {
    ClientOrders
  }
};
</script>


    
