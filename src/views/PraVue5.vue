<script setup>
import { ref } from 'vue';

const text = ref('');

function onInput(e) {
  text.value = e.target.value;
}
</script>

<template>
  <div style="margin-top: 5%">
    <input style="font-size: 30px" :value="text" @input="onInput" placeholder="Type here" />
    <p style="font-size: 30px; font-weight: 900">輸入的字串 :{{ text }}</p>
  </div>
</template>
