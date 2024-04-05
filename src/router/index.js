import { createRouter, createWebHistory } from 'vue-router'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeVue.vue')
    },
    {
      path: '/directives',
      name: 'directives',
      component: () => import('../views/DirectivesVue.vue')
    },
    {
      path: '/api',
      name: 'api',
      component: () => import('../views/ApiView.vue')
    },
    {
      path: '/api/:id',
      name: 'apiDetails',
      component: () => import('../views/ApiDetailsView.vue')
    }
  ]
})

export default router
