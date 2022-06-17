<template>
  <div>
  <div class="footer">
    <p class="text-center">Leandro Diniz, {{ano}}. Todos os direitos reservados.</p>
  </div>
</div>
</template>

<script>
export default {
data(){
    return{
        ano: ''
    }
},
mounted(){
    this.getYear();
},
methods:{
    getYear(){
        let data = new Date();
        let ano = data.getFullYear();
        this.ano = ano;
    }
}
}
</script>

<style>
.footer {
    background-color: #EBF5F0;
    position: fixed;
    bottom: 0;
    width: 100%;
    color: #000;
}
</style>