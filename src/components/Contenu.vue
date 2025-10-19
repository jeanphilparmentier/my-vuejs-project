<template>
  <div class="container mt-5">
    <h1>Rentrez des choses à faire</h1>
    <form>
      <label for="todo">To Do</label>
      <input
        v-on:input="toggleResult"
        v-model="formData.task"
        type="txt"
        id="todo"
        class="form-control"
      />
      <button v-on:click.prevent="envoiDo" class="btn btn-primary mt-3">
        Créer une tache
      </button>
    </form>
    <tache v-bind:tabTodo="tabTodo" :errTask="errTask"></tache>
    <h1>Notre premier formulaire</h1>
    <form>
      <div class="form-groupe">
        <label for="prenom">Ton prénom</label>
        <input
          v-on:input="toggleResult"
          v-model="formData.prenom"
          type="txt"
          id="prenom"
          class="form-control"
        />
      </div>
      <div class="form-groupe">
        <label for="text">Ton texte</label>
        <textarea
          v-model="formData.text"
          type="text"
          id="text"
          class="form-control"
        ></textarea>
      </div>
      <h3>Select Box</h3>
      <select v-model="formData.select">
        <option v-bind:key="index" v-for="(pays, index) in formData.listePays">
          {{ pays }}
        </option>
      </select>
      <h3 class="mt-3">CheckBoxs</h3>
      <div class="form-check">
        <input
          v-model="formData.checkFruits"
          value="fraise"
          id="fraise"
          type="checkbox"
          class="form-check-input"
        />
        <label for="fraise">Fraise</label>
      </div>
      <div class="form-check">
        <input
          v-model="formData.checkFruits"
          value="pomme"
          id="pomme"
          type="checkbox"
          class="form-check-input"
        />
        <label for="pomme">Pomme</label>
      </div>
      <div class="form-check">
        <input
          v-model="formData.checkFruits"
          value="cerises"
          id="cerises"
          type="checkbox"
          class="form-check-input"
        />
        <label for="cerises">Cerises</label>
      </div>
      <button v-on:click.prevent="envoiForm" class="btn btn-primary mt-3">
        Envoyer les données
      </button>
    </form>
    <br />
    <div v-if="infoSubmit">
      <h2>Résultats</h2>
      <div class="card p-3">
        <p>Prénom : {{ formData.prenom }}</p>
        <p style="white-space: pre">Texte : {{ formData.text }}</p>

        <p>Résultats checkboxs</p>
        <ul>
          <li v-bind:key="index" v-for="(fruit, index) in formData.checkFruits">
            {{ fruit }}
          </li>
        </ul>
        <p>Choix du select : {{ formData.select }}</p>
      </div>
    </div>
    <h1>{{ titre }}</h1>
    <img class="w-100 mb-1" v-bind:src="urlImg" alt="" />
    <div class="btn btn-outline-primary mr-2" v-on:click="component = 'texte1'">
      Onglet 1
    </div>
    <div class="btn btn-outline-primary mr-2" v-on:click="component = 'texte2'">
      Onglet 2
    </div>
    <div class="onglets card mb-5 mt-1">
      <component class="p-5 over-f" v-bind:is="component"></component>
    </div>

    <modal v-bind:reveal="reveal" :toggle-modal="toggleModal"></modal>
    <div class="btn btn-success mb-3" v-on:click="toggleModal">
      Ouvre la modale
    </div>
  </div>
</template>

<script>
import Texte1 from './Texte1'
import Texte2 from './Texte2'
import Modal from './Modal'
import axios from 'axios'
import Tache from './Tache'

export default {
  name: 'ContenuApp',
  data() {
    return {
      myArr: [
        { titre: 'Inception', date: 2010 },
        { titre: 'Avatar', date: 2009 },
        { titre: 'Seven', date: 1995 },
      ],
      txt: 'Hello World',
      titre: 'Appel à une API',
      toggle1: true,
      toggle2: false,
      component: 'texte1',
      reveal: false,
      modal: 'modal',
      urlImg: null,
      formData: {
        prenom: '',
        text: '',
        checkFruits: [],
        select: '',
        listePays: ['Russie', 'Japon', 'Canada', 'Mexique'],
        task: '',
      },
      tabTodo: ['JavaScript', 'Vue', 'React', 'Angular', 'Php'],

      infoSubmit: false,
    }
  },
  methods: {
    toggleOng1: function () {
      (this.toggle1 = true), (this.toggle2 = false)
    },
    toggleOng2: function () {
      (this.toggle2 = true), (this.toggle1 = false)
    },
    toggleModal: function () {
      this.reveal = !this.reveal
      console.log(this.reveal)
    },
    envoiForm: function () {
      this.infoSubmit = true
    },
    toggleResult: function () {
      this.infoSubmit = false
    },
    errTask: function (tabTodo, index) {
      tabTodo.splice(index, 1)
    },
    envoiDo: function () {
      this.tabTodo.push(this.formData.task)
      this.formData.task = ''
    },
  },
  mounted() {
    axios.get('https://api.thecatapi.com/v1/images/search').then((reponse) => {
      console.log(reponse)
      this.urlImg = reponse.data[0].url
    })
  },
  components: {
    texte1: Texte1,
    texte2: Texte2,
    modal: Modal,
    tache: Tache,
  },
}
</script>

<style scoped>
h1 {
  margin-top: 130px !important;
}
.onglets {
  height: 300px;
}
.over-f {
  overflow: auto;
}
</style>
