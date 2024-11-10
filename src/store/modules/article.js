import { defineStore } from "pinia";
import { ref } from "vue";

export const useArticleStore = defineStore(
  "article", 
  () => {
    const article = ref({
      id: '',
      title: '',
      desc: '',
      imageUrl: '',
      createTime: '',
      updateTime: '',
      views: '',
      likes: '',
      category:'',
      tags: [],
      readDuration:''
    });
    
    const getArticle = () => article.value;

    const setArticle = (data) => { Object.assign(article.value, data)}
    return { article, getArticle, setArticle }
  }
)