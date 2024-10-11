<template>
  <div class="flex justify-between">
    <div class="w-full">
      <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" @click="handleClick"/>
    </div>
    <div class="flex items-center">
      <a-button size="large" class="bg-black text-white" @click="handlecreate">创建代码仓库</a-button>
    </div>
  </div>
  <component :is="com"></component>
   <!-- <router-view></router-view> -->
</template>
<script setup>

import { ref } from 'vue'
import { useRouter } from 'vue-router'
import VisiT from './tree/VisiT.vue';
import MoRe from './tree/MoRe.vue';
import OpenP from './tree/OpenP.vue';
const current = ref(['visit'])
const com = ref(VisiT);
const router = useRouter()

// 点击事件处理函数
// const handleClick = (e) => {
//   const key = e.key;
//   if (key === 'visit') {
//     router.push('/layout/codePr/visit');  // 确保是完整路径
//   } else if (key === 'more') {
//     router.push('/layout/codePr/more');
//   } else if (key === 'open') {
//     router.push('/layout/codePr/open');
//   }
// }
const handleClick = (e) => {
  // 更新当前选择的键
  console.log(e.key)
  switch (e.key) {
    case 'visit':
      com.value = VisiT
      break
    case 'more':
      com.value = MoRe
      break
    case 'open':
      com.value = OpenP
      break

    default:
      break
  }
}
const handlecreate = () => {
  router.push('/layout/createPr')
}
const items = ref([
  {
    key: 'visit',
    label: '最近访问',
    title: '最近访问',
   
  },
  {
    key: 'more',
    label: '全部仓库',
    title: '全部仓库',
    
  },
  {
    key: 'open',
    label: '开源仓库',
    title: '开源仓库',
   
  }
])
</script>

