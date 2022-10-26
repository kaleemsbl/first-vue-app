import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/home.vue'
import EditUser from '../views/EditUser.vue'
import About from '../views/About.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/edit/:kk',
      name: 'editUser',
      component: EditUser
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})

export default router