<template>
  <nav
    class="navbar"
    :class="[
      { 'navbar-expand-lg': expand },
      { [`navbar-${effect}`]: effect },
      { 'navbar-transparent': transparent },
      { [`bg-${type}`]: type },
      { rounded: round },
    ]"
  >
    <div class="container">
      <slot name="container-pre"></slot>
      <slot name="brand">
        <a class="navbar-brand" href="#" @click.prevent="onTitleClick">
          {{ title }}
        </a>
      </slot>
      <navbar-toggle-button
        :toggled="toggled"
        :target="contentId"
        @click.native.stop="toggled = !toggled"
      >
      </navbar-toggle-button>

      <slot name="container-after"></slot>

      <div
        class="collapse navbar-collapse"
        :class="{ show: toggled }"
        :id="contentId"
        v-click-outside="closeMenu"
      >
        <div class="navbar-collapse-header">
          <slot name="content-header" :close-menu="closeMenu"></slot>
        </div>
        <slot :close-menu="closeMenu"></slot>
      </div>
    </div>
  </nav>
</template>
<script>
import NavbarToggleButton from "./NavbarToggleButton";

export default {
  name: "base-nav",
  components: {
    NavbarToggleButton,
  },
  props: {
    expand: {
      type: Boolean,
      default: false,
    },
    effect: {
      type: String,
      default: "dark",
    },
    transparent: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "primary",
    },
    round: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
    contentId: {
      type: [String, Number],
      default: Math.random().toString(),
    },
  },
  methods: {
    onTitleClick(evt) {
      this.$emit("title-click", evt);
    },
    closeMenu() {
      this.toggled = false;
    },
  },
  data() {
    return {
      toggled: false,
    };
  },
};
</script>
<style></style>
