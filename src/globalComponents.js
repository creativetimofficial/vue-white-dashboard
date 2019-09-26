import DropDown from "./components/Dropdown.vue";
import Notify from "./components/NotificationPlugin";


/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install(Vue) {
    Vue.component("drop-down", DropDown);
    Vue.component("notify", Notify);

  }
};

export default GlobalComponents;
