<script setup>
import PageHeader from '@/components/pageHeader/index.vue'
</script>

<template>
  <div class="main-container">
    <PageHeader></PageHeader>
    <div class="max-w-[1280px] mx-auto px-[40px] py-[60px] ">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>