<script setup>
import { ref } from 'vue';

const awesome = ref(true);

function toggle() {
  awesome.value = !awesome.value;
}
</script>

<template>
  <div style="margin-top: 5%">
    <button style="font-size: 20px" @click="toggle">Toggle</button>
    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-if="!awesome">Oh no 😢</h1>
  </div>
</template>
