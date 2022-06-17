<template>
  <span class="simple-tab">{{ tabName }}</span>
</template>
<script>
export default {
  props: {
    tabName: String,
  },
};
</script>
<style lang="scss" scoped>
.simple-tab {
  margin-right: 4vh;
  margin-left: 10vh;

  @media screen and (max-width: 910px) {
    margin-right: 3vh;
    margin-left: 3vh;
  }
  @media screen and (max-width: 705px) {
    margin-right: 2vh;
    margin-left: 2vh;
  }
}

</style>