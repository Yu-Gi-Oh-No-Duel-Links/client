<template>
  <div class="main-loading">
    <div v-if="$route.path == '/loading'" class="fullscreen-video-wrap">
      <video
        id="vidio-bg"
        src="../assets/video/loading.mp4"
        muted
        autoplay="true"
        loop="true"
      ></video>
    </div>
    <div class="header-overlay"></div>
    <div class="body-loading">
      <div class="loading">
        <span>
          <img src="../assets/img/loading.png" alt="loading" />
          LOADING...
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading",
  methods: {
    goToHome() {
      this.$router.push("/home");
    }
  },
  created() {
    setTimeout(() => {
      this.goToHome();
    }, 15000);
  }
};
</script>

<style scoped>
@import "../assets/scss/loading.css";
</style>
