<script setup>
import { reactive, nextTick, ref } from 'vue'
import { useCounterStore } from '../store/counter'

// ref 
// const booom = ref({
//   count: 100
// })

const booom = {
  foo: ref(100),
  bar: ref(200),
}

const numCount = useCounterStore()
console.log('numCount', numCount)

function incre() {
  // booom转换为value
  // booom.value.count++
  // numCount.value++
  booom.foo.value++
  booom.bar.value++

  // 状态管理
  numCount.count++
  numCount.increment()
  
  // 更新后调用函数
  nextTick(() => {
    ElNotification({
      title: '增加成功',
      message: '增加成功，计算结果为：' + booom.count,
      type: 'success',
    })
  })
}

</script>

<template>
  <span class="colorful-title">
    响应式基础
  </span>
  <el-button type="success" @click="incre">增加</el-button>
  <!-- <div>{{ booom.count }}</div>
  <div>{{ numCount }}</div> -->
  <div>{{ booom.foo }}</div>
  <div>{{ booom.bar }}</div>
  <div>{{ numCount.count }}</div>
</template>