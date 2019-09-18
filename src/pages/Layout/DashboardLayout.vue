<template>
  <div class="wrapper" :class="{'nav-open': $sidebar.showSidebar}">
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/dashboard">
        <icon></icon>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/icons">
        <icon></icon>
        <p>Icons</p>
      </sidebar-link>
      <sidebar-link to="/maps">
        <icon></icon>
        <p>Maps</p>
      </sidebar-link>
      <sidebar-link to="/notifications">
        <icon></icon>
        <p>Notifications</p>
      </sidebar-link>
      <sidebar-link to="/user">
        <icon></icon>
        <p>User Profile</p>
      </sidebar-link>
      <sidebar-link to="/table">
        <icon></icon>
        <p>Table list</p>
      </sidebar-link>
      <sidebar-link to="/typography">
        <icon></icon>
        <p>Typography</p>
      </sidebar-link>
      <sidebar-link to="/rtl">
        <icon></icon>
        <p>Rtl</p>
      </sidebar-link>
      <sidebar-link to="/upgrade">
        <icon></icon>
        <p>Upgrade to PRO</p>
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

export default{
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu
  }
};
</script>
