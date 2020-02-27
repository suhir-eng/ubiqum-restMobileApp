import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Restlist from '../views/RestList.vue'
import RestDetails from '../views/RestDetails.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import Chat from '../views/Chat.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
{
    path: '/RestList',
    name: 'RestList',
    component: Restlist
},
{
  path: '/RestDetails/:restid',
  name: 'RestDetails',
  component: RestDetails,
  
},
{
  path: '/SignIn',
  name: 'SignIn',
  component: SignIn,
},
{
  path: '/SignUp',
  name: 'SignUp',
  component: SignUp,
},
{
  path: '/Chat',
  name: 'Chat',
  component: Chat,
  props :true,
  beforeEnter:(to, from, next) => {
    if (to.params.email){
      next();
    }else{
      next({name :'SignIn'})
    }
  }
},

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
