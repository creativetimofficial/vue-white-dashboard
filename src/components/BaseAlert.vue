<template>
  <div v-if="visible" class="alert text-left" :class="[`alert-${type}`, {'alert-with-icon': withIcon }]" role="alert">
    <slot v-if="!dismissible"></slot>
    <div v-else class="container">
      <slot></slot>
      <slot name="dismiss-icon">
        <button type="button" class="close" aria-label="Close" @click="dismissAlert">
          <span aria-hidden="true">
            <i class="tim-icons icon-simple-remove"></i>
          </span>
        </button>
      </slot>
    </div>
  </div>
</template>
<script>
  export default {
    name:'base-alert',
    props:{
      type:{
        type: String,
        default: 'default'
      },
      withIcon:{
        type: Boolean,
        default: false
      },
      dismissible: {
        type: Boolean,
        default: false
      }
    },
    data(){
      return{
        visible: true
      }
    },
    methods: {
      dismissAlert(){
        this.visible = false;
      }
    }
  }
</script>
<style>
</style>
