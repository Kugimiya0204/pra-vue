<template>
  <h1>inputstr = {{ inputstr }}</h1>
  <h1>A Map Ref</h1>
  <button @click="mutateDeeply">addmap</button>
  <h3>{{ obj.nested }}</h3>
  <h3>{{ obj.arr }}</h3>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

var inputstr = ref('Make me dynamic!');

const obj = ref({
  nested: { count: 0 },
  arr: ['foo', 'bar']
});

function mutateDeeply() {
  // 以下都會按照期望工作
  obj.value.nested.count++;
  obj.value.arr.push('baz');
}
</script>

<style></style>
