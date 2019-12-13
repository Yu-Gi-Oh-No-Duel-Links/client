<template>
  <div>
    <div v-if="$route.path == '/'" class="fullscreen-video-wrap">
      <video
        id="vidio-bg"
        src="../assets/video/opyugi.mp4"
        autoplay="true"
      ></video>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Opening",
  data() {
    return {
      timeout: null
    };
  },
  methods: {
    goToLoading() {
      this.$router.push("/loading");
    }
  },
  created() {
    this.timeout = setTimeout(() => {
      this.goToLoading();
    }, 3000);
  },
  beforeRouteLeave(to, from, next) {
    clearTimeout(this.timeout);
    next();
  }
};
</script>

<style scoped>
.fullscreen-video-wrap {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.fullscreen-video-wrap video {
  min-height: 100%;
  min-width: 100%;
}
</style>
