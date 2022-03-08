<script setup>
import { ref } from 'vue'

import Basic from '../components/Basic.vue'
import Computed from '../components/Computed.vue'
import Essential from '../components/Essential.vue'
import Cycle from '../components/Cycle.vue'
import Refdemo from '../components/Refdemo.vue'
import Father from '../components/provide/Father.vue'

const childrenText = ref('子组件还没有传值过来呢~')

function handleSon(sonValue) {
  console.log('父组件接收中...')
  childrenText.value = sonValue
}
</script>
<template>
  <div class="w-1/2 m-auto h-full p-6 bg-gray-600 text-gray-100">
    <Basic />
    <Computed />
    <Essential />
    <el-divider />
    <Cycle />
    <el-divider />
    <Father />
    <Refdemo title="abc" hello="123" @accept-son="handleSon">
      我是插槽我是插槽
      <template #propSlot="slotData">
        <div>{{ slotData.text }}</div>
        <div>{{ slotData.count }}</div>
      </template>
    </Refdemo>
    <div class="">{{ childrenText }}</div>
  </div>
</template>