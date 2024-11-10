<script setup>
import homeBr from '@/assets/images/homeBanner.jpg'
import { nextTick, onMounted, reactive, ref } from 'vue'
const staticTalkList = [
  { id: 1, userId: 1, nickName: 'stan', content: '再也不学java了', imageList: [homeBr] },
  { id: 2, userId: 2, nickName: 'stan', content: '再也不学java了', imageList: [homeBr,homeBr,homeBr,homeBr,homeBr,homeBr] },
  { id: 3, userId: 3, nickName: 'stan', content: '再也不学java了', imageList: [homeBr,homeBr,homeBr,homeBr,homeBr,homeBr,homeBr] },
  { id: 4, userId: 4, nickName: 'stan', content: '再也不学java了', imageList: [homeBr,homeBr] },
  { id: 5, userId: 5, nickName: 'stan', content: '再也不学java了', imageList: [homeBr] },
  { id: 6, userId: 6, nickName: 'stan', content: '再也不学java了', imageList: [homeBr] },
  { id: 7, userId: 7, nickName: 'stan', content: '再也不学java了', imageList: [homeBr,homeBr,homeBr] },
  { id: 8, userId: 8, nickName: 'stan', content: '再也不学java了', imageList: [homeBr] },
  { id: 8, userId: 8, nickName: 'stan', content: '再也不学java了', imageList: [homeBr] },
  { id: 9, userId: 9, nickName: 'stan', content: '再也不学java了', imageList: [homeBr] },
  { id:10,userId:10,nickName:'stan',content:'再也不学java了',imageList:[homeBr]},
]
const TalkList = ref([])
const params=reactive({
  currentPage:1,
  pageSize:5
})

const loadMore=ref(true)

/**
 * 使用Intersection Observer API实现无限滚动加载对话列表的函数
 * 该函数通过监听页面滚动来决定是否需要加载更多对话内容
 */
const observerTalk = () => {
  // 获取需要观察的DOM元素，这里是类名为'observer'的元素
  const observerDom=document.querySelector('.observer')
  // 创建一个Intersection Observer实例
  // 当观察的目标元素与视口交集发生变化时，执行回调函数
  const observer = new IntersectionObserver(entries => {
    // 遍历Intersection Observer回调函数返回的entries数组
    entries.forEach((v) => {
      // 当元素与视口有交集时，即元素滚动到视口范围内
      if (v.isIntersecting) {
        // 增加当前页码，通常用于请求下一页数据
        params.currentPage++
        // 调用获取对话列表的函数，加载更多内容
        getTalkList();
      }
    })
  })
  // 如果找到了需要观察的DOM元素，则使用Intersection Observer实例对其进行观察
  observerDom && observer.observe(observerDom);
}
const getTalkList = () => {
  let current = (params.currentPage - 1) * params.pageSize;
  let sliceList = staticTalkList.slice(current, current + params.pageSize);
  TalkList.value = params.currentPage === 1 ? sliceList : [...TalkList.value, ...sliceList]
  if (TalkList.value.length===staticTalkList.length) {
    loadMore.value=false
  }
}
const initTalkList = () => {
  getTalkList()
  nextTick(() => {
    observerTalk()
  })
} 

onMounted(() => {
  initTalkList()
})
</script>

<template>
  <el-card>
    <div class="p-[40px]">
      <div class="mb-[5rem] talk-item flex pb-[2rem] border-b" v-for="talk in TalkList" :key="talk.id">
        <!-- 左侧头像 -->
          <div class="left mr-[20px]">
            <!-- 头像 -->
            <el-avatar :size="64" shape="square">{{ talk.nickName }}</el-avatar>
          </div>
          <!-- 右侧名称和内容 -->
          <div class="right flex flex-col items-start">
            <!-- 名称 -->
            <div class="nick-name text-xl mb-[1rem]">{{ talk.nickName }}</div>
            <!-- 内容 -->
            <div class="content mb-[1rem]">{{ talk.content }}</div>
            <!-- 如果图片大于一张的排版格式 -->
            <div v-if="talk.imageList.length>1" class="image grid grid-cols-3 gap-1">
              <div class="image w-[100px] h-[100px] overflow-hidden" v-for="url in talk.imageList">
                <el-image :src="url" class="w-[100px] h-[100px] overflow-hidden" fit="cover"></el-image>
              </div>
            </div>
            <!-- 一张图片的排版格式 -->
            <div v-else class="image">
              <div class="image w-[308px] h-[308px] overflow-hidden">
                <el-image :src="talk.imageList[0]" fit="cover" class="w-[100%] h-[100%]"></el-image>
              </div>
            </div>
          </div>
      </div>
      <div class="observer text-center">
        {{ loadMore ? '下拉加载更多' : '已经到底了~' }}
      </div>
    </div>
  </el-card>
</template>

<style scoped>

</style>