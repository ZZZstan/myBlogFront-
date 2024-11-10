<script setup>
import homeBg from '@/assets/images/homeBanner.jpg'
import { reactive, onMounted, ref } from 'vue'
import EmojioneV1UpPointingAirplane from '~icons/emojione-v1/up-pointing-airplane';
const staticArticleList = [
  {
    id:1,
    CreateTime: '2019-04-12 20:46',
    imageUrl: homeBg,
    title: '博客部署',
  },
  {
    id:2,
    CreateTime: '2018-04-12 20:46',
    imageUrl: homeBg,
    title: '博客部署',
  },
  { 
    id:3,
    CreateTime: '2018-04-12 20:46',
    imageUrl: homeBg,
    title: '博客部署',
  },
  {
    id:4,
    CreateTime: '2020-04-12 20:46',
    imageUrl: homeBg,
    title: '博客部署',
  },
  {
    id:5,
    CreateTime: '2018-04-12 20:46',
    imageUrl: homeBg,
    title: '博客部署',
  },
  {
    id:6,
    CreateTime: '2018-04-12 20:46',
    imageUrl: homeBg,
    title: '博客xxx',
  },
]

const articleList = ref()

const params = reactive({
  currentPage: 1,
  pageSize: 5
})
const getArticleList = () => {
  let current = ((params.currentPage - 1) * params.pageSize);
  articleList.value = staticArticleList.slice(current, current + params.pageSize)
}
onMounted(() => {
  getArticleList()
})
</script>

<template>
  <el-card class="p-[40px]">
    <el-timeline style="max-width: 600px">
    <el-timeline-item 
      v-for="(article, index) in articleList"
      center
      placement="top"
      :icon=EmojioneV1UpPointingAirplane
      :key="index"
      :imageUrl="article.imageUrl"
    >
      <div class="item flex items-center">
        <div class="imageUrl w-[20rem] h-20[rem] overflow-hidden">
          <el-image class="w-[100%] h-[100%] duration-300 hover:scale-150" fit="cover" :src="article.imageUrl"></el-image>
        </div>
        <div class="info ml-8">
          <div class="title text-2xl font-bold p-[10px]">{{ article.title }}</div>
          <div class="title">{{ article.CreateTime }}</div>
        </div>
      </div>
    </el-timeline-item>
  </el-timeline>
    <div class="flex justify-center items-center">
        <el-pagination  @change="getArticleList()" v-model:current-page="params.currentPage" v-model:page-size="params.pageSize" background layout="prev, pager, next" :total="staticArticleList.length" />
    </div>
  </el-card>
</template>

<style scoped>

</style>