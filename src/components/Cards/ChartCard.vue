<template>
  <card>
    <template slot="header">
      <h5 class="card-category">
        <slot name="subTitle">
          {{subTitle}}
        </slot>
      </h5>
      <h2 class="card-title">
        <slot name="title">
          {{title}}
        </slot>
      </h2>
    </template>
    <div>
    </div>
  </card>
</template>
<script>
import Card from "./Card.vue";
export default {
  name: "chart-card",
  components: {
    Card
  }
}
</script>
<style>
</style>
