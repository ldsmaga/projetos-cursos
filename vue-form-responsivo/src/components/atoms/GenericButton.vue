<template>
  <div>
    <button @click="func">{{ text }}</button>
  </div>
</template>
<script>
export default {
  props: {
    text: String,
    func: Function
  },
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");

button {
  @media only screen and (min-width: 768px) {
    font-family: "Roboto", sans-serif;
    color: #fff;
    width: 90px;
    height: 48px;
    background: #660099;
    border-radius: 4px;
    margin-top: 4%;
    float: right;
    position: relative;
    border-width: 0px;
    cursor: pointer;
    margin-right: 10%;
    font-weight: bold;
  }

  @media only screen and (max-width: 768px) {
    font-family: "Roboto", sans-serif;
    color: #fff;
    width: 80%;
    height: 48px;
    background: #660099;
    border-radius: 4px;
    margin-top: 4%;
    position: relative;
    border-width: 0px;
    cursor: pointer;
    margin-left: 8%;
    font-weight: bold;
  }
}
</style>