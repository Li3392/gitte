<template>
  <div class="flex flex-col justify-center items-center" v-if="show">
    <div><h1 class="text-4xl">欢迎使用代码仓库</h1></div>
    <div class="flex items-center justify-center">
      <h5 class="text-gray-500 w-2/3">
        代码仓库用于托管基于 GIT 或 SVN 管理的代码库。通过 Review
        合并请求来审查代码变更,版本发布可以用来标记、发布代码版本。
      </h5>
    </div>
    <div class="flex justify-center items-center">
      <div class="flex flex-col justify-center items-center text-xs">
        <img src="@/assets/images/1.svg" alt="" />
        <div>创建代码仓库</div>
        <div class="text-gray-400">浏览、编辑代码以及查看代码提交记录</div>
      </div>
      <div><Icon icon="mynaui:arrow-right" /></div>
      <div class="flex flex-col justify-center items-center text-xs">
        <img src="@/assets/images/2.svg" alt="" />
        <div>合并请求</div>
        <div class="text-gray-400">发起合并请求并遂请协作者Review 变更内容</div>
      </div>
      <div><Icon icon="mynaui:arrow-right" /></div>
      <div class="flex flex-col justify-center items-center text-xs">
        <img src="@/assets/images/3.svg" alt="" />
        <div>代码版本</div>
        <div class="text-gray-400">发布、标记代码版本</div>
      </div>
    </div>
    <div class="mt-4">
      <a-button size="large" class="bg-black text-white" @click="fn">创建代码仓库</a-button>
    </div>
  </div>
  <div v-else>
    <a-table :dataSource="dataSource" :columns="columns" />
  </div>
</template>
<script setup>
import { Icon } from '@iconify/vue'
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import { getData } from '@/api'
let show = ref(true)
let router = useRouter()
let fn = () => {
  router.push('/layout/createPr')
}
onMounted(async () => {
  let access_token = await localStorage.getItem('access_token')
  getData(access_token).then((res) => {
    console.log(res.data)
    if (res.data) {
      show.value = false
      dataSource.value = res.data
    } else {
      show.value = true
    }
  })
  console.log("获取nk")
})

let dataSource = ref([])
let columns = [
  {
    title: ' 仓库名称',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '默认分支',
    dataIndex: 'default_branch',
    key: 'default_branch'
  },
  {
    title: '仓库创建者的昵称',
    dataIndex: 'project_creator',
    key: 'project_creator'
  },
  {
    title: '最近一次代码推送时间',
    dataIndex: 'pushed_at',
    key: 'pushed_at'
  }
]
</script>
