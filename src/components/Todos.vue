<template>
  <div>
    <h3>Todos</h3>
    <div class="legend">
      <span>Double click to mark as complete</span>
      <span> <span class="incomplete-box"></span> = Incomplete </span>
      <span> <span class="complete-box"></span> = Complete </span>
    </div>
    <div class="todos">
      <!-- For in Vue, use v-for and v-bind:key -->
      <div
        @dblclick="onDblClick(todo)"
        v-for="todo in allTodos"
        :key="todo.id"
        class="todo"
        v-bind:class="{ 'is-complete': todo.completed }"
      >
        {{ todo.title }}
        <button @click="deleteTodo(todo.id)">hapus</button>
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
    ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),
    onDblClick(todo) {
      const updTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed,
      };
      this.updateTodo(updTodo);
    },
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

button {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #ffff;
  background-color: red;
  cursor: pointer;
}

.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}

.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #19456b;
}

.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #16c79a;
}

.is-complete {
  background-color: #19456b;
  color: #fff;
}
@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>