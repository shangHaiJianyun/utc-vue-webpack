import Vue from "vue";
import Router from "vue-router";


Vue.use(Router);
const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      name: "login",
      component: () => import("@/views/auth/login")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/auth/login")
    },
    {
      path: "/home",
      // name: "myhome",
      component: () => import("@/components/HelloWorld")

    },

    {
      path: "/register",
      component: () => import("@/views/auth/register")
    },
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
      path: '/index',
      component: () => import("@/views/user/index")
    },
    {
      path: '/ClientOrders',
      component: () => import("@/views/user/order-list")
    },
    {
      path: '/ClientOrdersAll',
      component: () => import("@/views/admin/order-list-all")
    },
    {
      path: "/Arealist",
      component: () => import("@/views/admin/area-list")
    },
    {
      path: "/map",
      component: () => import("@/views/admin/map-list")
    },
    {
      path: "/simulated-form",
      component: () => import("@/views/admin/simulated-form")
    },
    {
      path: "/order-map",
      component: () => import("@/views/admin/order-map")
    },
    {
      path: "/gould-map",
      component: () => import("@/views/admin/gould-map")
    },
    {
      path: "/official-activities",
      component: () => import("@/views/admin/official-activities")
    },
    {
      path: "/sharing-activities",
      component: () => import("@/views/admin/sharing-activities")
    },
    {
      path: "/simulation-gantt",
      component: () => import("@/views/admin/simulation-gantt")
    },
    {
      path: "/strategy-map",
      component: () => import("@/views/admin/strategy-map")
    },
    {
      path: "/official-account",
      component: () => import("@/views/admin/official-account")
    }

  ]
});
export default router



router.beforeEach(function (to, from, next) { //to即为要跳转的页面，该页面需要验证时，进行登录验证
  if (window.sessionStorage.getItem('token') != null) {
    next()
  } else {
    if (to.path === '/login' || to.path === '/register') {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  }

})
