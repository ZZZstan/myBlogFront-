<script setup>
import { onMounted } from 'vue'
import { useArticleStore } from '@/store/index.js'
const articleDetail = {
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
}
</script>

<template>
  <div>article</div>
  <div>{{ User.getUserId() }}</div>
</template>

<style scoped>

</style>