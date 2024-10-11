import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import LoginHome from '@/views/HomeIndex/LoginHome.vue'
import Layout from '@/views/HomeIndex/LayouT.vue'
import CodePr from '@/views/HomeIndex/children/CodePr.vue'
import MoRe from '@/views/HomeIndex/children/tree/MoRe.vue'
import OpenP from '@/views/HomeIndex/children/tree/OpenP.vue'
import VisiT from "@/views/HomeIndex/children/tree/VisiT.vue"
import CreatePr from '@/views/HomeIndex/children/CreatePr.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LoginHome',
      component: LoginHome
    },
    {
      path: '/layout',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: 'codePr',
          name: 'CodePr',
          component: CodePr,
          children: [
            {
              path: 'visit',
              component: VisiT
            },
            {
              path: 'more',
              component: MoRe
            },
            {
              path: 'open',
              component: OpenP
            }
          ]
        },{
          path: 'createPr',
          name: 'CreatePr',
          component: CreatePr
        }
      ]
    }
  ]
})

export default router
