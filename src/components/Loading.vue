<template>
  <div class="body-loading">
    <div class="loading">
      <span>
        <img src="../assets/img/loading.png" alt="loading" />
      </span>
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
    }, 6000);
  }
};
</script>

<style scoped>
@import "../assets/scss/loading.css";
</style>