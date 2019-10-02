import Vue from "vue";
import VueRouter from "vue-router";
import SocialSharing from "vue-social-sharing"
import VueGitHubButtons from "vue-github-buttons"
import "vue-github-buttons/dist/vue-github-buttons.css"
import App from "./App.vue";
import '@/assets/scss/black-dashboard.scss';
import '@/assets/css/nucleo-icons.css';
import "@/assets/demo/demo.css";


import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";
import RTLPlugin from "./RTLPlugin";
import Notify from "@/components/NotificationPlugin";
import i18n from "./i18n"


Vue.config.productionTip = false;

// router setup
import routes from "./router";

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkExactActiveClass: "active"
});

Vue.use(VueRouter);
Vue.use(SocialSharing);
Vue.use(VueGitHubButtons, { useCache: true });
Vue.use(GlobalComponents);
Vue.use(GlobalDirectives);
Vue.use(RTLPlugin);
Vue.use(Notify);

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount("#app");
