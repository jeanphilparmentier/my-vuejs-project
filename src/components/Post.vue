<template>
  <div>
    <h1 class="prez">Le post numéro {{ id }}</h1>
    <div>
      <h2>{{ articleUnique.title }}</h2>
      <br />
      <p>
        {{ articleUnique.body }}
      </p>
    </div>
    <div v-on:click="goDebut" class="btn btn-warning">Retour au début</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'PostApp',
  methods: {
    goDebut: function () {
      this.$router.push('/my-vuejs-project/blog')
    },
  },
  data() {
    return {
      id: this.$route.params.id,
      articleUnique: [],
    }
  },
  mounted() {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
      .then((reponse) => {
        console.log(reponse)
        this.articleUnique = reponse.data
      })
  },
}
</script>

<style scoped>
.prez {
  margin-top: 71px;
}
</style>
