// 从vue导入 createApp 函数
import { createApp } from 'vue'

// 导入 pinia router
import { createPinia } from 'pinia'

import router from './router/index.js'

// 导入 windicss 插件
import 'virtual:windi.css'

// 从App.vue导入根组件 App
import App from './App.vue'

// createApp() 函数传入根组件 App，创建一个新的应用实例 app
const app = createApp(App)

// 加载pinia,router插件
app.use(router).use(createPinia())

// 应用实例app挂载到index.html文件中id为app的元素上
app.mount('#app')
