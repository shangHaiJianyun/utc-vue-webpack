<template>

  <div class="home">
    <h2>Show Dists</h2>
    <!-- Content here -->
    <b-row class="text-center">
      <b-col cols="3">filter</b-col>
      <b-col cols="9">
        results
        <b-table striped hover :items="items"></b-table>
      </b-col>
    </b-row>
    <a href="javascript:;" class="log-btn" @click="showtocken">showtocken</a>

  </div>

</template>

<script>
const items = [
  { isActive: true, age: 40, first_name: "Dickerson", last_name: "Macdonald" },
  { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw" },
  { isActive: false, age: 89, first_name: "Geneva", last_name: "Wilson" },
  { isActive: true, age: 38, first_name: "Jami", last_name: "Carney" }
];
export default {
  name: "ShowDists",
  data() {
    return {
      items: items
    };
  },
  methods: {
    showtocken: function() {
      console.log("token in session", this.$store.state.token);
      var c = this.getCookie("session");
      console.log("show cookie", c);
    }
  }
};
</script>