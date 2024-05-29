import MainPageView from '@/views/MainPageView.vue'
import ProjectView from '@/views/ProjectView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path : "/",
      name : 'main',
      component : MainPageView
    },
    {
      path : "/project",
      name : 'project',
      component : ProjectView
    }
  ],
  scrollBehavior() {
    return { top : 0 }
  }
})

export default router
