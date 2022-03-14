import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

//测试案例组件
import Header from '../components/MintUI/Header.vue';
import Button from '../components/MintUI/Button.vue';
import Field from '../components/MintUI/Field.vue';

import Checklist from '../components/MintUI/Checklist.vue';
import Radio from '../components/MintUI/Radio.vue';
import Switch from '../components/MintUI/Switch.vue';
import Cell from '../components/MintUI/Cell.vue';
import Navbar from '../components/MintUI/Navbar.vue';
import Swipe from '../components/MintUI/Swipe.vue';
import Lazy from '../components/MintUI/Lazy.vue';
import Tabbar from '../components/MintUI/Tabbar.vue';
import Style from '../components/MintUI/Style.vue';

//项目组件
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import Me from '../views/Me.vue';
import Profile from '../views/Profile.vue';
Vue.use(VueRouter)

const routes = [
  //设定路由信息
  {
    path:'/style',
    component:Style
  },
  {
    path:'/tabbar',
    component:Tabbar
  },
  {
    path:'/lazy',
    component:Lazy
  },
  {
    path:'/swipe',
    component:Swipe
  },
  {
    path:'/checklist',
    component:Checklist
  },
  {
    path:'/cell',
    component:Cell
  },
  {
    path:'/navbar',
    component:Navbar
  },
  {
    path:'/switch',
    component:Switch
  },
  {
    path:'/radio',
    component:Radio
  },
  {
    path:'/header',
    component:Header
  },
  {
    path:'/button',
    component:Button
  },
  {
    path:'/field',
    component:Field
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/me',
    component:Me
  },
  {
    path:'/register',
    component:Register
  },
  {
    path:'/login',
    component:Login
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
