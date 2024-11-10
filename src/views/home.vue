<script setup>
import {useRouter} from 'vue-router'
import homeBg from '@/assets/images/homeBanner.jpg'
import MdiCalendarTime from '~icons/mdi/calendar-time'
import GrommetIconsDocumentUpdate from '~icons/grommet-icons/document-update'
import CarbonCategory from '~icons/carbon/category'
import LucideTag from '~icons/lucide/tag'
import BxLike from '~icons/bx/like'
import IconamoonEyeBold from '~icons/iconamoon/eye-bold'
import BasilQqOutline from '~icons/basil/qq-outline'
import MingcuteWechatLine from '~icons/mingcute/wechat-line'
import RiGithubFill from '~icons/ri/github-fill'
import NotoLoudspeaker from '~icons/noto/loudspeaker'
import StashBillingInfo from '~icons/stash/billing-info'
import { onMounted, reactive, ref } from 'vue'

const router=useRouter()
const articleList = ref([]);
const params = reactive({
  currentPage: 1,
  pageSize: 5
})
const staticArticleList = [
  {
    id: 1,
    imageUrl: homeBg,
    title: '博客前端教程',
    desc: '上传图片组件 增加判断是否应该上传图片的判断 从而达到组件自动上传未上传的图片 直接返回排好序的图片url 降低使用心智负担 之前没写是因为懒',
    createTime: '2024-5-20',
    updateTime: '2024-5-20',
    category: '博客创建',
    tags: ['vue','js'],
    likes:'1w',
    views:'1w'
  },
  {
    id: 2,
    imageUrl: homeBg,
    title: '博客前端教程',
    desc: '上传图片组件 增加判断是否应该上传图片的判断 从而达到组件自动上传未上传的图片 直接返回排好序的图片url 降低使用心智负担 之前没写是因为懒',
    createTime: '2024-5-20',
    updateTime: '2024-5-20',
    category: '博客创建',
    tags: ['vue','js'],
    likes:'1w',
    views:'1w'
  },
  {
    id: 3,
    imageUrl: homeBg,
    title: '博客前端教程',
    desc: '上传图片组件 增加判断是否应该上传图片的判断 从而达到组件自动上传未上传的图片 直接返回排好序的图片url 降低使用心智负担 之前没写是因为懒',
    createTime: '2024-5-20',
    updateTime: '2024-5-20',
    category: '博客创建',
    tags: ['vue','js'],
    likes:'1w',
    views:'1w'
  },
  {
    id: 4,
    imageUrl: homeBg,
    title: '博客前端教程',
    desc: '上传图片组件 增加判断是否应该上传图片的判断 从而达到组件自动上传未上传的图片 直接返回排好序的图片url 降低使用心智负担 之前没写是因为懒',
    createTime: '2024-5-20',
    updateTime: '2024-5-20',
    category: '博客创建',
    tags: ['vue','js'],
    likes:'1w',
    views:'1w'
  },
  {
    id: 5,
    imageUrl: homeBg,
    title: '博客前端教程',
    desc: '上传图片组件 增加判断是否应该上传图片的判断 从而达到组件自动上传未上传的图片 直接返回排好序的图片url 降低使用心智负担 之前没写是因为懒',
    createTime: '2024-5-20',
    updateTime: '2024-5-20',
    category: '博客创建',
    tags: ['vue','js'],
    likes:'1w',
    views:'1w'
  },
  {
    id: 6,
    imageUrl: homeBg,
    title: '博客前端教程',
    desc: '上传图片组件 增加判断是否应该上传图片的判断 从而达到组件自动上传未上传的图片 直接返回排好序的图片url 降低使用心智负担 之前没写是因为懒',
    createTime: '2024-5-20',
    updateTime: '2024-5-20',
    category: '博客创建',
    tags: ['vue','js'],
    likes:'1w',
    views:'1w'
  },
  {
    id: 7,
    imageUrl: homeBg,
    title: '博客前端教程',
    desc: '上传图片组件 增加判断是否应该上传图片的判断 从而达到组件自动上传未上传的图片 直接返回排好序的图片url 降低使用心智负担 之前没写是因为懒',
    createTime: '2024-5-20',
    updateTime: '2024-5-20',
    category: '博客创建',
    tags: ['vue','js'],
    likes:'1w',
    views:'1w'
  },
]
const getArticleList = () => {
  let current = ((params.currentPage - 1) * params.pageSize);
  console.log(current);
  articleList.value=staticArticleList.slice(current,current+params.pageSize)
}
onMounted(() => {
  getArticleList()
})

const tagsList = ['Vue', 'js', 'java', 'mysql', 'linux', 'springboot', 'redies']
const gotoArticle=(id)=>{
  if (!id) return
  router.push({
    path: '/article',
    query:{id}
  })
}
</script>

<template>
  <el-row :gutter="20">
    <el-col :span="18">
      <!-- 文章列表 -->
      <el-card shadow="always" v-for="article in articleList" :key="article.id" class="mb-[1.2rem]">
        <div class="article-item w-[100%] h-[16rem] flex" >
          <div class="article-cover w-[45%] h-[100%] overflow-hidden"> 
            <el-image @click="gotoArticle(article.id)" :src="article.imageUrl" class="w-[100%] h-[100%] duration-300 hover:scale-125" fit="cover" >
            </el-image> 
          </div>
          <div class="article-content w-[55%] h-[100%]  p-[1.2rem] flex flex-col justify-center"> 
            <div class="title text-3xl mb-6" @click="gotoArticle(article.id)">{{ article.title }}</div>
            <div class="info text-md mb-3 flex items-center flex-wrap">
              <!-- 创建时间 -->
              <div class="item mr-[1rem] flex items-center createTime">
                <MdiCalendarTime class="w-[1.2rem] h-[1.2rem] mr-[0.2rem]"/>
                <span class="text-md">发表于{{ article.createTime }}</span>
              </div>
              <!-- 更新时间 -->
              <div class="item mr-[1rem] flex items-center updateTime">
                <GrommetIconsDocumentUpdate class="w-[1rem] h-[1rem] mr-[0.2rem]"/>
                <span class="text-md">更新于{{ article.updateTime }}</span>
              </div>
              <!-- 分类 -->
              <div class="item mr-[1rem] flex items-center category">
                <CarbonCategory class="w-[1rem] h-[1rem] mr-[0.2rem]"/>
                <span class="text-md">分类:{{ article.category }}</span>
              </div>
              <!-- 标签 -->
              <div class="item mr-[1rem] flex items-center tags">
                <LucideTag class="w-[1rem] h-[1rem] mr-[0.2rem]"/>
                <span class="text-md">标签:{{ article.tags.join('、') }}</span>
              </div>
              <!-- 点赞 -->
              <div class="item mr-[1rem] flex items-center likes">
                <BxLike class="w-[1rem] h-[1rem] mr-[0.2rem]"/>
                <span class="text-md">{{ article.likes }}</span>
              </div>
              <!-- 浏览数 -->
              <div class="item mr-[1rem] flex items-center views">
                <IconamoonEyeBold class="w-[1rem] h-[1rem] mr-[0.2rem]"/>
                <span class="text-md">{{ article.views }}</span>
              </div>
            </div>
            <div class="desc text-xl w-[100%] text-ellipsis overflow-hidden whitespace-nowrap">{{ article.desc }}</div>
          </div>
        </div>
      </el-card>
      <!-- 分页导航 -->
      <div class="flex justify-center items-center">
        <el-pagination  @change="getArticleList()" v-model:current-page="params.currentPage" v-model:page-size="params.pageSize" background layout="prev, pager, next" :total="staticArticleList.length" />
      </div>
    </el-col>
    <el-col :span="6">
      <!-- 个人博客信息 -->
      <el-card class="mb-[1.2rem]">
        <div class="banner w-[100%] h-[8rem]">
          <el-image class="w-[100%] h-[100%]" fit="cover" :src="homeBg"></el-image>
        </div>
        <div class="info-box flex items-center ">
          <el-avatar :size="48" class="mr-[5px]">S</el-avatar>
           <div class="text-2xl">个人博客</div>
        </div>
        <div class="saying p-[5px] test-sm">努力活着</div>
        <div class="flex justify-around items-center p-[20px]">
          <div class="item">
            <div class="title text-center text-xl">文章</div>
            <div class="value text-center">20</div>
          </div>
          <div class="item">
            <div class="title text-center text-xl">分类</div>
            <div class="value text-center">20</div>
          </div>
          <div class="item">
            <div class="title text-center text-xl">标签</div>
            <div class="value text-center">20</div>
          </div>
        </div>
        <!-- 联系方式 -->
        <div class="flex justify-around items-center p-[20px]">
          <BasilQqOutline class="w-[2rem] h-[2rem]"/>
          <MingcuteWechatLine class="w-[2rem] h-[2rem]"/>
          <RiGithubFill class="w-[2rem] h-[2rem]"/>
        </div>
      </el-card>
      <!-- 公告 -->
      <el-card class="mb-[1.2rem]">
        <template #header>
          <div class="text-xl font-bold flex items-center">
            <NotoLoudspeaker class="w-[2rem] h-[2rem] mr-[0.5rem]"/>公告
          </div>
        </template>
        <div class="p-[1rem]">这是一个平平无奇的公告</div>
      </el-card>
      <!-- 标签 -->
      <el-card class="mb-[1.2rem]">
        <template #header>
          <div class="text-xl font-bold flex items-center">
            <LucideTag class="w-[2rem] h-[2rem] mr-[0.5rem]"/>标签
          </div>
        </template>
        <div class="p-[1rem] flex items-center flex-wrap">
          <div v-for="tag in tagsList" :key="tag" class="px-[0.3rem] py-[0.1rem] bg-slate-300 mr-[0.3rem] mb-[0.3rem] rounded-md">{{ tag }}</div>
        </div>
      </el-card>
      <!-- 网站资讯 -->
      <el-card class="mb-[1.2rem]">
        <template #header>
          <div class="text-xl font-bold flex items-center">
            <StashBillingInfo class="w-[2rem] h-[2rem] mr-[0.5rem]"/>网站资讯
          </div>
        </template>
        <div class="p-[1rem] flex flex-col justify-center items-center">
          <div class="item flex items-center justify-between w-[100%] mb-[0.5rem]">
            <div class="title text-md">文章数目</div>
            <div class="value text-md">22</div>
          </div>
          <div class="item flex items-center justify-between w-[100%] mb-[0.5rem]">
            <div class="title text-md">运行时间</div>
            <div class="value text-md">456天</div>
          </div>
          <div class="item flex items-center justify-between w-[100%] mb-[0.5rem]">
            <div class="title text-md">博客访问次数</div>
            <div class="value text-md">2.6w</div>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<style scoped>

</style>