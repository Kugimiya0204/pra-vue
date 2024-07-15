<script setup>
import { ref } from 'vue';
import ChildComp from '../components/13ChildComp.vue';

const childMsg = ref('No child msg yet');
</script>

<template>
  <h1>Parents Comp</h1>
  <ChildComp
    @response="
      (msg) => {
        childMsg = msg;
      }
    "
  />
  <p>{{ childMsg }}</p>
</template>
