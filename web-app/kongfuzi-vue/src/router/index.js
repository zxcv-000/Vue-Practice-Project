import Vue from 'vue'
import Router from 'vue-router'

import Home from "../components/Home";
import LogIn from "../components/LogIn";
import Register from "../components/Register";
import Mine from "../components/Mine";
import Card from "../components/ShoppingCart/Cart.vue";
import Detail from "../components/Detail.vue";

Vue.use(Router);

const router = new Router({
  routes: [{
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        flag: true,
      }
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail

    }, {
      path: '/card',
      name: 'card',
      component: Card,
      meta: {
        requireAuth: true
      }
    }, {
      path: '/login',
      name: 'login',
      component: LogIn,

    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/',
      component: Home,
      meta: {
        flag: true,
      }
    }
  ]
});


router.beforeEach((to, from, next) => {
  if (to.name === 'login') {
    next();
  } else if (to.matched.some(record => record.meta.requireAuth)) {
    let token = localStorage.getItem('Authorization');
    if (!token) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next();
    }
  } else {
    next();
  }
})



export default router;
