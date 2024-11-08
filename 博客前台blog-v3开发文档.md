# 初始化项目

## 使用 vite 脚手架初始化项目

提示: Node > 18

### vite 初始化项目

```bash
npm create vite@latest // 一路选择 vue、javascript 项目名称输入 blog-v3
```

### 运行项目

```bash
cd blog-v3 // cd 到 blog-v3 目录下
pnpm install
pnpm run dev //  启动项目
```

提示：我们使用 pnpm 进行依赖下载 因为 pnpm 比 npm 快 如果没有 pnpm 的 就使用 `npm install -g pnpm` 下载一下 有就跳过

## 下载必要的插件、以及对插件进行配置

### sass

sass 是目前比较流行的 css 预处理器，我们使用 sass 语法来写样式，方便我们使用 sass 的一些功能，比如变量、函数、mixin 等等。

1、安装依赖

```bash
pnpm install sass --save-dev
// --save-dev 表示只安装在开发环境 也可以使用 -D
```

2、创建 base.scss 文件

// 在 src 下创建一个文件夹 styles 在 styles 下创建一个 base.scss 意思就是我们的基础 scss 样式 可以用来初始化整个页面的样式 这里的样式除了 !important 权重最高

3、引入 scss

在 main.js 里引入

```js
import "./styles/base.scss";
```

scss 支持类名嵌套写和&连写 可以去 App.vue 下试一试

### tailwindcss

1、下载依赖

```bash
 pnpm i -D tailwindcss postcss autoprefixer
```

2、生成 tailwind.config.js 文件

```bash
 npx tailwindcss init // 没有npx就下一个 npm install -g npx
```

3、在 tailwind.config.js 里配置

```js
/** @type {import('tailwindcss').Config} */
export default {
  // 下面就是需要使用 tailwindcss 的地方
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

4、在 vite.config.js 里添加 tailwind 插件

```js
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
  // 添加在 css 的 plugin 里
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
});
```

5、在 styles 下创建一个 tailwind.css 用于引入 一些基础文件

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

6、在 base.scss 里引入

```js
@import "./tailwind.css";
```

到这里就可以去 App 里使用 tailwindcss 了

### element-plus

1、下载 element-plus

```bash
pnpm i element-plus
```

2、下载按需引入插件

```bash
pnpm i unplugin-vue-components unplugin-auto-import --save-dev
```

3、在 main.js 里引入

```js
import "element-plus/dist/index.css";
```

4、在 vite.config.js 里加入按需导入插件

```js
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // element plus组件按需自动引入
      resolvers: [ElementPlusResolver()],
    }),
    // vue 组件自动导入
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
});
```

### vue-router

1、下载依赖

```bash
pnpm i vue-router
```

2、src 下新增 router 文件夹，新建 index.js 另外在 src 下新建一个文件夹 views 用来存放页面 views 下建一个 test.vue 页面

```js
import { createRouter, createWebHistory } from "vue-router";

import Test from "../views/test.vue";

const routes = [
  {
    name: "Test",
    path: "/test",
    component: Test,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
```

3、main.js 中引入

```js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";

const app = createApp(App);

app.use(router).mount("#app");
```

4、页面中写一个 <router-view></router-view> 试一试 访问 /test

### pinia

1、安装依赖

```bash
pnpm i pinia
```

2、src 下创建 store 文件夹，创建 index.js 文件

```js
import { defineStore } from "pinia";

export const user = defineStore("user", {
  state: () => {
    return {
      userId: 1,
    };
  },
  getters: {
    getUserId() {
      return this.userId;
    },
  },
  actions: {
    setUserId() {
      this.userId++;
    },
  },
});
```

3、在 main.js 中引入

```js
import { createApp } from "vue";
import App from "./App.vue";
// 引入 createPinia 函数
import { createPinia } from "pinia";

const app = createApp(App);

app.use(ElementPlus).use(createPinia()).mount("#app");
```

4、 pinia 持久化

下载依赖

```bash
pnpm i pinia-plugin-persist -D
```

在 main.js 里引入

```js
import piniaPluginPersist from "pinia-plugin-persist";

app.use(router).use(createPinia().use(piniaPluginPersist)).mount("#app");
```

store 里添加 persist 配置

```js
import { defineStore } from "pinia";

export const user = defineStore("user", {
  persist: {
    enabled: true, //开启数据持久化
    strategies: [
      {
        key: "userState", //给一个要保存的名称
        storage: localStorage, //localStorage 存储方式
      },
    ],
  },
  state: () => {
    return {
      userId: "",
    };
  },
  getters: {
    getUserId() {
      return this.userId;
    },
  },
  actions: {
    setUserId() {
      this.userId++;
    },
  },
});
```

页面使用
setup 是 vue 的一个生命周期 在初始化开始的时候执行

```vue
<script setup>
import { storeToRefs } from "pinia";
import { user } from "./store/index.js";

const { getUserId } = storeToRefs(user());

const add = () => {
  user().setUserId();
};
</script>

<template>
  <div class="test">
    {{ getUserId }}
    <el-button type="primary" @click="add">点我</el-button>
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
.test {
}
</style>
```

可以看到我们加了用户的 id 以后 刷新页面 用户的 id 没被清空 说明持久化成功了

====================================================================
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
====================================================================

### 别名

vite.config.js 下配置别名 方便我们访问 src 目录下的文件

```js
import { resolve } from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "/src"),
    },
  },
});
```

scss 配置 由于测试到 scss 无法在 vite.config.js 里引入，所以需要在 main.js 里引入

### svg 图标

1、下载依赖

```bash
pnpm install vite-plugin-svg-icons -D
```

2、 在 vite.config.js 中引入 在 src 下创建一个 icons/svg 文件夹 用于存放 svg 文件
svg 可以去[iconfont](https://www.iconfont.cn/)下载

```js
import { createSvgIconsPlugin } from "vite-plugin-svg-icons"; // 支持svg

export default defineConfig({
  plugins: [
    // svg
    createSvgIconsPlugin({
      // Specify the icon folder to be cached process.cwd() 就是绝对路径的意思
      iconDirs: [resolve(process.cwd(), "src/icons/svg")],
    }),
  ],
});
```

3、在 main.js 里引入

```js
// svg
import "virtual:svg-icons-register";
```

4、components 下编写一个 svg-icon.vue 组件

```vue
<script setup>
import { computed } from "vue";
const props = defineProps({
  name: {
    type: String,
    default: "",
  },
  prefix: {
    type: String,
    default: "icon",
  },
});

const symbolId = computed(() => `#${props.prefix}-${props.name}`);
</script>

<template>
  <svg aria-hidden="true">
    <use :href="symbolId" />
  </svg>
</template>
```

5、App.vue 里引入试一试
由于我们可以自动导入 components 下的组件 所以我们可以不用手动引入

```vue
<template>
  <svg-icon name="test"></svg-icon>
</template>
```

### unplugin-icons

unplugin-icons 是一个图标插件，它可以自动导入图标，并支持多种图标库，包括 Font Awesome、Material Design Icons、Ionicons、Eva Icons、Bootstrap Icons、Simple Icons、Octicons、BoxIcons、Codicon、Carbon 等。

1、下载依赖

```bash
pnpm i -D unplugin-icons
```

[unplugin-icons GitCode 地址](https://gitcode.com/antfu/unplugin-icons/overview?utm_source=artical_gitcode&isLogin=1)

2、vite.config.ts 里引入

```js
import Icons from "unplugin-icons/vite";
export default defineConfig({
  plugins: [
    Icons({
      // 实验性功能 当您导入图标时，它会自动检测合适的包管理器（npm、yarn 或 pnpm）来安装图标集。
      autoInstall: true,
    }),
  ],
});
```

3、页面中使用
[mdi 图标库地址](https://icon-sets.iconify.design/mdi/)

```vue
<script setup>
import IconAccountBox from "~icons/mdi/account-box";
</script>

<template>
  <icon-account-box style="font-size: 2em; color: red" />
</template>

<style lang="scss" scoped></style>
```

### axios

axios 用于异步请求后端数据

1、下载依赖

```bash
pnpm i axios
```

2、简单封装 axios
在 src 下新建一个文件夹 config ，config 下新增 request.js

```js
import axios from "axios/dist/axios";

// 创建一个 axios 实例
const http = axios.create({
  timeout: 10000, // 请求超时时间毫秒
  withCredentials: true, // 异步请求携带cookie
  headers: {
    // 设置后端需要的传参类型
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
});

// 添加请求拦截器
http.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    console.log(error);
    return Promise.reject(error);
  }
);

// 添加响应拦截器
http.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    // dataAxios 是 axios 返回数据中的 data
    const dataAxios = response.data;

    return dataAxios;
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default http;
```

## 对项目进行一些简单的配置 方便开发

vite.config.js

```js
export default defineConfig({
  server: {
    port: 8080, // 配置前端项目启动端口
    host: "0.0.0.0",
    https: false,
    open: true, // 启动后自动打开浏览器
    // 热更新
    hmr: {
      overlay: false,
    },
    proxy: {
      // 本地后端代理
      "/api": {
        //要访问的跨域的域名
        target: "http://localhost:8888",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  // 打包输出
  build: {
    sourcemap: false,
    // 消除打包大小超过500kb警告
    chunkSizeWarningLimit: 4000,
    rollupOptions: {
      input: {
        index: resolve("index.html"),
      },
      // 静态资源分类打包
      output: {
        chunkFileNames: "static/js/[name]-[hash].js",
        entryFileNames: "static/js/[name]-[hash].js",
        assetFileNames: "static/[ext]/[name]-[hash].[ext]",
      },
    },
  },
});
```
