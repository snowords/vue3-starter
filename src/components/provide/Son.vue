<script setup>
import Sonson from './Sonson.vue'
import { ref } from 'vue'
const showSon = ref(true)

</script>
<template>
  <div class="border-2 border-yellow-500">
    <span class="colorful-title">
      第1层子组件
    </span>
    <el-button type="success" @click="showSon = !showSon">
      {{ showSon ? '隐藏内容' : '显示内容' }}
    </el-button>
    <Transition name="fade">
      <Sonson v-if="showSon"/>
    </Transition>
  </div>
</template>
<style>
.fade-enter-active {
  transition: all 0.3s ease-out;
}

.fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>