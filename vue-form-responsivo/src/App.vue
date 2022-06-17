<template>
  <div id="app">
    <div class="main-card">
      <generic-title title="Team Sign up" />
      <router-view />
    </div>
  </div>
</template>

<script>
import GenericTitle from '@/components/atoms/GenericTitle.vue'
export default {
  name: "App",
  components:{
    GenericTitle
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");
body,
html {
  background-color: #e5e5e5;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 10vh;
}

.main-card {
  background-color: white;
  border-radius: 2vh;
  margin: auto;
  width: 50%;
  padding: 2vh;
  overflow: hidden;

  @media (min-width: 768px) {
    height: auto;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    height: auto;
  }
}
</style>
