<template>
  <a-space direction="vertical" class="w-full" :size="[0, 48]">
    <a-layout class="min-h-screen">
      <!-- 左侧 -->
      <a-layout-sider width="120px" class="text-white bg-gradient-to-b from-gray-800 to-gray-600">
        <div
          v-for="item in slititle"
          :key="item.name"
          @click="item.src && $router.push(item.src)"
          class="flex items-center p-3 mt-2 hover:bg-gray-700 cursor-pointer transition-all duration-300 rounded-lg"
        >
          <span class="material-icons mr-2 text-xl" @click="showDrawer">{{ item.icon }}</span>
          <span class="text-sm">{{ item.name }}</span>
        </div>
        <div
          :key="item.icon"
          v-for="item in arr"
          class="flex flex-col justify-center items-center mt-4 cursor-pointer"
        >
          <Icon
            :icon="item.icon"
            class="text-white text-2xl hover:scale-110 transition-transform duration-300"
          />
        </div>
      </a-layout-sider>

      <!-- 抽屉侧边栏 -->
      <div>
        <div :style="{ height: '100vh', position: 'relative' }">
          <a-drawer
            :title="name"
            placement="left"
            width="200px"
            zIndex="1000"
            :open="open"
            :get-container="false"
            :style="{ position: 'absolute' }"
            @close="onClose"
          >
            <div class="flex flex-col space-y-4">
              <div class="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded-md">
                <Icon icon="mdi:user-outline" class="text-lg" />
                <div @click="fn3" class="ml-2">个人账户设置</div>
              </div>
              <div class="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded-md">
                <Icon icon="icon-park-outline:shopping" class="text-lg" />
                <div @click="fn3" class="ml-2">服务订阅</div>
              </div>
              <div class="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded-md">
                <Icon icon="mdi:user-outline" class="text-lg" />
                <div @click="fn3" class="ml-2">邀请成员</div>
              </div>
              <div class="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded-md">
                <Icon icon="clarity:switch-line" class="text-lg" />
                <div @click="fn3" class="ml-2">切换语言</div>
              </div>
              <div class="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded-md">
                <Icon icon="fluent-mdl2:issue-tracking-mirrored" class="text-lg" />
                <div @click="fn3" class="ml-2">工单中心</div>
              </div>
              <div class="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded-md">
                <Icon icon="dashicons:update" class="text-lg" />
                <div @click="fn3" class="ml-2">更新日志</div>
              </div>
              <div class="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded-md">
                <Icon icon="iconamoon:exit-thin" class="text-lg" />
                <div @click="fn3" class="ml-2">退出</div>
              </div>
            </div>
          </a-drawer>
        </div>
      </div>

      <!-- 右边 -->
      <a-layout>
        <a-layout-header class="!h-[50px] !bg-white shadow-md">
          <div class="flex items-center w-full h-[50px] text-2xl px-4">
            {{ str }}
          </div>
        </a-layout-header>
        <a-layout>
          <a-layout-content class="!p-[20px] bg-gray-50 min-h-screen">
            <RouterView></RouterView>
          </a-layout-content>
        </a-layout>
      </a-layout>
    </a-layout>
  </a-space>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
const str = ref('代码仓库')
const open = ref(false)
const showDrawer = () => {
  open.value = true
}
const onClose = () => {
  open.value = false
}
const slititle = [
  { name: '工作台', icon: 'dashboard', src: '' },
  { name: '项目', icon: 'folder', src: '' },
  { name: 'AI', icon: 'smart_toy', src: '' },
  { name: '事项', icon: 'event', src: '' },
  { name: '代码', icon: 'code', src: '/layout/codePr' },
  { name: '制品', icon: 'category', src: '' },
  { name: '洞察', icon: 'insights', src: '' },
  { name: '知识', icon: 'menu_book', src: '' },
  { name: '自动化', icon: 'bolt', src: '' }
]
const arr = [
  { icon: 'mdi:user-outline', name: '' },
  { icon: 'ci:more-grid-big', name: '' },
  { icon: 'mdi:bell-outline', name: '' },
  { icon: 'uil:setting', name: '' },
  { icon: 'ph:question-duotone', name: '' },
  { icon: 'mingcute:user-4-fill', name: '用户信息' }
]
</script>

<style scoped>
/* 侧边栏背景渐变色 */
.a-layout-sider {
  background: linear-gradient(180deg, #2c3e50, #34495e);
}

/* 顶部导航阴影 */
.ant-layout-header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* 响应式调整 */
@media (max-width: 768px) {
  .a-layout-sider {
    width: 80px !important;
  }
  .a-layout-header {
    height: 40px !important;
  }
}
</style>
