<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Basic from './components/Basic.vue'
import Computed from './components/Computed.vue'
import Essential from './components/Essential.vue'
import Cycle from './components/Cycle.vue'

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
</template>
