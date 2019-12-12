<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  created() {
    this.$router.replace("/");
    const username = localStorage.getItem("username");
    if (username) {
      this.$socket.emit("reconnect-user", username);
    }
  },
  computed: {
    ...mapState(["username", "roomName", "cards", "as", "errorMessage"])
  },
  watch: {
    username(val) {
      if (val)
        if (this.$route.path != "/rooms") this.$router.push("/rooms");
        else return;
      else this.$router.push("/");
    },
    roomName(val) {
      if (this.username)
        if (val)
          if (this.$route.path != `/rooms/${val}`)
            this.$router.push(`/rooms/${val}`);
          else return;
        else this.$router.replace("/rooms");
      else this.$router.replace("/");
    },
    cards(val) {
      if (val && val.length < 5) {
        this.$socket.emit("get-cards", this.roomName, this.as, val);
      }
    },
    errorMessage(val) {
      if (val) {
        this.$toasted.show(val);
        this.$store.commit("CLEAR_ERROR");
      }
    }
  }
};
</script>

<style>
#app {
  padding: 0px;
  margin: 0px;
}
</style>
