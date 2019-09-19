<template>
  <li>
    <router-link v-bind="$attrs">
      <slot>
        <i></i>
        <p>{{ link.name }}</p>
      </slot>
    </router-link>
  </li>
</template>
<script>
  export default{
    name: "sidebar-link",
    inject: {
      autoClose: {
        default: true
      }
    },
    props:{
      link:{
        type: [String, Object],
        default: () => {
          return {
            name:"",
            path:"",
            icon:""
          };
        }
      },
      tag: {
        type: String,
        default: "router-link"
      }
    }
  }
</script>
<style>
</style>
