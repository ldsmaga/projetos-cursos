<template>
<div>
  <b-navbar toggleable="lg" type="dark" style="background-color: #3EC46D">
      <b-container>
    <b-navbar-brand href="/">Vuekédex!</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form @submit.prevent="pesquisar()">
          <b-nav-item href="/todos">Ver Todos</b-nav-item>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
    </b-container>
  </b-navbar>
</div>
</template>

<script>
export default {
  name: 'Home',
}
</script>