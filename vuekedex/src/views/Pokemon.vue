<template>
<div>
  <b-row>
    <b-col cols="5">
  <b-card
    no-body
    style="max-width: 40rem;"
    :img-src="pokemon.sprites.front_default"
    img-alt="Image"
    img-top
  >
    <template #header>
      <h4 class="mb-0 formataNome">{{$route.params.pokemon}}</h4>
    </template>

    <b-list-group flush  v-for="tipo in pokemon.types" :key="tipo.id">
      <b-list-group-item>{{tipo.type.name}}</b-list-group-item>
    </b-list-group>
    <b-card-body>

      <b-card-sub-title class="mb-2">Estatísticas:</b-card-sub-title>
      <b-card-text v-for="tipo in pokemon.stats" :key="tipo.id">
        {{tipo.stat.name}}:{{tipo.base_stat}}
      </b-card-text>
    </b-card-body>
  </b-card>
  </b-col>
    <b-col cols="6">
      <b-container >
  <b-row>
    <b-table striped hover :items="items"></b-table>
    <b-col sm="12" md="6" lg="4">
      <b-img thumbnail v-bind="mainProps" :src="pokemon.sprites.front_default"></b-img>
    </b-col>
    <b-col sm="12" md="6" lg="4">
      <b-img thumbnail v-bind="mainProps" src="@/assets/logo.jpg"></b-img>
    </b-col>
    <b-col sm="12" md="6" lg="4">
      <b-img thumbnail v-bind="mainProps" :src="pokemon.sprites.back_default"></b-img>
    </b-col>
  </b-row>
</b-container>
    </b-col>
    
  </b-row>
</div>
</template>

<script>
import api from "../services/api";
export default {
data(){
  return{
    pokemon: {
      sprites:{
        front_default: 'https://cdn-0.imagensemoldes.com.br/wp-content/uploads/2020/07/Figura-Loading-PNG.png',
        back_default: 'https://cdn-0.imagensemoldes.com.br/wp-content/uploads/2020/07/Figura-Loading-PNG.png'
      }
      },
        mainProps: {
          center: true,
          width: 250,
          class: 'mt-3'
        },
        fields: ['ability.name'],
        items: []
  }
},
  created() {
    let stringTratada = this.$route.params.pokemon.toLowerCase();
    
    api.get(`pokemon/${stringTratada}`).then((response) => {
      this.pokemon = response.data
      response.data.abilities.forEach(habilidade => {
      this.items.push({slot: habilidade.slot, ability: habilidade.ability.name})
      });
    })
    .catch(err=>{
      console.log(err)
      this.$vToastify.error("", "Pokémon não encontrado!"); 
      this.$router.push("/todos")
    });
  },
}
</script>

<style>
.formataNome {
  text-transform: lowercase;
}

.formataNome:first-letter {
    text-transform: uppercase;
}
</style>