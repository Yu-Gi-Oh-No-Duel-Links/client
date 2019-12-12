import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: "",
    roomName: "",
    errorMessage: "",
    roomList: [],
    room: {},
    as: "",
    cards: null
  },
  mutations: {
    SOCKET_SET_USER(state, username) {
      localStorage.setItem("username", username);
      state.username = username;
    },
    SOCKET_ERROR(state, error) {
      switch (error.name) {
        case "DuplicateUser":
          state.errorMessage = error.message;
          break;
        case "DuplicateRoom":
          state.errorMessage = error.message;
          break;

        default:
          break;
      }
    },
    CLEAR_ERROR(state) {
      state.errorMessage = "";
    },
    SOCKET_SET_ROOM_LIST(state, rooms) {
      state.roomList = rooms;
    },
    SOCKET_SET_ROOM_NAME(state, roomName) {
      state.roomName = roomName;
    },
    SOCKET_SET_ROOM(state, room) {
      state.room = room;
      if (room.player1.username == state.username) state.as = "player1";
      else if (room.player2.username == state.username) state.as = "player2";
    },
    SOCKET_SET_CARDS(state, cards) {
      state.cards = cards;
    }
  },
  actions: {},
  modules: {}
});
