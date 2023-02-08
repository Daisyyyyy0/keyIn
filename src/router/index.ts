import { createRouter, createWebHistory, RouteRecordRaw ,createWebHashHistory} from 'vue-router'

  const routes: Array<RouteRecordRaw> = [
    {
      path: '/',
      name: 'Home',
      component:()=>import('@/views/LanguagesList.vue')
    },

    {
      path: '/importAndExport',
      name: 'ImportAndExport',
      component:()=>import('@/views/ImportAndExport.vue')
    },

    {
      path: '/languagesList',
      name: 'LanguagesList',
      component:()=>import('@/views/LanguagesList.vue')
    },
  ]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASE_URL as string),
  // history:createWebHashHistory(),
  routes
})
export default router
