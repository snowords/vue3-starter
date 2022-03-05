<script setup>
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import Basic from './components/Basic.vue'
import Refdemo from './components/Refdemo.vue'
const childrenText = ref('子组件还没有传值过来呢~')

function handleSon(sonValue) {
  console.log('父组件接收中...')
  childrenText.value = sonValue
}
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <HelloWorld class="" msg="Hello Vue 3 + Vite" />
  <Basic />
  <Refdemo title="我的 Vue 学习之旅" @accept-son="handleSon" />
  <div class="">{{ childrenText }}</div>
</template>
