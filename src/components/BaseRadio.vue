<template>
  <div
    class="form-check form-check-radio"
    :class="[inlineClass, { diabled: disabled }]"
  >
    <label :for="cbId" class="form-check-label">
      <input
        :id="cbId"
        class="form-check-input"
        type="radio"
        :disabled="disabled"
        :value="name"
        v-model="model"
      />
      <slot></slot>
      <span class="form-check-sign"></span>
    </label>
  </div>
</template>
<script>
export default {
  name: "base-radio",
  props: {
    name: [String, Number],
    disabled: Boolean,
    value: [String, Boolean],
    inline: Boolean,
  },
  data() {
    return {
      cbId: "",
    };
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
    inlineClass() {
      if (this.inline) {
        return `form-check-inline`;
      }
      return "";
    },
  },
  created() {
    this.cbId = Math.random().toString(16).slice(2);
  },
};
</script>
<style></style>
