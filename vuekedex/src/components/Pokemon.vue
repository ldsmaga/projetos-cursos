<template>
  <div>
    <b-card
      id="card"
      class="mb-3 formataNome card"
      style="cursor: pointer; max-width: 20rem"
      :title="pokemon.id + '. ' + name"
      img-alt="Image"
      img-top
      tag="article"
    >
      <div class="card-image" @click="mudarImagem">
        <figure>
          <img :src="currentImg" />
        </figure>
      </div>
      <b-card-text>
        {{ pokemon.type }}
      </b-card-text>
      <b-button variant="outline-success" @click="$router.push(`/pokemon/${name}`)">Ver Pokémon</b-button>
    </b-card>
  </div>
</template>

<script>
import api from "../services/api";
export default {
  name: "Pokemon",
  props: {
    index: Number,
    name: String,
    url: String,
  },
  created() {
    api.get(this.url).then((response) => {
      this.pokemon.type = response.data.types[0].type.name;
      this.pokemon.id = response.data.id;
      this.pokemon.front = response.data.sprites.front_default;
      this.pokemon.back = response.data.sprites.back_default;
      this.currentImg = response.data.sprites.front_default;
    });
  },
  data() {
    return {
      isFront: true,
      currentImg: "",
      pokemon: {
        type: "",
        front: "",
        back: "",
        id: ""
      },
    };
  },
  methods: {
    mudarImagem() {
      if (this.isFront) {
        this.isFront = false;
        this.currentImg = this.pokemon.back;
      } else {
        this.isFront = true;
        this.currentImg = this.pokemon.front;
      }
    },
  },
};
</script>

<style>
.card {
  margin: 1vh;
}
.card-img-top {
  width: 100%;
  height: 10vw;
  object-fit: cover;
}
#card {
  width: 20rem;
}
.formataNome {
  text-transform: capitalize;
}
</style>