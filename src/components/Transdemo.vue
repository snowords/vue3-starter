<script setup>
import { ref } from 'vue'

const getInitialItems = () => [1, 2, 3, 4, 5]
const items = ref(getInitialItems())
let id = items.value.length + 1

function insert() {
  const i = Math.round(Math.random() * items.value.length)
  items.value.splice(i, 0, id++)
}

function reset() {
  items.value = getInitialItems()
}

function shuffle() {
  items.value = items.value.sort(() => Math.random() - 0.5)
}

function remove(item) {
  const i = items.value.indexOf(item)
  if (i > -1) {
    items.value.splice(i, 1)
  }
}
</script>

<template>
  <el-button type="success" @click="insert">随机插入</el-button>
  <el-button type="success" @click="reset">清除</el-button>
  <el-button type="success" @click="shuffle">打乱</el-button>

  <TransitionGroup tag="ul" name="fade">
    <li v-for="item in items" class="m-2" :key="item">
      {{ item }}
      <el-button @click="remove(item)">x</el-button>
    </li>
  </TransitionGroup>
</template>

<style>
/* 1. declare transition */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.fade-leave-active {
  position: absolute;
}
</style>