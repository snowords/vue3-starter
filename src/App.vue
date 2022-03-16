<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()

function toHome() {
  router.push({name: 'home'})
}
function toLogin() {
  router.push({name: 'login'})
}
function toTsdemo() {
  router.push({name: 'typescript'})
}
</script>

<template>
  <div class="fixed m-2">
    <el-button type="primary" @click="toHome">到首页</el-button>
    <el-button type="primary" @click="toLogin">动画demo</el-button>
    <el-button type="primary" @click="toTsdemo">TS学习</el-button>
  </div>
  <router-view></router-view>
</template>
