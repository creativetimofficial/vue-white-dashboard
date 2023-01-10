<template>
  <SlideYUpTransition>
    <div
      class="modal fade"
      @click.self="closeModal"
      :class="[
        { 'show d-block': show },
        { 'd-none': !show },
        { 'modal-mini': type === 'mini' },
      ]"
      v-show="show"
      tabindex="-1"
      role="dialog"
      :aria-hidden="!show"
    >
      <div
        class="modal-dialog"
        :class="[
          { 'modal-notice': type === 'notice' },
          { 'modal-dialog-centered': centered },
          modalClasses,
        ]"
      >
        <div
          class="modal-content"
          :class="[
            gradient ? `bg-gradient-${gradient}` : '',
            modalContentClasses,
          ]"
        >
          <div
            class="modal-header"
            :class="[headerClasses]"
            v-if="$slots.header"
          >
            <slot name="header"></slot>
            <slot name="close-button">
              <button
                type="button"
                class="close"
                v-if="showClose"
                @click="closeModal"
                data-dismiss="modal"
                aria-label="Close"
              >
                <i class="tim-icons icon-simple-remove"></i>
              </button>
            </slot>
          </div>

          <div v-if="$slots.default" class="modal-body" :class="bodyClasses">
            <slot></slot>
          </div>

          <div class="modal-footer" :class="footerClasses" v-if="$slots.footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </SlideYUpTransition>
</template>

<script>
import { SlideYUpTransition } from "vue2-transitions";

export default {
  name: "modal",
  components: {
    SlideYUpTransition,
  },
  props: {
    show: Boolean,
    showClose: {
      type: Boolean,
      default: true,
    },
    centered: {
      type: Boolean,
      default: true,
    },
    type: {
      type: String,
      default: "",
      validator(value) {
        let acceptedValues = ["", "notice", "mini"];
        return acceptedValues.indexOf(value) !== -1;
      },
    },
    modalClasses: [Object, String],
    modalContentClasses: [Object, String],
    gradient: String,
    headerClasses: [Object, String],
    bodyClasses: [Object, String],
    footerClasses: [Object, String],
    watch: {
      show(val) {
        let documentClasses = document.body.classList;
        if (val) {
          documentClasses.add("modal-open");
        } else {
          documentClasses.remove("modal-open");
        }
      },
    },
  },
  methods: {
    closeModal() {
      this.$emit("update:show", false);
      this.$emit("close");
    },
  },
};
</script>

<style></style>
