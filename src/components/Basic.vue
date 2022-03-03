<script setup>
import { reactive, nextTick, ref } from 'vue'

const booom = reactive({
  count: 100
})

const numCount = ref(147)

function incre() {
  booom.count++
  numCount.value++
  
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
  <el-button type="success" @click="incre">增加</el-button>
  <div>{{ booom.count }}</div>
  <div>{{ numCount }}</div>
</template>