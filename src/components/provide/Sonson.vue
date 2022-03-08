<script setup>
import Sonsonson from './Sonsonson.vue'
import { useMouse } from '../../hooks/mouse'

const { x, y } = useMouse()
</script>
<template>
  <div class="border-2 border-yellow-500">
    <span class="colorful-title">
      第2层子组件
    </span>
    <span>鼠标位置：{{ x }} - {{ y }}</span>
    <Sonsonson />
  </div>
</template>