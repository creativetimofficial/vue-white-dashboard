import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import '@/assets/scss/black-dashboard.scss';
import '@/assets/css/nucleo-icons.css';
import "@/assets/demo/demo.css";


import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";
import Notify from "@/components/NotificationPlugin";


Vue.config.productionTip = false;

// router setup
import routes from "./router";

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkExactActiveClass: "active"
});

Vue.use(VueRouter);

Vue.use(GlobalComponents);
Vue.use(GlobalDirectives);
Vue.use(Notify);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
