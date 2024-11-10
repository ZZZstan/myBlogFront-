<script setup>
import homeBg from "@/assets/images/homeBanner.jpg"
import { useRoute } from 'vue-router';
import FaChevronDown from '~icons/fa/chevron-down';
import MdiCalendarTime from '~icons/mdi/calendar-time'
import GrommetIconsDocumentUpdate from '~icons/grommet-icons/document-update'
import CarbonCategory from '~icons/carbon/category'
import LucideTag from '~icons/lucide/tag'
import BxLike from '~icons/bx/like'
import IconamoonEyeBold from '~icons/iconamoon/eye-bold'
import GameIconsDuration from '~icons/game-icons/duration'
import { useArticleStore } from '@/store/index.js';
const route = useRoute();
const articleStore = useArticleStore()

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
        <div class="title">{{ articleStore.getArticle().title }}</div>
        <div class="info text-md mb-3 flex items-center flex-wrap justify-center max-w-[25rem]">
              <!-- 创建时间 -->
              <div class="item mr-[1rem] flex items-center createTime">
                <MdiCalendarTime class="w-[1.2rem] h-[1.2rem] mr-[0.2rem]"/>
                <span class="text-md">发表于{{ articleStore.getArticle().createTime }}</span>
              </div>
              <!-- 更新时间 -->
              <div class="item mr-[1rem] flex items-center updateTime">
                <GrommetIconsDocumentUpdate class="w-[1rem] h-[1rem] mr-[0.2rem]"/>
                <span class="text-md">更新于{{ articleStore.getArticle().updateTime }}</span>
              </div>
              <!-- 分类 -->
              <div class="item mr-[1rem] flex items-center category">
                <CarbonCategory class="w-[1rem] h-[1rem] mr-[0.2rem]"/>
                <span class="text-md">分类:{{ articleStore.getArticle().category }}</span>
              </div>
              <!-- 标签 -->
              <div class="item mr-[1rem] flex items-center tags">
                <LucideTag class="w-[1rem] h-[1rem] mr-[0.2rem]"/>
                <span class="text-md">标签:{{ articleStore.getArticle().tags.join('、') }}</span>
              </div>
              <!-- 点赞 -->
              <div class="item mr-[1rem] flex items-center likes">
                <BxLike class="w-[1rem] h-[1rem] mr-[0.2rem]"/>
                <span class="text-md">点赞数 {{ articleStore.getArticle().likes }}</span>
              </div>
              <!-- 浏览数 -->
              <div class="item mr-[1rem] flex items-center views">
                <IconamoonEyeBold class="w-[1rem] h-[1rem] mr-[0.2rem]"/>
                <span class="text-md">浏览次数 {{ articleStore.getArticle().views }}</span>
              </div>
              <!-- 浏览时长 -->
              <div class="item mr-[1rem] flex items-center views">
                <GameIconsDuration class="w-[1rem] h-[1rem] mr-[0.2rem]"/>
                <span class="text-md">浏览时长 {{ articleStore.getArticle().readDuration }}</span>
              </div>
            </div>
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