<script setup>
import Son from './Son.vue'
import { provide } from 'vue'
import { ref } from 'vue'

const msg = ref('我是穿梭的数据')

// 如果需要更改注入的数据，将函数写在内部
function updateMsg() {
  msg.value = '修改穿梭的数据' + Math.floor(Math.random() * 100)
}

provide('passMassage',{
  msg,
  updateMsg
})
</script>
<template>
  <span class="colorful-title">注入-提取</span>
  根组件：{{ msg }}
  <Son />
</template>