import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import addpersone from '../views/addpersone.vue'
import frequence from '../views/frequence.vue'
import autrecontact from '../views/autrecontact.vue'
import fusioneretcorriger from '../views/fusioneretcorriger.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/addpersonne',
      name: 'add',
      component: addpersone
    },
    {
      path: '/frequence',
      name: 'frequence',
      component: frequence
    },
    {
      path: '/autrecontact',
      name: 'contact',
      component: autrecontact
    },
    {
      path: '/fusion',
      name: 'fusion',
      component: fusioneretcorriger
    }
  ]
})

export default router
