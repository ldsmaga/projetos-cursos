<template>
  <div>
    <div class="container" fluid="xs">
      <b-row class="my-3">
        <b-col cols="12">
          <b-form-input
            id="input"
            v-model="search"
            placeholder="Filtrar nesta página..."
            class="mr-5"
            @keyup.enter="filtrar()"
          ></b-form-input>
        </b-col>
</b-row>
    </div>
    <div id="pokemon-list">
      <div :key="pokemon.url" v-for="(pokemon, index) in filteredPokemons">
        <Pokemon :index="index + 1" :name="pokemon.name" :url="pokemon.url" />
      </div>
      <p v-if="!this.filteredPokemons.length">{{ errorMsg }}</p>
    </div>
    <div class="container mb-5" id="expand-box-header">
      <span
        style="float: left; cursor: pointer; text-decoration: underline"
        v-if="previous != null"
        @click="irParaPaginaAnterior()"
        >← Voltar</span
      >
      <span
        style="float: right; cursor: pointer; text-decoration: underline"
        v-if="next != null"
        @click="irParaProximaPagina()"
        >Próximo →</span
      >
    </div>
  </div>
</template>

<script>
import Pokemon from "../components/Pokemon.vue";
import api from "../services/api";

export default {
  components: { Pokemon },
  data() {
    return {
      pokemons: [],
      filteredPokemons: [],
      search: "",
      errorMsg: "Nenhum pokémon encontrado nesta página!",
      next: null,
      previous: null,
    };
  },
  mounted() {
    api.get("pokemon").then((response) => {
      this.pokemons = response.data.results;
      this.next = response.data.next;
      this.previous = response.data.previous;

      if (this.$route.query.search) {
        this.filteredPokemons = this.pokemons.filter((pokemon) =>
          pokemon.name.includes(this.$route.query.search)
        );
      } else {
        this.filteredPokemons = response.data.results;
      }
    });
  },
  watch: {
    "$route.query.search": {
      handler(search) {
        this.search = search;
        if (this.search == "" || this.search == " ") {
          this.filteredPokemons = this.pokemons;
        } else {
          this.filteredPokemons = this.pokemons.filter((pokemon) =>
            pokemon.name.includes(this.search)
          );
        }
      },
    },
  },
  methods: {
    filtrar() {
      let path = "/todos?search=" + this.search;
      if (this.$route.path + "?search=" + this.$route.query.search !== path)
        this.$router.push(path);
    },
    irParaProximaPagina() {
      api.get(this.next).then((response) => {
        this.pokemons = response.data.results;
        this.next = response.data.next;
        this.previous = response.data.previous;
        this.filteredPokemons = response.data.results;
      });
    },
    irParaPaginaAnterior() {
      api.get(this.previous).then((response) => {
        this.pokemons = response.data.results;
        this.next = response.data.next;
        this.previous = response.data.previous;
        this.filteredPokemons = response.data.results;
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#pokemon-list {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
</style>