<template>
  <div class="flex items-center mb-4">
    <a-button @click="back()" shape="circle" size="small" class="flex justify-center items-center">
      <Icon icon="majesticons:arrow-left" color="" />
    </a-button>
    <div class="text-xl font-semibold ml-4">创建代码仓库</div>
  </div>
  
  <div class="w-full md:w-4/5 flex flex-col space-y-6">
    <div>
      <div class="text-xl">所属项目<span class="text-red-600">*</span></div>
      <a-input placeholder="所属项目" v-model:value="data.name" class="w-2/5 mt-2" />
    </div>

    <div class="flex w-full space-x-4">
      <div class="w-1/5">
        <div class="text-xl">仓库类型<span class="text-red-600">*</span></div>
        <a-input placeholder="GIT 仓库" value="GIT 仓库" class="mt-2" />
      </div>
      <div class="w-4/5">
        <div class="text-xl">仓库名称<span class="text-red-600">*</span></div>
        <a-input
          v-model:value="data.path"
          class="w-full mt-2"
          placeholder="仓库名称只支持字母、数字、下划线(_)、中划线(-)和点(.)的组合"
        />
        <div class="text-sm text-gray-500 mt-1">
          仅支持字母、数字、下划线(_) 和中划线(-)。
        </div>
      </div>
    </div>

    <div>
      <div class="text-xl">仓库描述<span class="text-red-600">*</span></div>
      <a-textarea v-model:value="data.description" placeholder="请输入仓库描述" :rows="4" class="mt-2" />
    </div>

    <div>
      <div class="text-xl">初始化仓库</div>
      <div class="flex flex-col space-y-2 mt-2">
        <a-checkbox  >生成 README 文件</a-checkbox>
        <a-checkbox  >添加 .gitignore 文件</a-checkbox>
        <a-checkbox class="!text-gray-500">添加分支模型(仓库创建后将根据所选模型创建分支)</a-checkbox>
      </div>
    </div>

    <div>
      <div class="text-xl" >是否开源</div>
      <div class="flex flex-col space-y-2 mt-2">
        <a-radio v-model="data.private" :value="truepn">私有仓库(仅对仓库成员可见，仓库成员可访问仓库。)</a-radio>
        <a-radio v-model="data.private" :value="false">公开仓库</a-radio>
      </div>
    </div>

    <div class="mt-4 flex space-x-2">
      <a-button size="large" class="bg-blue-500 hover:bg-blue-600 text-white" @click="creae()">完成创建</a-button>
      <a-button size="large" class="border border-gray-300 hover:bg-gray-200" @click="back()">取消</a-button>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { create } from '@/api'
let router = useRouter()

let data = ref({
  access_token: '281b8b26f681dfa8a62cf0a2bcd05e7d',
  name: '',
  description: '',
  path: '',
  homepage: 'https://gitee.com/li-hao-jie1230',
})
let back = () => {
  router.push('/layout/codePr')
}
const creae = async () => {
  console.log(data.value);
  let access_token = await localStorage.getItem('access_token')
  data.value.access_token = access_token
  create(data.value).then((res) => {
    console.log(res)
    router.push('/layout/codePr')
  })
}
</script>
