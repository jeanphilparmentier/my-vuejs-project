<template>
  <footer class="bg-gray-800 p-8 relative z-0">
    <div class="flex">
      <div class="flex-grow">
        <span class="text-gray-500 text-sm font-bold">DEV</span>
        <ul class="mt-4 mb-6">
          <li class="flex-row text-gray-400 font-semibold text-sm-special mb-2">
            <a href="https://nbalovers.fr">Symfony</a>
          </li>
          <li class="flex-row text-gray-400 font-semibold text-sm-special mb-2">
            <a href="https://nbalovers.fr/download">React Native</a>
          </li>
          <li class="flex-row text-gray-400 font-semibold text-sm-special mb-2">
            <a href="https://jean-phil.gitlab.io/react/">React</a>
          </li>
          <li class="flex-row text-gray-400 font-semibold text-sm-special mb-2">
            <a href="https://jean-phil.gitlab.io/vuejs-3/">Vue 3</a>
          </li>
          <li class="flex-row text-gray-400 font-semibold text-sm-special mb-2">
            <a href="https://jp-parmentier-next.vercel.app/">Next</a>
          </li>
          <li class="flex-row text-gray-400 font-semibold text-sm-special mb-2">
            <a href="https://jean-phil.gitlab.io/nuxt/">Nuxt</a>
          </li>
          <li class="flex-row text-gray-400 font-semibold text-sm-special mb-2">
            <a href="https://rentacomic.ovh">Symfony (ancien)</a>
          </li>
          <li class="flex-row text-gray-400 font-semibold text-sm-special mb-2">
            <a href="https://jean-phil.gitlab.io/react-project/"
              >React (ancien)</a
            >
          </li>
          <li class="flex-row text-gray-400 font-semibold text-sm-special mb-2">
            <a href="https://jean-phil.gitlab.io/my-vuejs-project/"
              >Vue 2 (ancien)</a
            >
          </li>
          <li class="flex-row text-gray-400 font-semibold text-sm-special mb-2">
            <a href="https://old.nbalovers.fr">Php (ancien)</a>
          </li>
        </ul>
        <span class="text-gray-500 text-sm font-bold">APP</span>
        <ul class="mt-4 mb-6">
          <li class="flex-row text-gray-400 font-semibold text-sm-special mb-2">
            <a href="https://nbalovers.fr/download">Android</a>
          </li>
          <li class="flex-row text-gray-400 font-semibold text-sm-special mb-2">
            <a href="https://nbalovers.fr/download">iOS</a>
          </li>
        </ul>
      </div>
      <div class="flex-grow">
        <span class="text-gray-500 text-sm font-bold">CONTACT</span>
        <ul class="mt-4 mb-6">
          <li class="flex-row text-gray-400 font-semibold text-sm-special mb-2">
            <a href="https://www.linkedin.com/in/jean-philippe-parmentier/">
              LinkedIn
            </a>
          </li>
          <li class="flex-row text-gray-400 font-semibold text-sm-special mb-2">
            Contact
          </li>
        </ul>
        <span class="text-gray-500 text-sm font-bold">LEGAL</span>
        <ul class="mt-4 mb-6">
          <li class="flex-row text-gray-400 font-semibold text-sm-special mb-2">
            Terms of use
          </li>
          <li class="flex-row text-gray-400 font-semibold text-sm-special mb-2">
            Privacy policy
          </li>
          <li class="flex-row text-gray-400 font-semibold text-sm-special mb-2">
            Cookie policy
          </li>
        </ul>
      </div>
    </div>
    <div class="border-b border-b-gray-600 mb-2 mt-0 special-hr"></div>
    <p
      class="text-gray-300 rounded-md py-2 font-semibold special-p text-special"
    >
      © {{ currYear }} Jean-Philippe Parmentier - All right reserved
    </p>
  </footer>
</template>

<script>
const currYear = new Date().getFullYear()

export default {
  name: 'ContenuApp',
  data() {
    return {
      currYear,
    }
  },
}
</script>

<style scoped>
a {
  text-decoration: none !important;
}

.p-8 {
  padding: 2rem;
}
.bg-gray-800 {
  --tw-bg-opacity: 1;
  background-color: #343a40;
}
.z-0 {
  z-index: 0;
}
.relative {
  position: relative;
}
.flex {
  display: flex;
}
.flex-grow {
  flex-grow: 1;
}
.flex-row {
  flex-direction: row;
}
.text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}
.text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}
.text-gray-300 {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}

.font-bold {
  font-weight: 700;
}
.font-medium {
  font-weight: 500;
}
.font-semibold {
  font-weight: 600;
}
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.text-sm-special {
  font-size: 0.85rem;
}
.text-special {
  font-size: 0.96rem;
}
.text-base {
  font-size: 1rem; /* 16px */
  line-height: 1.5rem; /* 24px */
}
.mt-0 {
  margin-top: 0 !important;
}
.mt-4 {
  margin-top: 1rem !important;
}
.mb-2 {
  margin-bottom: 0.5rem !important;
}
.mb-6 {
  margin-bottom: 1.5rem;
}
.mb-8 {
  margin-bottom: 2rem;
}
.py-2 {
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
}
.rounded-md {
  border-radius: 0.375rem;
}
.special-p {
  margin-bottom: 0;
}
.special-hr {
  border-bottom: solid rgb(75 85 99) 1px;
}
footer {
  margin-top: 6rem;
}
ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}
footer a {
  color: inherit;
  text-decoration: inherit;
}
.border-b-gray-600 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(75 85 99 / var(--tw-border-opacity));
}
.border-b {
  border-bottom-width: 1px;
}
</style>
