import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Opening",
    component: () =>
      import(/* webpackChunkName: "Opening" */ "../views/Opening.vue"),
    children: [
      {
        path: "loading",
        name: "Loading",
        component: () =>
          import(/* webpackChunkName: "Home" */ "../components/Loading.vue")
      },
      {
        path: "home",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "Home" */ "../views/Home.vue")
      }
    ]
  },
  {
    path: "/characters",
    name: "Characters",
    component: () =>
      import(/* webpackChunkName: "Characters" */ "../views/Characters.vue")
  },
  {
    path: "/gameplay",
    name: "GamePlay",
    component: () =>
      import(/* webpackChunkName: "GamePlay" */ "../views/GamePlay.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
