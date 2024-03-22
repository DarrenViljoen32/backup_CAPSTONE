import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'landing',
    component: () => import('../views/LandingView.vue'),
    meta: {
      hideNavbar: true,
      hideFooter: true
    }
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import('../views/SignInView.vue'),
    meta: {
      hideNavbar: true,
      hideFooter: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LogInView.vue'),
    meta: {
      hideNavbar: true,
      hideFooter: true
    }
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue'),
    meta: {requiresAdmin: true}
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/ProfileView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach((to, from, next)=>{
//   requiresAdmin = false
//   if(to.matched.some(record => record.meta.requiresAdmin)){
//     if($store.state.users.user_Role === 'Admin'){
//       requiresAdmin = true
//       next()
//     }else{
//       next('/login')
//     }
//   }else{
//     next()
//   }
// })

export default router
