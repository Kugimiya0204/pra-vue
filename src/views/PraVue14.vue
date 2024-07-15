<script setup>
import { ref } from 'vue';
import ChildComp from '../components/14ChildComp.vue';

const msg = ref('from parent');
</script>

<template>
  <h1>If Parents have parament in slot</h1>
  <ChildComp>{{ msg }}</ChildComp>
  <h1>If Parents have not parament in slot</h1>
  <ChildComp></ChildComp>
</template>
