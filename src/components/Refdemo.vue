<script setup>
import { ref, onMounted } from 'vue'
const input = ref(null)
onMounted(() => {
  console.log('placeholder', input.value.placeholder)
  input.value.focus()
})

// 声明props
defineProps(['title'])
const emit = defineEmits(['accept-son', 'submit'])

function callSon() {
  console.log('子组件发送中...')
  emit('accept-son', '子组件发送的数据: 哈哈哈')
}

</script>

<template>
  <div>模板Ref语法</div>
  <div class="">元素属性ref可以直接访问原生的DOM元素</div>
  <input ref="input" placeholder="元素属性ref"/>
  <div class="">父组件使用prop向子组件传值</div>
  <div>{{title}}</div>
  <div class="">子组件触发父组件的方法</div>
  <button class="" @click="callSon">
    子 发射 触发事件
  </button>
</template>