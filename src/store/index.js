import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: "",
    roomName: "",
    errorMessage: "",
    roomList: []
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

        default:
          break;
      }
    },
    CLEAR_ERROR(state) {
      state.errorMessage = "";
    },
    SOCKET_SET_ROOM_LIST(state, rooms) {
      state.roomList = rooms;
    }
  },
  actions: {},
  modules: {}
});
