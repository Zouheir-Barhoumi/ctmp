<template>
  <div class="created_card">
    <slot> </slot>
  </div>
</template>

<script>
export default {
  props: {},
  methods: {
    delFunc(event) {},
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
</style>
