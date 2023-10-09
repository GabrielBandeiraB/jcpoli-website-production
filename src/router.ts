import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/escola",
      name: "escola",
      component: () =>
        import(/* webpackChunkName: "evento2" */ "./views/Escola.vue")
    },
    {
      path: "/manutencao",
      name: "manutencao",
      component: () =>
        import(/* webpackChunkName: "account" */ "./views/Maintenance.vue")
    },

    /*{
      path: "/minicursos",
      name: "minicursos",
      component: () =>
        import( "./views/MiniCourses.vue")
    },*/
    {
      path: "/hackaton",
      name: "hackaton",
      component: () =>
        import(/* webpackChunkName: "hackaton" */"./views/Hackaton.vue")
        //import(/* webpackChunkName: "minicurso" */ "./views/MiniCourses.vue")
    }, 
    {
      path: "/palestras",
      name: "palestras",
      component: () =>
        import(/* webpackChunkName: "minicurso" */ "./views/Palestras.vue")
    },

    {
      path: "*",
      component: () =>
        import(/* webpackChunkName: "ops" */ "./views/four04.vue")
    },



    /* REMOVE PATH JGES
    {
      path: "/jges",
      component: () =>
        import(/* webpackChunkName: "jges"  "./views/JGES.vue")
    },
    */
   
    
  ]
});

// router.beforeEach((to, from, next) => {
//   if (to.path.startsWith("/manutencao")) {
//     next();
//   } else {
//     next("/manutencao");
//   }
// });

export default router;
