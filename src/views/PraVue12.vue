<script setup>
import { ref } from 'vue';
import ChildComp from '../components/12ChildComp.vue';

const greeting = ref('Hello from parent');

const deftext = ref('Test defineModel');
</script>

<template>
  <h1>Parents Comp</h1>
  <ChildComp :msg="greeting" v-model:defmodule="deftext" />
  <h3>The dertext = {{ deftext }}</h3>
</template>
