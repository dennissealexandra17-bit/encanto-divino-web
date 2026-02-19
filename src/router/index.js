import { createRouter, createWebHashHistory } from 'vue-router'
import PrincipalPage from '@/views/PrincipalPage.vue'
import Skin1004Page from '@/components/Skin1004.vue'
import MixsoonPage from '@/components/Mixsoon.vue'  
import BeautyofjoseonPage from '@/components/Beautyofjoseon.vue'  
import MarcasPage from '@/components/Marcas.vue'
import AnuaPage from '@/components/Anua.vue'
import CelimaxPage from '@/components/Celimax.vue'
  
const routes = [
  {
    path: '/',
    name: 'home',
    component: PrincipalPage
  },
  {
    path: '/marcas',
    name: 'marcas',
    component: MarcasPage
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
  },
    {
      path: '/beauty-of-joseon',
      name: 'Beauty of Joseon',
      component: BeautyofjoseonPage
    },
    {
      path: '/anua',
      name: 'Anua',
      component: AnuaPage
    },
    {
      path: '/celimax',
      name: 'Celimax',
      component: CelimaxPage
    }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
