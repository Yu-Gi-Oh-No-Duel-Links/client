<template>
  <div class="home">
    <h1>NO</h1>
    <div class="btn-username">
      <form id="form-input" @submit.prevent="submitUsername">
        <input id="input" v-model="username" placeholder="Input Username" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      username: ""
    };
  },
  methods: {
    submitUsername() {
      alert(this.username);
      this.username = "";
    }
  }
};
</script>
<style scoped>
@import "../assets/scss/home.css";
</style>
