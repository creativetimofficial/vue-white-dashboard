<template>
  <div class="wrapper">
    <!-- <div class="wrapper" :class="{'nav-open': $sidebar.showSidebar}"> -->

    <side-bar>
      <!-- <mobile-menu slot="content"></mobile-menu> -->
      <sidebar-link to="/dashboard">
        <i class="tim-icons icon-chart-pie-36"></i>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/icons">
        <i class="tim-icons icon-atom"></i>
        <p>Icons</p>
      </sidebar-link>
      <sidebar-link to="/maps">
        <i class="tim-icons icon-pin"></i>
        <p>Maps</p>
      </sidebar-link>
      <sidebar-link to="/notifications">
        <i class="tim-icons icon-bell-55"></i>
        <p>Notifications</p>
      </sidebar-link>
      <sidebar-link to="/user">
        <i class="tim-icons icon-single-02"></i>
        <p>User Profile</p>
      </sidebar-link>
      <sidebar-link to="/table">
        <i class="tim-icons icon-puzzle-10"></i>
        <p>Table list</p>
      </sidebar-link>
      <sidebar-link to="/typography">
        <i class="tim-icons icon-align-center"></i>
        <p>Typography</p>
      </sidebar-link>
      <sidebar-link to="/dashboard?enableRTL=true">
        <i class="tim-icons icon-world"></i>
        <p>Rtl Support</p>
      </sidebar-link>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content></dashboard-content>

      <content-footer></content-footer>
    </div>

  </div>
</template>
<style lang="scss"></style>
<script>

import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./DashboardContent.vue";
import MobileMenu from "./MobileMenu.vue";
import SideBar from "@/components/SidebarPlugin/SideBar.vue";
import SidebarLink from "@/components/SidebarPlugin/SidebarLink.vue";



export default{
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu,
    SideBar,
    SidebarLink
  },
  comouted: {
    isRTL() {
      return this.$rtl.isRTL;
    }
  }
};
</script>
