<template>
  <div>
    <contenu></contenu>
  </div>
</template>

<script>
import Contenu from './Contenu.vue'
export default {
  name: 'AccueilApp',
  components: {
    contenu: Contenu,
  },
}
</script>

<style scoped>
.prez {
  margin-top: 130px;
}
</style>
