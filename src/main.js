import { createApp } from 'vue'
import App from './App.vue'
//路由
import router from './router/index.js'
//全局样式入口
import "./styles/base.scss"
//element-plus样式
import "element-plus/dist/index.css"
//pinia
import { createPinia } from 'pinia'
//pinia持久化插件
import piniaPluginPersist from "pinia-plugin-persist"
// svg
import "virtual:svg-icons-register"

const app = createApp(App)
app.use(router)
app.use(createPinia().use(piniaPluginPersist))
app.mount('#app')
