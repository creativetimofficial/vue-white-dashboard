<template>
  <div class="sidebar" :data="backgroundColor">
    <div class="sidebar-wrapper text-left">
      <div class="logo">
        <a href="javascript:void(0)" class="simple-text logo-mini">
          {{ abv }}
        </a>

        <a
          href="javascript:void(0)"
          class="simple-text logo-normal"
          :class="$rtl.isRTL ? '' : 'text-left'"
        >
          {{ title }}
        </a>
      </div>
      <ul class="nav">
        <slot>
          <sidebar-link> </sidebar-link>
        </slot>
      </ul>
    </div>
  </div>
</template>
<script>
import SidebarLink from "./SidebarLink.vue";

export default {
  name: "side-bar",
  components: {
    SidebarLink,
  },
  props: {
    abv: {
      type: String,
      default: "CT",
    },
    title: {
      type: String,
      default: "Creative Tim",
    },
    backgroundColor: {
      type: String,
      default: "green",
    },
    sidebarLinks: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      activeLinkIndex: 0,
    };
  },
  computed: {
    isRTL() {
      return this.$rtl.isRTL;
    },
  },
  methods: {
    findActiveLink() {
      this.links.forEach((link, index) => {
        if (link.isActive()) {
          this.activeLinkIndex = index;
        }
      });
    },
  },
};
</script>
<style></style>
