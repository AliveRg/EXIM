import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StandsView from '../views/StandsView.vue'
import ReviewView from '../views/ReviewView.vue'
import UniversalView from '../views/UniversalView.vue'
import ServiceView from '../views/ServiceView.vue'
import ContactsView from '../views/ContactsView.vue'
import BreefView from '../views/BreefView.vue'
import NewsView from '../views/NewsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/breef',
      name: 'breef',
      component: BreefView
    },
    {
      path: '/review',
      name: 'review',
      component: ReviewView
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactsView
    },
    {
      path: '/service',
      name: 'service',
      component: ServiceView
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView
    },
    {
      path: '/universal',
      name: 'universal',
      component: UniversalView
    },
    {
      path: '/stands',
      name: 'stands',
      component: StandsView
    }
  ]
})

export default router
