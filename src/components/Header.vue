<template>
  <div class="header-top">
    <h1 class="d-inline mb-0">{{ titre }}</h1>
    <ul class="nav float-right">
      <li class="btn btn-primary btn-nav">
        <router-link to="/my-vuejs-project/" exact>Accueil</router-link>
      </li>
      <li class="btn btn-primary btn-nav">
        <router-link to="/my-vuejs-project/blog">Blog</router-link>
      </li>
      <li class="btn btn-primary btn-nav">
        <router-link to="/my-vuejs-project/meteo">App Météo</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { bus } from '../main'
export default {
  name: 'HeaderApp',
  data() {
    return {
      titre: 'Mon app Vue.js',
    }
  },
  beforeCreate() {
    console.log('Il va être créé !')
  },
  created() {
    console.log('Le composant est créé !')
    bus.$on('changeTitre', (data) => {
      this.titre = data
    })
  },
  beforeMount() {
    console.log('Il va être monté dans le DOM !')
  },
  mounted() {
    console.log('Il est intégré dans le DOM')
  },
  beforeUpdate() {
    console.log('Il va se mettre à jour')
  },
  updated() {
    console.log('Le composant s est mis à jour !')
  },
}
</script>

<style scoped>
.header-top {
  position: fixed;
  top: 0;
  background: linear-gradient(to right, #f8ffae, #43c6ac);
  width: 100%;
}
.btn-nav {
  margin: 5px;
}
.btn-nav a {
  color: #fff;
}
.btn-nav a:hover {
  color: #fff;
}
.router-link-active {
  color: red;
}
</style>
