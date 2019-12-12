<template>
  <div class="home">
    <audio id="myAudio" controls autoplay loop style="display:none;">
      <source src="../assets/audio/home.mp3" type="audio/mpeg" />
    </audio>
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
  name: "Home",
  data() {
    return {
      username: ""
    };
  },
  methods: {
    submitUsername() {
      this.$socket.emit("register-user", this.username);
      this.username = "";
    }
  }
};
</script>
<style scoped>
@import "../assets/scss/home.css";
</style>
