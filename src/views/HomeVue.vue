<template>
  <div
    style="
      width: 40%;
      text-align: center;
      font-size: 40px;
      font-weight: bolder;
      border: solid red 3px;
      margin-left: 30%;
      margin-top: 5%;
      background-color: orange;
    "
  >
    home
  </div>
  <h1>this is a pratice of Vue</h1>
  <a :href="url" style="font-size: 40px; border: solid black 1px">github</a>
</template>

<script setup>
const url = 'https://github.com/Kugimiya0204/pra-vue';
</script>

<style scoped></style>
