import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import { defineAsyncComponent } from 'vue'

//  异步加载
const home = () => import("../pages/home.vue")
const login = () => import("../pages/login.vue")
const tsdemo = () => import("../pages/tsdemo.vue")

const routes: Array<RouteRecordRaw> = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    name: "home",
    component: home
  },
  {
    path: "/login",
    name: "login",
    component: login
  },
  {
    path: "/typescript",
    name: "typescript",
    component: tsdemo
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router