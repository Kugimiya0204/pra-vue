<script setup>
const props = defineProps({
  msg: String
});
</script>

<template>
  <h2>{{ props.msg || 'No props passed yet' }}</h2>
</template>
