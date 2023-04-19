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
      path: "/cadastro",
      name: "cadastro",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/SignUp/SignUp.vue")
    },
    {
      path: "/cadastro/confirmacao",
      name: "confirmacao",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/SignUp/Confirm.vue")
    },
    {
      path: "/orientacoes",
      name: "orientacoes",
      component: () =>
        import(/* webpackChunkName: "orientacoes" */ "./views/SubmissionRules.vue")
    },
    {
      path: "/conta",
      name: "conta",
      component: () =>
        import(/* webpackChunkName: "account" */ "./views/Admin/MyAccount.vue")
    },
    {
      path: "/escola",
      name: "escola",
      component: () =>
        import(/* webpackChunkName: "evento2" */ "./views/Escola.vue")
    },
    {
      path: "/profile",
      name: "speakerProfile",
      component: () =>
        import(/* webpackChunkName: "speakerProfile" */ "./views/SpeakerProfile.vue")
    },
    {
      path: "/manutencao",
      name: "manutencao",
      component: () =>
        import(/* webpackChunkName: "account" */ "./views/Maintenance.vue")
    },
    {
      path: "/minicursos",
      name: "minicursos",
      component: () =>
        import(/* webpackChunkName: "minicurso" */ "./views/MiniCourses.vue")
    },
    {
      path: "/exposicoes",
      name: "exposicoes",
      component: () =>
        import(/* webpackChunkName: "exposicoes" */ "./views/Exposicoes.vue")
    },    
    {
      path: "/palestras",
      name: "palestras",
      component: () =>
        import(/* webpackChunkName: "minicurso" */ "./views/Palestras.vue")
    },


    {
      path: "/programacao",
      component: () =>
        import(/* webpackChunkName: "programacao" */ "./views/Programacao.vue")
    },
    {
      path: "/competicoes",
      component: () =>
        import(/* webpackChunkName: "programacao" */ "./views/Competicao.vue")
    },
    {
      path: "/egressos",
      component: () =>
        import(/* webpackChunkName: "egressos" */ "./views/Egressos.vue")
    },
    {
      path: "/anais",
      component: () =>
        import(/* webpackChunkName: "egressos" */ "./views/Anais.vue")
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
