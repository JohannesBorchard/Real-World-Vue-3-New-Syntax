// Router library
import { createRouter, createWebHistory } from 'vue-router'
// Component für routes
import EventListView from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  // history api von browser
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListView
    },
    {
      // für performance: erst importiert wenn route gerufen
      path: '/about',
      name: 'about',
      // vereinfacht, da performance hier unwichtig
      component: AboutView
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
