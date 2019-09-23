<template>
  <div class="card">
    <div class="card-header text-left" v-if="$slots.header || title">
      <slot name="header">
        <h5 class="card-category" v-if="subTitle">{{subTitle}}</h5>
        <h2 class="card-title">{{ title }}</h2>
      </slot>
    </div>
    <div class="card-body" v-if="$slots.default">
      <slot></slot>
    </div>
    <div class="card-footer" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
export default{
  name:"card",
  props: {
    title: String,
    subTitle: String
  }
}
</script>
<style>
</style>
