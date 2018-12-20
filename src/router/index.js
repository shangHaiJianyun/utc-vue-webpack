import Vue from "vue";
import Router from "vue-router";


Vue.use(Router);

const router= new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      component: () => import("@/views/Home")
    },
    {
      path: "/home",
      // name: "myhome",
      component: () => import("@/components/HelloWorld")

    },
    {
      path: "/login",
      component: () => import("@/views/auth/login")
    },
    // admin
    {
      path: "/admin",
      component: () => import("@/views/admin/index")
    },
    {
      path: "/admin-dists",
      component: () => import("@/views/admin/dists")
    },
    {
      path: "/admin-users",
      component: () => import("@/views/admin/users")
    },
    {
      path: "/projects",
      component: () => import("@/views/admin/projects")
    },
    {
      path: "/settings",
      component: () => import("@/views/admin/settings")
    },
    // Dists
    {
      path: "/dist",
      component: () => import("@/views/dists/index")
    },
    {
      path: "/submit-project",
      component: () => import("@/views/dists/submit-project")
    },
    {
      path: "/dispute-project",
      component: () => import("@/views/dists/dispute-project")
    },
    {
      path: '/user',
      component: () => import("@/views/user/index")
    }

  ]
});
export default router



router.beforeEach(function (to, from, next) {//to即为要跳转的页面，该页面需要验证时，进行登录验证
  if(to.path === '/login') {
    if (window.sessionStorage.getItem('token')) {
      next({path:'/admin'})
    }
    next()
  }
  else {
    if(!window.sessionStorage.getItem('token')) {
      router.push({path: '/login'})
    }else{
      next()
    }
  }
})

