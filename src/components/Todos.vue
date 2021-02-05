<template>
  <div>
    <h3>Todos</h3>
    <div class="todos">
      <!-- For in Vue, use v-for and v-bind:key -->
      <div v-for="todo in allTodos" :key="todo.id" class="todo">
        {{ todo.title }}
      </div>
    </div>
  </div>
</template>

<script>
// Import mapGatters vuex
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Todos",
  methods: {
    //   binding namespace module
    ...mapActions(["fetchTodos"]),
  },
  computed: mapGetters(["allTodos"]),
  created() {
    this.fetchTodos();
  },
};
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.todo {
  border: 1px solid #ccc;
  background: #16c79a;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
</style>