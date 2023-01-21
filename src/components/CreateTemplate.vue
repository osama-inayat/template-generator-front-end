<template>
  <div class="about">
    <h1>{{ msg }}</h1>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      msg: "Osama inayat testing",
    };
  },
  mounted() {
    this.test();
  },
  methods: {
    test() {
      axios
        .get("http://localhost:3000/greetings/hello")
        .then((response) => {
          this.msg = response.data.name;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style></style>
