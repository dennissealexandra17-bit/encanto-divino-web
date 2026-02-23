import { createRouter, createWebHashHistory } from 'vue-router'
import PrincipalPage from '@/views/PrincipalPage.vue'
import Skin1004Page from '@/components/marcas/Skin1004.vue'
import MixsoonPage from '@/components/marcas/Mixsoon.vue'  
import BeautyofjoseonPage from '@/components/marcas/Beautyofjoseon.vue'  
import MarcasPage from '@/components/Marcas.vue'
import AnuaPage from '@/components/marcas/Anua.vue'
import CelimaxPage from '@/components/marcas/Celimax.vue'
import tonicosPage from '@/components/categorias/tonicos.vue' 
import limpiadoresPage from '@/components/categorias/limpiadores.vue'
import mascarillasPage from '@/components/categorias/mascarillas.vue'
import protectoresPage from '@/components/categorias/proteccionSolar.vue'
import SerumsEsenciasPage from '@/components/categorias/SerumsEsencias.vue'
import hidratantesPage from '@/components/categorias/hidratantes.vue'
import tocoboPage from '@/components/marcas/Tocobo.vue'
import CosrxPage from '@/components/marcas/Cosrx.vue'
import variasMarcasPage from '@/components/marcas/VariasMarcas.vue'
import labialesPage from '@/components/maquillaje/labiales.vue'
import categoriasPage from '@/components/Categoria.vue'
import RutinasPage from '@/components/Rutinas.vue'
  
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
    },
    {
      path: '/tocobo',
      name: 'Tocobo',
      component: tocoboPage
    },
    {
      path: '/cosrx',
      name: 'Cosrx',
      component: CosrxPage
    },
    {
      path: '/varias-marcas',
      name: 'Varias Marcas',
      component: variasMarcasPage
    },
    {
      path: '/tonicos',
      name: 'Tónicos',
      component: tonicosPage
    },
    {
      path: '/limpiadores',
      name: 'Limpiadores',
      component: limpiadoresPage
    },
    {
      path: '/proteccion-solar',
      name: 'Protectores Solares',
      component: protectoresPage
    },
    {
      path: '/esencias-y-serums',
      name: 'Esencias y Serums',
      component: SerumsEsenciasPage
    },
    {
      path: '/mascarillas',
      name: 'Mascarillas y Parches',
      component: mascarillasPage
    },
    {
      path: '/hidratantes',
      name: 'Cremas hidratantes',
      component: hidratantesPage
    },
    {
      path: '/labiales',
      name: 'Labiales',
      component: labialesPage
    },
     {
      path: '/categorias',
      name: 'Categorias',
      component: categoriasPage
    },
    {
      path: '/rutinas',
      name: 'Rutinas',
      component: RutinasPage
    },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
