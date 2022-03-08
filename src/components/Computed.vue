<script setup>
import { reactive, computed, ref } from 'vue'

const author = {
  name: 'John Doe',
  books: ref([
    'The Hobbit',
    'The Lord of the Rings'
  ])
}
const publishedBook = computed(() => {
  return author.books.value.length > 0 ? 'Yes' : 'No'
})

const firstName = ref('John')
const lastName = ref('Barden')
const nameList = [
  'Stephen Curry',
  'Kevin Durant',
  'Kobe Bryant',
  'Michael Jordan',
  'Lebron James'
]
// 可写计算属性
const fullName = computed({
  get() {
    return firstName.value + ' - ' + lastName.value
  },
  set(newValue) {
    [firstName.value, lastName.value] = newValue.split(' ')
  }
})

function changeName() {
  // 从数组中随机取一个名字
  fullName.value = nameList[Math.floor(Math.random() * nameList.length)]
}

// 动态绑定样式
const styleObject = ref({
  color: 'red',
  fontSize: '16px'
})
// 不会更新，因为Date.now()不是一个响应式依赖
// const now = computed(() => Date.now())
</script>

<template>
  <div class="colorful-title">计算属性</div>
  <div>有推送的书本：</div>
  <div>{{ publishedBook }}</div>
  <el-button type="success" @click.ctrl="changeName">改变名字（需要按着ctrl）</el-button>
  <div :style="styleObject">全称：{{ fullName }}</div>
</template>