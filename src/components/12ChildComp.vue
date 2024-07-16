<script setup>
const props = defineProps({
  msg: String
});
const defmodule = defineModel('defmodule');
</script>

<template>
  <h2>{{ props.msg || 'No props passed yet' }}</h2>
  <input type="text" v-model="defmodule" />
</template>
