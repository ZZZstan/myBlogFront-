import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//tailwind插件
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
//自动导入 组件
import AutoImport from "unplugin-auto-import/vite";
//自动导入 src/components 下的组件
import Components from "unplugin-vue-components/vite";
//自动导入 element-plus 组件
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// 路径解析
import { resolve } from "path";
// 支持svg
import { createSvgIconsPlugin } from "vite-plugin-svg-icons"; 
// 支持unplugin-icons
import Icons from "unplugin-icons/vite";



// https://vite.dev/config/
export default defineConfig({
  // 路径解析
  resolve: {
    // 路径别名
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  // 插件
  plugins: [
    vue(),


    // unplugin-icons
    Icons({
      // 实验性功能 当您导入图标时，它会自动检测合适的包管理器（npm、yarn 或 pnpm）来安装图标集。
      autoInstall: true,
    }),


    // svg
    createSvgIconsPlugin({
      // Specify the icon folder to be cached process.cwd() 就是绝对路径的意思
      iconDirs: [resolve(process.cwd(), "src/icons/svg")],
    }),


    AutoImport({
      // element plus组件按需自动引入
      resolvers: [ElementPlusResolver()],
    }),
    // vue 组件自动导入
    Components({
      // element plus组件按需自动引入
      resolvers: [ElementPlusResolver()],
    }),
  ],



  // css 配置
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },



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
})
