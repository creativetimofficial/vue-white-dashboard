<template>
  <li
      class="dropdown nav-item"
      :class="{show: isOpen}"
      @click="toggleDropDown">
      <slot></slot>

  </li>

</template>
<script>

// import ClickOutside from 'vue-click-outside';

  export default {
    name: "drop-down",
    data(){
      return{
        isOpen: false
      };
    },
    methods: {
      toggleDropDown(){
        this.isOpen = !this.isOpen;
      },
      closeDropDown(){
        this.isOpen = false;
      }
    }
  }
</script>

<style>
</style>
