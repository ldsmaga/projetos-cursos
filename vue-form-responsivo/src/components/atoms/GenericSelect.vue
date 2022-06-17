<template>
  <div>
    <select class="main-select" name="select" v-model="selected">
      <option value="" disabled selected>{{ label }}</option>
      <option v-for="option in options" :key="option.id" :value="option.id ? option.id : option">
        {{option.name ? option.name : option}}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props:{
    label: String,
    options: Array
  },
  computed: {
    selected: {
      get() {
        return '';
      },
      set(val) {
        this.$emit('input', val);
      }
    }
}};
</script>

<style lang="scss" scoped>
.main-select{
background: #FFFFFF;
border: 0.8px solid #DDDDDD;
border-radius: 4px;

width: 85%;
height: 72px;

font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 20px;
line-height: 24px;

margin-left: 5vh;
margin-top: 4vh;
padding-left: 2vh;
text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;
}

.same-line {
    @media (min-width:768px) {
    display: inline-block;
    } 
}

.short-field{
    @media (min-width:768px) {
    width:22%;
    } 
    
    @media (max-width:768px) {
    width:100%;
    } 
}
</style>