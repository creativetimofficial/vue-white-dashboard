<template>
  <div class="card" :class="[type && `card-${type}`]">
    <div class="card-header text-left" v-if="$slots.header || title">
      <slot name="header">
        <h5 class="card-category" v-if="subTitle">{{subTitle}}</h5>
        <h2 class="card-title"><i v-if="icon" class="tim-icons" :class="icon"></i>{{ title }}</h2>
      </slot>
    </div>
    <div class="card-body" v-if="$slots.default">
      <slot></slot>
    </div>
    <div class="card-footer text-left" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
export default{
  name:"card",
  props: {
    title: String,
    subTitle: String,
    type: String,
    icon: String
  }
}
</script>
<style>
</style>
