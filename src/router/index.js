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
    path: "/gameplay/:roomname",
    name: "GamePlay",
    component: () =>
      import(/* webpackChunkName: "GamePlay" */ "../views/GamePlay.vue")
  },
  {
    path: "/lobby",
    name: "lobby",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "lobby" */ "../views/Lobby.vue")
  },
  {
    path: "/win",
    name: "WinCondition",
    component: () =>
      import(
        /* webpackChunkName: "WinCondition" */ "../components/WinCondition.vue"
      )
  },
  {
    path: "/lose",
    name: "LoseCondition",
    component: () =>
      import(
        /* webpackChunkName: "LoseCondition" */ "../components/LoseCondition.vue"
      )
  },
  {
    path: "/close",
    name: "Close",
    component: () =>
      import(/* webpackChunkName: "Close" */ "../components/Closing.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
