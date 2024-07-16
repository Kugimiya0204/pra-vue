<script setup>
import { ref } from 'vue';

const titleClass = ref('title');
const isShow = ref(true);

function toggle() {
  isShow.value = !isShow.value;
}
</script>

<template>
  <h1 :class="[isShow ? titleClass : '']">Make me red</h1>
  <button style="font-size: 20px" @click="toggle">toggle</button>
</template>

<style>
.title {
  color: red;
}
</style>
