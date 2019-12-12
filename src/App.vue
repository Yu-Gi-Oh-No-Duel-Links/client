<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    this.$router.replace("/");
    const username = localStorage.getItem("username");
    if (username) {
      this.$socket.emit("reconnect-user", username);
    }
  },
  computed: {
    username() {
      return this.$store.state.username;
    },
    roomName() {
      return this.$store.state.roomName;
    },
    cards() {
      return this.$store.state.cards;
    },
    as() {
      return this.$store.state.as;
    },
    errorMessage() {
      return this.$store.state.errorMessage;
    }
  },
  watch: {
    username(val) {
      if (val)
        if (this.$route.path != "/rooms") this.$router.push("/rooms");
        else return;
      else this.$router.push("/");
    },
    roomName(val) {
      if (val && this.username)
        if (this.$route.path != `/rooms/${val}`)
          this.$router.push(`/rooms/${val}`);
        else return;
      else this.$route.path != `/`;
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
    // room(val) {
    //   if (val && this.username)
    //     if (this.$route.path != `/rooms/${val}`)
    //       this.$router.push(`/rooms/${val}`);
    //     else return;
    //   else this.$route.path != `/`;
    // }
  }
};
</script>

<style>
#app {
  padding: 0px;
  margin: 0px;
}
</style>
