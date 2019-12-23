import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index'
import Login from '../views/login'
import Main from '../views/home/home'
import Comment from '../views/comment'
import Material from '../views/material'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  } , {
    path: '/home',
    // name: 'home',
    component: Home,
    children:[
      {
      path:'main',
      component:Main
    },
    {
      path:'comment',
      // component:()=> import('../views/comment')
      component:Comment
    },{
      path:'material',
      component:Material
    }]
  } , {
    path: '/login',
    name: 'login',
    component:Login
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
