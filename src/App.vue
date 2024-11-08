<script setup>
import { useUserStore } from '@/store/index.js'
import MdiHumanGreetingProximity from '~icons/mdi/human-greeting-proximity';
import MdiFaceManShimmer from '~icons/mdi/face-man-shimmer'
const userUser = useUserStore()

</script>

<template>
  <div class="text-3xl">
    <el-button type="primary" @click="userUser.setUserId()">按钮</el-button>
    <div>{{userUser.getUserId()}}</div>
    <router-view></router-view>
    <div class="svg">
      <svg-icon name="test" class="w-[8rem] h-[8rem]"/>
      <MdiHumanGreetingProximity class="w-[8rem] h-[8rem]"/>
      <MdiFaceManShimmer class="w-[8rem] h-[8rem]"/>
    </div>
  </div>
  
</template>

<style lang="scss" scoped>

</style>