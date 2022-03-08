<script setup>
import { ref, onMounted, useAttrs } from 'vue'
const input = ref(null)
onMounted(() => {
  console.log('placeholder', input.value.placeholder)
  input.value.focus()
})

// 声明props
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  pageId: {
    type: Number,
    default: 100
  }
})
console.log('attrs', useAttrs())
console.log('props', props.title)
const emit = defineEmits(['accept-son', 'submit'])

function callSon() {
  console.log('子组件发送中...')
  emit('accept-son', '子组件发送的数据: 哈哈哈')
}
const greetText = ref('作用域插槽text')
</script>

<template>
  <div class="colorful-title">模板Ref语法</div>
  <div>元素属性ref可以直接访问原生的DOM元素</div>
  <input ref="input" placeholder="元素属性ref"/>
  <div>父组件使用prop向子组件传值</div>
  <div>{{title}}</div>
  <span>透传 attribute: {{ $attrs }}</span>
  <div>子组件触发父组件的方法 emit</div>
  <el-button type="success" @click="callSon">
    触发父极事件
  </el-button>
  <div>
    插槽位置：
    <slot>
      默认插槽内容
    </slot>
    <slot name="propSlot" :text="greetText" :count="1"></slot>
  </div>
</template>