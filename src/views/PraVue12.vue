<script setup>
import { ref } from 'vue';
import ChildComp from '../components/12ChildComp.vue';

const greeting = ref('Hello from parent');
</script>

<template>
  <h1>Parents Comp</h1>
  <ChildComp :msg="greeting" />
</template>
