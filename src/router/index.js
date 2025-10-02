import { createRouter, createWebHashHistory } from 'vue-router'
import PrincipalPage from '@/views/PrincipalPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: PrincipalPage
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
