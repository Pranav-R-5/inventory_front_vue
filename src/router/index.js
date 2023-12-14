import { createRouter, createWebHistory } from 'vue-router'
// import { app, pages } from '@/config'
// import HomePage from '@/pages/HomePage.vue'
import productList from '../components/Products.vue'
import cart from '../pages/cart.vue'

// const AboutPage = () => import(/* webpackChunkName: "p-about" */ '@/pages/AboutPage.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "products",
      component: productList
    },
    {
      path: "/cart",
      name: "cart",
      component: cart
    },
    
  ]
})

export default router
