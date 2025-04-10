import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
 import About from '../views/About.vue' 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHashHistory(), // <= aqui trocou também
  routes
})

export default router
