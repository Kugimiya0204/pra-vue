<script setup>
import { RouterView, useRouter } from 'vue-router';
import { ref } from 'vue';

const route = useRouter();

const titlelist = ref([
  { name: '1.開始', value: '1' },
  { name: '2.声明式渲染', value: '2' },
  { name: '3.Attribute 绑定', value: '3' },
  { name: '4.事件监听', value: '4' },
  { name: '5.表单绑定', value: '5' },
  { name: '6.条件渲染', value: '6' },
  { name: '7.列表渲染', value: '7' },
  { name: '8.计算属性', value: '8' },
  { name: '9.生命周期和模板引用', value: '9' },
  { name: '10.侦听器', value: '10' },
  { name: '11.组件', value: '11' },
  { name: '12.Props', value: '12' },
  { name: '13.Emits', value: '13' },
  { name: '14.插槽', value: '14' },
  { name: '15.你做到了！', value: '15' }
]);

function changeRoute(e) {
  if (e.target.value != '') route.push(e.target.value);
}
</script>

<template>
  <header>
    <div style="width: 60%; text-align: center; border: solid black 2px; margin-left: 20%">
      <span style="font-size: 40px; font-weight: bolder; margin-right: 5%">Vue 前端練習筆記</span>
      <select
        style="font-size: 20px"
        name="pageOption"
        id="pageOption"
        v-on:change="changeRoute($event)"
      >
        <option value="">請選擇頁面</option>
        <option value="/">首頁</option>
        <option v-for="title in titlelist" :key="title" :value="`/PraVue${title.value}`">
          {{ title.name }}
        </option>
      </select>
    </div>
  </header>
  <div
    style="
      text-align: center;
      border: double black 4px;
      width: 80%;
      height: 500px;
      margin-top: 5%;
      margin-left: 10%;
      background-color: burlywood;
    "
  >
    <RouterView />
  </div>
</template>

<style scoped>
button {
  border: solid black 1px;
}
</style>
