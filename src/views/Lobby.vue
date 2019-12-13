<template>
  <div id="lobby">
    <h4>Select One Room</h4>
    <table class="table mx-auto" id="lobbyTable">
      <thead>
        <tr>
          <th scope="col">Rooms</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="room in roomList" :key="room">
          <td>{{ room }}</td>
          <td>
            <button id="start-btn" v-on:click="enterRoom(room)">
              Enter Room
            </button>
          </td>
        </tr>
      </tbody>
    </table>
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
#lobby {
  background: url("../assets/img/lobby.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100vh;
  padding-top: 80px;
}

#lobbyTable {
  border: 1px solid black;
  width: 60%;
}

#start-btn {
  text-align: center;
  display: inline-block;
  margin: 5px;
  font-weight: bold;
  padding: 10px 0 10px 10px;
  background-color: lightgray;
  text-shadow: -1px -1px black, 1px 1px white;
  color: gray;
  border-radius: 7px;
  box-shadow: 0 0.2em gray;
  cursor: pointer;
}

#start-btn:hover {
  background-color: red;
  box-shadow: none;
  position: relative;
  top: 0.2em;
}

#start-btn:active {
  box-shadow: none;
  position: relative;
  top: 0.2em;
}
</style>
