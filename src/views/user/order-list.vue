<template>
  <div class="">
    <ClientOrders />

  </div>
</template>


<script>
import ClientOrders from "@/components/client-orders.vue";

export default {
  name: "OrderList",
  data() {
    return {
      msg: "home vue"
    };
  },
  components: {
    ClientOrders
  },
  created() {
    console.log("token", this.$store.state.token);
    // this.$axios
    //   .get("/user/index", {
    //     headers: { Authorization: "Bearer " + this.$store.state.token }
    //   })
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }
};
</script>
<style scoped>
.home {
  border: 1px solid red;
}
</style>

