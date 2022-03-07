<script setup>
import { ref } from 'vue'
// import HelloWorld from './components/HelloWorld.vue'
import Basic from './components/Basic.vue'
import Computed from './components/Computed.vue'
import Essential from './components/Essential.vue'
import Cycle from './components/Cycle.vue'
import Refdemo from './components/Refdemo.vue'

const childrenText = ref('子组件还没有传值过来呢~')

function handleSon(sonValue) {
  console.log('父组件接收中...')
  childrenText.value = sonValue
}
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld class="" msg="Hello Vue 3 + Vite" /> -->
  <div class="w-1/2 m-auto h-full p-4 bg-gray-600 text-gray-100">
    <Basic />
    <el-divider />
    <Computed />
    <el-divider />
    <Essential />
    <el-divider />
    <Cycle />
  </div>
  <Refdemo title="我的 Vue 学习之旅" @accept-son="handleSon" />
  <div class="">{{ childrenText }}</div>
</template>
