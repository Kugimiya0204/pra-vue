<script setup>
import { ref } from 'vue';

const count = ref(0);

function addcount() {
  count.value++;
}
</script>

<template>
  <!-- 使此按钮生效 -->
  <button style="margin-top: 5%; font-size: 40px; border: solid black 2px" @click="addcount">
    Count is: {{ count }}
  </button>
</template>
