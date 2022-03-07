<script setup>
  import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, watch } from 'vue'
  const lifeCycle = ref([
    {title: 'onBeforeMount', dsc: '挂载开始前调用'},
    {title: 'onMounted', dsc: '挂载完成后调用'},
    {title: 'onBeforeUpdate', dsc: '更新开始前调用'},
    {title: 'onUpdated', dsc: '更新完成后调用'},
    {title: 'onBeforeUnmount', dsc: '卸载开始前调用'},
    {title: 'onUnmounted', dsc: '卸载完成后调用'},
    {title: 'onActivated', dsc: '当keep-alive组件激活时调用'},
    {title: 'onDeactivated', dsc: '当keep-alive组件停用时调用'},
    {title: 'onErrorCaptured', dsc: '错误捕获'}
  ])
  onBeforeMount(() => {
    console.log('生命周期：onBeforeMount')
  })
  onMounted(() => {
    console.log('生命周期：onMounted')
  })
  onBeforeUpdate(() => {
    console.log('生命周期：onBeforeUpdate')
  })
  onUpdated(() => {
    console.log('生命周期：onUpdated')
  })

  const question = ref('')
  const answer = ref('The answer is...')

  // 监听问题输入框
  watch(question, async (newQuestion, oldQuestion) => {
    console.log('watch-new', newQuestion)
    console.log('watch-old', oldQuestion)
    if (newQuestion.includes('?')) {
      answer.value = 'Thinking...'
      try{
        const res = await fetch('https://yesno.wtf/api')
        answer.value = (await res.json()).answer
      } catch (e) {
        ElNotification({
          title: '失败',
          message: '回答失败，原因是：' + e.message,
          type: 'error',
        })
      }
    }
  })
</script>
<template>
  <span class="w-full text-2xl font-600 text-transparent p-2 my-2 bg-gradient-to-br from-green-500 to-blue-500 bg-clip-text">
    生命周期
  </span>
  <li v-for="{title, dsc} of lifeCycle" :key="title">{{ title }} - {{ dsc }}</li>
  <el-input v-model="question" placeholder="输入问题"></el-input>
  <div>答案是：{{ answer }}</div>
</template>