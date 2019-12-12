<template>
  <div></div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["roomName", "username"])
  },
  created() {
    this.$socket.emit("get-room-data", this.roomName, this.username);
  },
  beforeRouteLeave(to, from, next) {
    console.log("???");
    this.$socket.emit("leave-room", this.roomName, this.username);
    next();
  }
};
</script>

<style></style>
