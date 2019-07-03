<template>
  <div>
    <AreaLists></AreaLists>
  </div>
</template>

<script>
import AreaLists from "@/components/areas";
export default {
  name: "area-list",

  data() {
    return {
      msg: "hello"
    };
  },
  components: {
    AreaLists
  }
};
</script>

<style scoped>
</style>
