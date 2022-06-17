<template>
  <div>
    {{ greeting }}
  </div>
</template>

<script>
export default {
  name: "Greeting-ok",

  data() {
    return {
      greeting: "Vue and TDD"
    }
  }
}
</script>