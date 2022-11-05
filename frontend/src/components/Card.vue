<template>
  <div class="created_card">
    {{ text }}
    <slot> </slot>
    <img
      @click.prevent.stop="delFunc"
      id="del"
      src="../assets/close_window_48.png"
      alt="del"
    />
  </div>
</template>

<script>
export default {
  props: {
    text: { type: String, default: "" },
  },
  methods: {
    delFunc(event) {
      this.$emit("delClick", event);
    },
  },
};
</script>

<style scoped>
.created_card {
  color: var(--color-primary-dark);
  background: var(--color-white);
  font-size: var(--font-md);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 1rem 2rem;
  min-width: 20rem;
  margin: 0.5rem;
  position: relative;
  z-index: 1;
}
.created_card:first-of-type {
  margin-top: 0;
}

#del {
  width: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  display: none;
}

.created_card:hover #del {
  display: block;
}
</style>
