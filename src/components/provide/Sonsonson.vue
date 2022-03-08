<script setup>
import { inject } from 'vue'
const { msg, updateMsg } = inject('passMassage')

</script>
<template>
  <div class="border-2 border-yellow-500">
    <span class="colorful-title">
      第3层子组件
    </span>
    {{ msg }}
    <el-button type="success" @click="updateMsg">
      更新穿梭的数据
    </el-button>
  </div>
</template>