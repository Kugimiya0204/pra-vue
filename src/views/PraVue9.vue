<script setup>
import { ref, onMounted } from 'vue';

const pElementRef = ref(null);

onMounted(() => {
  pElementRef.value.textContent = 'afterOnMounted';
});
</script>

<template>
  <p ref="pElementRef">Hello</p>
</template>
