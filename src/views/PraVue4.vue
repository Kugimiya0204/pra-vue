<script setup>
import { ref } from 'vue';

const count = ref(0);

function addcount() {
  count.value++;
}
function deccount() {
  count.value--;
}
function resetcount() {
  count.value = 0;
}
</script>

<template>
  <!-- 使此按钮生效 -->
  <button style="margin-top: 5%; font-size: 40px; border: solid black 2px" @click="addcount">
    Count is: {{ count }}
  </button>
  <div @keyup.up="addcount" @keyup.down="deccount" @keyup.enter="resetcount">
    <h3>使用上下鍵和enter控制count</h3>
    <input />
  </div>
</template>
