<script setup>
import homeBg from "@/assets/images/homeBanner.jpg"
import { useRoute } from 'vue-router';
import FaChevronDown from '~icons/fa/chevron-down';
import { onMounted, ref } from 'vue'
const route = useRoute();
// const showScrollBottom = ref(true)
// const initScrollEvent = () => {
//   document.body.addEventListener('scroll', () => {
//     if (document.body.scrollTop > 500) {
//       console.log(document.body.scrollTop);
//       showScrollBottom.value = false
//     } else {
//       showScrollBottom.value = true
//     }
//   })
// }

// onMounted(() => {
//   initScrollEvent()
// })
const scrollToBottom = () => {
  const homeElemrnt = document.querySelector('#home')
  if (homeElemrnt) {
      document.body.scrollTo({
      top: homeElemrnt.clientHeight,
      behavior: 'smooth'
    })
  }
}
</script>

<template>
  <div class="page-header">
    <!-- 主页头部显示 -->
    <div class="home" v-if="route.path=='/home'" id="home">
      <el-image class="banner" :src="homeBg" fit="cover"></el-image>
      <div class="content">
        <div class="title">stan的个人博客</div>
        <div class="saying">If you had one shot, or one opportunity, to seize everything you ever wanted, in one moment. Would you capture it, or just let it slip?</div>
      </div>
      <div class="mask"></div>
      <div class="scroll-button" ><FaChevronDown class="scorll-icon w-8 h-8" @click="scrollToBottom()"></FaChevronDown></div>
    </div>
    <!-- 文章头部显示 -->
    <div class="article" v-else-if="route.path=='/article'">
      <el-image class="banner" :src="homeBg" fit="cover"></el-image>
      <div class="content">
        注意: 超级管理员账户为admin，密码在env文件里配置，
        后台登录超级管理员以后，使用超级管理员给自己的账户管理员权限
        ，就可以发布你的内容了，别使用超级管理员发布内容哦，
        用户表里没有超级管理员的信息，是我写在配置和代码里的
      </div>
      <div class="mask"></div>
    </div>
    <!-- 其他头部展示 -->
    <div v-else class="other">
      <el-image class="banner" :src="homeBg" fit="cover"></el-image>
      <div class="content">
        <div class="title">{{ route.name }}</div>
      </div>
      <div class="mask"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner{
  width: 100%;
  height: 100%;
}
.content{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      max-width: 70rem;
      color: #fff;
      z-index: 998;
    }
.title{
      font-size: 2.4rem;
      font-weight: bold;
      color: #fff;
      text-align: center;
      z-index: 998;
      padding-bottom: 20px;
    }
.page-header{
  width: 100%;

  .home{
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    }
    .scroll-button{
      z-index: 998;
      position: absolute;
      bottom: 1rem;
      left: 50%;
      color: #fff;
      transform: translateX(-50%);
            
      .scorll-icon{
        cursor: pointer;
        animation:bounce 1.5s infinite;
      }
    }
}
  .article{
    position: relative;
    height: 24rem;
    overflow: hidden;
  }
  .other{
    position: relative;
    height: 24rem;
    overflow: hidden;
  }
.mask{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.3);
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(-50%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    opacity: 1;
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    opacity: 0.3;
  }
}
</style>