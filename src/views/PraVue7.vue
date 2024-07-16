<script setup>
import { ref } from 'vue';

// 给每个 todo 对象一个唯一的 id
let id = 0;

const newTodo = ref('');
const todos = ref([
  { id: id++, text: 'Learn HTML' },
  { id: id++, text: 'Learn JavaScript' },
  { id: id++, text: 'Learn Vue' }
]);

function addTodo() {
  // ...
  todos.value.push({
    id: id++,
    text: newTodo.value
  });
  newTodo.value = '';
}

function removeTodo(todo) {
  todos.value.splice(todo.id, 1);
}
</script>

<template>
  <div style="margin-top: 5%">
    <form @submit.prevent="addTodo">
      <input
        style="font-size: 20px; margin-right: 2%"
        v-model="newTodo"
        required
        placeholder="new todo"
      />
      <button style="font-size: 20px">Add Todo</button>
    </form>
    <ol>
      <li style="text-align: center" v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
        <button @click="removeTodo(todo)">delete</button>
      </li>
    </ol>
  </div>
</template>
