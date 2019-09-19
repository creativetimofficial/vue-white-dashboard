<template>
  <div
      class="dropdown"
      :class="{open: isOpen}"
      @click="toggleDropDown"
      v-click-outside="closeDropDown">
  </div>
  <slot></slot>
</template>
<script>
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
