<template>
  <div id="app">
    <router-view></router-view>
    <header-top></header-top>
    <footer-bot></footer-bot>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    'header-top': Header,
    'footer-bot': Footer,
  },
}
</script>

<style>
body {
  background: #43c6ac;
  background: linear-gradient(to right, #f8ffae, #43c6ac);
}
</style>
