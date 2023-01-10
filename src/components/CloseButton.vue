<template>
  <button
    type="button"
    class="navbar-toggler"
    data-toggle="collapse"
    @click="handleClick"
    :data-target="`#${target}`"
    :aria-controls="target"
    :aria-expanded="expanded"
    aria-label="Toggle navigation"
  ></button>
</template>
<script>
export default {
  name: "close-button",
  props: {
    target: [String, Number],
    expanded: Boolean,
  },
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    },
  },
};
</script>
<style></style>
