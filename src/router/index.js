import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

const routes = [
  {
    path:'/msite',
    name:'msite',
    component: ()=> import("../views/Msite/Msite.vue"),
    meta:{
      showFooter: true
    }
  },
  {
    path:'/search',
    name:'search',
    component: ()=> import("../views/Search/Search.vue"),
    meta:{
      showFooter: true
    }
  },
  {
    path:'/order',
    name:'order',
    component: ()=> import("../views/Order/Order.vue"),
    meta:{
      showFooter: true
    }
  },
  {
    path:'/profile',
    name:'profile',
    component: ()=> import("../views/Profile/Profile.vue"),
    meta:{
      showFooter: true
    }
  },
  {
    path:'/login',
    name:'login',
    component:()=> import("../views/Login/Login.vue")
  },
  {
    path:'/',
    redirect:'/msite'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
