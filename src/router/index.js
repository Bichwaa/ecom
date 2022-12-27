import { createRouter,createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import DetailsView from '../views/DetailsView.vue';
import CartView from '../views/Cartview.vue'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history:createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/details/:id',
      name: 'detailsView',
      component: DetailsView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
  ]
})

export default router
