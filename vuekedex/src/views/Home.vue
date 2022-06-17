<template>
<div>
  <b-container>
    <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
    indicators
    img-width="1024"
    img-height="480"
    class="my-5"
  >
    <b-carousel-slide
      caption="Chame sua turma..."
      img-src="https://images.alphacoders.com/686/thumb-1920-686181.jpg"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="... acesse o acervo pokedéx..."
      img-src="https://c.wallhere.com/photos/a2/97/1600x900_px_pokemon-1204445.jpg!d"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="... e descubra um novo mundo!"
      img-src="https://mcdn.wallpapersafari.com/medium/69/98/LKb7rm.jpg"
    ></b-carousel-slide>
  </b-carousel>
  <img src="@/assets/logo.jpg" class="img-fluid imagem" height="250px">
  </b-container>
</div>
</template>

<script>
export default {
  name: 'Home',
}
</script>
<style scoped>
    .carousel-item img {
        height:100vh!important ;
    }
    .imagem{
      height: 250px;
    }
</style>
