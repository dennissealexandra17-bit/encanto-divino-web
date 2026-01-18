import { createRouter, createWebHashHistory } from 'vue-router'
import PrincipalPage from '@/views/PrincipalPage.vue'
import Skin1004Page from '@/components/Skin1004.vue'
import MixsoonPage from '@/components/Mixsoon.vue'    
  
const routes = [
  {
    path: '/',
    name: 'home',
    component: PrincipalPage
  },
  {
    path: '/skin1004',
    name: 'Skin1004',
    component: Skin1004Page
  },
  {
    path: '/mixsoon',
    name: 'Mixsoon',
    component: MixsoonPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
