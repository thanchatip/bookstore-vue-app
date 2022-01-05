import Vue from "vue";
import VueRouter from "vue-router";
import Home from '../views/Home.vue';
import Helloworld from '../components/HelloWorld.vue'
import BookList from '../views/books/List.vue'
import OrderCreate from '../views/orders/Edit.vue'
import UserList from '../views/users/List.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Helloworld
    },
    {
      path: '/books',
      name: 'BookList',
      component: BookList
    },
    {
      path: '/order-create',
      name: 'OrderCreate',
      component: OrderCreate
    },
    {
      path: '/users',
      name: 'UserList',
      component: UserList
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router