<script setup>
import { defineAsyncComponent } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const handleSelect = (path) => {
  console.log(path)
  if (path) {
    router.push(path)
  }
}

const menuList = [
  {
    title: "首页",
    icon: defineAsyncComponent(() => import("~icons/carbon/home")),
    path: "/home",
    children:[]
  },
  {
    title: "文章",
    icon: defineAsyncComponent(() => import("~icons/mdi/book-open-page-variant-outline")),
    path: "/article",
    children:[]
  },
  {
    title: "时间轴",
    icon: defineAsyncComponent(() => import("~icons/mdi/axis-z-rotate-counterclockwise")),
    path: "/archive",
    children:[]
  },
  {
    title: "说说",
    icon: defineAsyncComponent(() => import("~icons/ri/kakao-talk-line")),
    path: "/talk",
    children:[]
  },
  {
    title: "更多",
    icon: defineAsyncComponent(() => import("~icons/gg/more-r")),
    path: "/more",
    children:[
      {
        title: "关于我",
        icon: defineAsyncComponent(() => import("~icons/mdi/about-variant")),
        path: "/more/about",
      }
    ]
  },
]

</script>

<template>
  <div class="header-container ">
    <!-- 导航栏左侧 -->
    <div class="left">
      <svg-icon name="logo" class="logo"></svg-icon> 
    </div>
    <!-- 导航栏右侧 -->
    <div class="right">
      <el-menu :ellipsis="false" mode="horizontal" @select="handleSelect" >
        <div v-for="menu in menuList" :key="menu.path">
          <el-sub-menu v-if="menu.children.length" :index="menu.path">
            <template #title>
              <component :is="menu.icon" class="menu-icon"></component>
              {{ menu.title }}
            </template>
            <el-menu-item v-for="subMenu in menu.children" :key="subMenu.path" :index="subMenu.path">
              <component :is="subMenu.icon" class="menu-icon"></component>
              {{ subMenu.title }}
            </el-menu-item>
          </el-sub-menu>
          <el-menu-item v-else :index="menu.path">
            <component :is="menu.icon" class="menu-icon"></component>
            {{ menu.title }}
          </el-menu-item>
        </div>
    </el-menu> 
    <el-avatar>S</el-avatar>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .header-container{
    backdrop-filter: saturate(100%) blur(3px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left{
      width: 20%;
      .logo{
        width: 3rem;
        height: 3rem;
        transition: all 0.5s ;
      }
      .logo:hover{
        transform: rotate(360deg);
      }
    }
    .right{
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .menu-icon{
        margin-right: 0.3rem;
        height: 1rem;
        width: 1rem;
      }
    }
  }
</style>