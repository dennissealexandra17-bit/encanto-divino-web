import { createRouter, createWebHashHistory } from 'vue-router'
import PrincipalPage from '@/views/PrincipalPage.vue'
import Skin1004Page from '@/components/Skin1004.vue'

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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
