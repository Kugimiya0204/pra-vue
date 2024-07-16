<script setup>
import { ref } from 'vue';

const text = ref('');

const fruits = ref([]);

const Picked = ref('');

function onInput(e) {
  text.value = e.target.value;
}
</script>

<template>
  <div style="margin-top: 5%">
    <input style="font-size: 20px" :value="text" @input="onInput" placeholder="Type here" />
    <p style="font-size: 20px; font-weight: 900">輸入的字串 :{{ text }}</p>
  </div>
  <div style="font-size: 20px">
    <h3>fruits : {{ fruits }}</h3>
    <input type="checkbox" value="Apple" v-model="fruits" />
    <label for="Apple">Apple</label>
    <input type="checkbox" value="Banana" v-model="fruits" />
    <label for="Banana">Banana</label>
    <input type="checkbox" value="Lemon" v-model="fruits" />
    <label for="Lemon">Lemon</label>
  </div>
  <div>
    <h3 :class="Picked">Picked the color your class want</h3>
    <input type="radio" value="yellow" v-model="Picked" />
    <label for="yellow">yellow</label>
    <input type="radio" value="red" v-model="Picked" />
    <label for="red">red</label>
    <input type="radio" value="blue" v-model="Picked" />
    <label for="blue">blue</label>
  </div>
</template>

<style scoped>
.red {
  color: red;
}
.yellow {
  color: yellow;
}
.blue {
  color: blue;
}
</style>
