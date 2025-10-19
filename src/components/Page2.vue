<template>
  <div class="container prez mb-5">
    <h1 class="my-4">App météo avec Vue.js</h1>
    <div class="form-groupe mb-5">
      <label for="position"
        >Entrez le nom d'un ville (puis appuyez sur entrée).</label
      >
      <input
        id="position"
        type="text"
        class="form-control"
        v-model="requete"
        @keypress.enter="goMeteo"
      />
    </div>
    <div class="w-75 m-auto" v-if="temps">
      <h3 class="text-center mb-3">Position: {{ temps.name }}</h3>
      <div class="card text-center p-5">
        <p class="texte-affichage">Temperature : {{ temps.main.temp }}°C</p>
        <p class="texte-affichage">
          Temps : {{ temps.weather[0].description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Page2App',
  data() {
    return {
      requete: '',
      temps: undefined,
      api_code: '2da262758baa989109486cad29e5d046',
      url_recherche: 'https://api.openweathermap.org/data/2.5/weather?',
    }
  },
  methods: {
    goMeteo() {
      axios
        .get(
          `${this.url_recherche}q=${this.requete}&units=metric&APPID=${this.api_code}&lang=fr`
        )
        .then((reponse) => {
          console.log(reponse)
          this.temps = reponse.data
        })
      this.requete = ''
    },
  },
}
</script>

<style scoped>
.prez {
  margin-top: 130px;
}
.texte-affichage {
  font-size: 40px;
  font-weight: 300;
  line-height: 1.2;
}
</style>
