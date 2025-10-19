<template>
  <div class="container mt-5">
    <h1 class="prez">Les articles de blog</h1>
    <hr />
    <ul>
      <li v-bind:key="index" v-for="(article, index) in allArticles">
        <router-link :to="`/my-vuejs-project/blogpost/${index + 1}`">
          <div class="card m-2">
            <h3>{{ article.title }}</h3>
          </div>
        </router-link>
      </li>
    </ul>
    <div v-on:click="goDebut" class="btn btn-warning">Retour au début</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Page1App',
  methods: {
    goDebut: function () {
      this.$router.push('/')
    },
  },
  data() {
    return {
      allArticles: [],
    }
  },
  created() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((reponse) => {
      console.log(reponse)
      for (const blogPost of reponse.data) {
        this.allArticles.push(blogPost)
      }
    })
  },
}
</script>

<style scoped>
.prez {
  margin-top: 130px;
}
ul {
  padding-left: 0px;
}
li {
  list-style-type: none;
}
</style>
