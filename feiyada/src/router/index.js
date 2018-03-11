import Vue from 'vue'
import Router from 'vue-router'
import AppMain from '@/container/AppMain/AppMain'
import  AppLogin from '@/container/AppLogin/AppLogin'

import  AppCar from '@/container/AppCar/AppCar'
import AppGoodDetail from '@/container/AppGoodDetail/AppGoodDetail'
import AppMen from '@/container/AppMen/AppMen'
import AppWomen from '@/container/AppWomen/AppWomen'
import AppLoves from '@/container/AppLoves/AppLoves'
import AppChage from '@/container/AppChage/AppChage'
import AppGift from '@/container/AppGift/AppGift'
import AppRegister from '@/container/AppRegister/AppRegister'
import AppDisnt from '@/container/AppDisnt/AppDisnt'
import AppBoyGood from '@/container/AppBoyGood/AppBoyGood'
import AppGirlGood from '@/container/AppGirlGood/AppGirlGood'
import AppBoyDetail from '@/container/AppBoyGood/AppBoyDetail'
Vue.use(Router)
//相当于启动Router（路由）

var router = new Router({
  routes: [
    {
      path:'/',
      redirect:'/main'
    },
    {
      path:'*',
      redirect:'/'
    },
    {
      path:'/main',
      component:AppMain,
      name:'main'
    
    },
    {
      path:'/car',
      name:'car',
      component:AppCar
    },
    {
      path:'/login',
      name:'login',
      component:AppLogin,
     
    },
    {
      path:'/detail/:type/:id',
      name:'detail',
      component:AppGoodDetail
    },
    {
      path:'/men',
      name:'men',
      component:AppMen
    },
    {
      path:'/women',
      name:'women',
      component:AppWomen
    },
    {
      path:'/loves',
      name:'loves',
      component:AppLoves
    },
    {
      path:'/chage',
      name:'chage',
      component:AppChage
    },
    {
      path:'/disnt',
      name:'disnt',
      component:AppDisnt
    },
    {
      path:'/gift',
      name:'gift',
      component:AppGift
    },
    {path:'/register',
    name:'register',
    component:AppRegister
  },
  {
    path:'/boygood/:id',
    name:'boygood',
    component:AppBoyGood
  },
  {
    path:'/girlgood/:id',
    name:'girlgood',
    component:AppGirlGood
  },
  {
    path:'/bgdetail/:types/:id',
    name:'bgdetail',
    component:AppBoyDetail
  }
  ]
})


export default router