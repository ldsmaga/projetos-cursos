<template>
  <div>
    <div class="simple-divider"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.simple-divider {
  @media (min-width: 768px) {
    width: 80%;
    height: 1px;
    margin-left: 8vh;
    margin-right: 8vh;
    margin-top: 2vh;

    background: rgba(196, 196, 196, 0.5);
  }

  @media (max-width: 768px) {
    width: 80%;
    height: 1px;
    margin-left: 8vh;
    margin-right: 8vh;
    margin-top: 2vh;

    background: rgba(196, 196, 196, 0.5);
  }
}
</style>