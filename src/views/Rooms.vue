<template>
  <div>
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
  computed: {
    ...mapState(["roomList", "username"])
  },
  created() {
    this.$socket.emit("fetch-rooms");
  }
};
</script>

<style></style>
