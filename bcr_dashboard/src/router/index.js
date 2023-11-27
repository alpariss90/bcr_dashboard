import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue'
import AccueilPage from '../pages/accueil.vue'

const routes= [
  {
    path: '/',
    redirect: '/accueil'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/accueil',
    name: 'accueil',
    component: AccueilPage
   // component: () => import('../pages/accueil.vue')
  },
  {
    path: '/test',
    component: import('../pages/test.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
