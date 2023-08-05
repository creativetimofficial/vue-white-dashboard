<template>
  <div class="wrapper">
    <!-- <div class="wrapper" :class="{'nav-open': $sidebar.showSidebar}"> -->

    <side-bar :background-color="backgroundColor">
      <!-- <mobile-menu slot="content"></mobile-menu> -->
      <sidebar-link to="/table">
        <i class="tim-icons icon-puzzle-10"></i>

        <template v-if="!isRTL">
          <p>AD Table</p>
        </template>

        <template v-else>
          <p>قائمة الجدول</p>
        </template>
      </sidebar-link>
      
    </side-bar>

    <sidebar-share :background-color.sync="backgroundColor"></sidebar-share>

    <div class="main-panel" :data="backgroundColor">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar"></dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>

<style lang="scss"></style>

<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./DashboardContent.vue";
import SidebarShare from "./SidebarSharePlugin.vue";
import MobileMenu from "./MobileMenu.vue";
import SideBar from "@/components/SidebarPlugin/SideBar.vue";
import SidebarLink from "@/components/SidebarPlugin/SidebarLink.vue";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    // eslint-disable-next-line vue/no-unused-components
    MobileMenu,
    SideBar,
    SidebarLink,
    SidebarShare,
  },
  data() {
    return {
      backgroundColor: "green",
    };
  },
  computed: {
    isRTL() {
      return this.$rtl.isRTL;
    },
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
  },
};
</script>
