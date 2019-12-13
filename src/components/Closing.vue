<template>
  <div class="close">
    <div v-if="$route.path == '/close'" class="fullscreen-video-wrap">
      <video
        id="vidio-bg"
        src="../assets/video/closecondition.mp4"
        autoplay="true"
      ></video>
    </div>
  </div>
</template>

<script>
export default {
  name: "Close"
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
