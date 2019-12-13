<template>
  <div class="lobby">
    <audio id="myAudio" controls autoplay loop style="display:none;">
      <source src="../assets/audio/home.mp3" type="audio/mpeg" />
    </audio>
    <h2 class="text-center">Create New Room</h2>
    <div class="btn-roomname">
      <form id="form-input" @submit.prevent="submitUsername">
        <input id="input" v-model="username" placeholder="Input Room Name" />
      </form>
    </div>
    <hr />
    <h2 class="text-center mt-3">Room List</h2>
    <div id="roomlist" class="mx-auto">
      <table id="lobby-table" class="mx-auto">
        <tr>
          <td>Room coba-coba</td>
          <td><button class="start-btn">Enter Room</button></td>
        </tr>
        <tr>
          <td>Room bikin-bikin</td>
          <td><button class="start-btn">Enter Room</button></td>
        </tr>
        <tr>
          <td>Room bikin-bikin</td>
          <td><button class="start-btn">Enter Room</button></td>
        </tr>
        <tr>
          <td>Room bikin-bikin</td>
          <td><button class="start-btn">Enter Room</button></td>
        </tr>
        <tr>
          <td>Room bikin-bikin</td>
          <td><button class="start-btn">Enter Room</button></td>
        </tr>
        <tr>
          <td>Room bikin-bikin</td>
          <td><button class="start-btn">Enter Room</button></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      selectedRoom: ""
    };
  },
  computed: {
    ...mapState(["roomList", "username"])
  },
  methods: {
    enterRoom(roomName) {
      this.$socket.emit("join-room", roomName, this.username);
      // console.log("selectRoom");
      // this.selectedRoom = roomName;
      // console.log("this.selectedRoom => ", this.selectedRoom);
    }
  },
  created() {
    this.$socket.emit("fetch-rooms");
  }
};
</script>

<style scoped>
@import "../assets/css/lobby.css";
</style>
