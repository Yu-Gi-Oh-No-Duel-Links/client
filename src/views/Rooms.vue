<template>
  <div>
    <b-form inline @submit.prevent="createRoom">
      <b-form-input v-model="roomName"></b-form-input>
      <b-button>Create Room</b-button>
    </b-form>
    <table>
      <thead>
        <tr>
          <th>Room Name</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="room in roomList" :key="room">
          <td>{{ room }}</td>
          <td>
            <b-button
              variant="primary"
              @click="$socket.emit('join-room', room, username)"
              >Join</b-button
            >
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
      roomName: ""
    };
  },
  computed: {
    ...mapState(["roomList", "username"])
  },
  methods: {
    createRoom() {
      this.$socket.emit("create-room", this.roomName, this.username);
      this.roomName = "";
    }
  },
  created() {
    this.$socket.emit("fetch-rooms");
  }
};
</script>

<style></style>
