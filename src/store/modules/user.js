import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore(
  "user", 
  () => {
    const userId = ref(1);
    const getUserId = () => userId.value;
    const setUserId = () => (userId.value = userId.value+1);
    return { userId, getUserId, setUserId }
  },
  {
    persist: {
    enabled: true, //开启数据持久化
    strategies: [
      {
        key: "userState", //给一个要保存的名称
        storage: localStorage, //localStorage 存储方式
      },
    ],
  },
  }
)