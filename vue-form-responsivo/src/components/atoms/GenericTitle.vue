<template>
  <div>
      <h1>{{title}}</h1>
  </div>
</template>
<script>
export default {
  props: {
    title: String
  }
}
</script>
<style lang="scss" scoped>
h1{
  font-family: 'Roboto', sans-serif;
  margin: 2vh;
  padding: 5vh;
}
</style>