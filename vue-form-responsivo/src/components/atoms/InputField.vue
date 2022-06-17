<template>
  <div>
      <input :type="type" :placeholder="label" v-model="selected">
  </div>
</template>

<script>
export default {
props:{
  label: String,
  value: String,
  type: String
},
  computed: {
    selected: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      }
    }
}}
</script>

<style lang="scss" scoped>
input{
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


::placeholder {
  padding-left: 2vh;
  font-size: 80%;
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

.email-field{
    @media (min-width:768px) {
    width:74%;
    } 
    
    @media (max-width:768px) {
    width:100%;
    } 
}

.short-space{
    @media (min-width:768px) {
    margin-left: -8%;
    } 
}

.disabled{
    cursor: not-allowed;
    pointer-events: none;
}

</style>