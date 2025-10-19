<template>
  <div class="">
    <div
      class="mt-1 card task"
      v-bind:key="index"
      v-for="(todo, index) in tabTodo"
    >
      {{ todo }}
      <div v-on:click="errTask(tabTodo, index)" class="erase btn btn-danger">
        X
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TacheApp',
  props: ['tabTodo', 'errTask'],
}
</script>

<style scoped>
.task {
  padding: 12px;
}
.erase {
  position: absolute;
  top: 5px;
  right: 5px;
}
</style>
