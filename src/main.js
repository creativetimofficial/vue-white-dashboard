import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import '@/assets/scss/black-dashboard.scss';
import '@/assets/css/nucleo-icons.css';


Vue.config.productionTip = false;

// router setup
import routes from "./router";

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
});

Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
