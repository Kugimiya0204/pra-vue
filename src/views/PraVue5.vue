<script setup>
import { ref } from 'vue';

const text = ref('');

function onInput(e) {
  text.value = e.target.value;
}
</script>

<template>
  <input :value="text" @input="onInput" placeholder="Type here" />
  <p>輸入的字串 :{{ text }}</p>
</template>
