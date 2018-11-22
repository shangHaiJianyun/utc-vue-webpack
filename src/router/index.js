import Vue from "vue";
import Router from "vue-router";


Vue.use(Router);

export default new Router({
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
      path: "/admin-home",
      component: () => import("@/views/admin/index")
    },
    {
      path: "/dists",
      component: () => import("@/views/admin/dists")
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
      path: "/dist-home",
      component: () => import("@/views/dists/index")
    },
    {
      path: "/submit-project",
      component: () => import("@/views/dists/submit-project")
    },
    {
      path: "/dispute-project",
      component: () => import("@/views/dists/dispute-project")
    }
  ]
});
