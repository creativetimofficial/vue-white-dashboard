import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import '@/assets/scss/black-dashboard.scss';
import '@/assets/css/nucleo-icons.css';

import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";

Vue.config.productionTip = false;

// router setup
import routes from "./router";

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
});

Vue.use(VueRouter);

Vue.use(GlobalComponents);
Vue.use(GlobalDirectives);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
