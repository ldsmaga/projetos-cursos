<template>
    <div>
      <input type="checkbox" id="generic-text" name="generic-text" class="checkbox-layout" v-model="checked">
      <label for="generic-text">{{text}}</label>
    </div>
</template>

<script>
export default {
props:{
  text: String,
  value: Boolean
},
  computed: {
    checked: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      }
    }
}
}
</script>

<style lang="scss" scoped>
.checkbox-layout{
    margin-left: 7vh;
    margin-top: 4vh;
}
</style>