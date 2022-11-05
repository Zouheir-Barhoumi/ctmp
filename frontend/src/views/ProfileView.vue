<template>
  <!-- <Header /> -->
  <div class="main_container">
    <div class="wr">
      <div class="wr__section wr__section-left">
        <div class="wrapper_titlefield">
          <label for="#">User Name:</label>
          <input :value="$store.state.user.username" type="text" disabled />
        </div>
        <div class="wrapper_titlefield">
          <label for="#">Email:</label>
          <input :value="$store.state.user.email" type="text" disabled />
        </div>
      </div>
      <div class="wr__section wr__section-right"></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},

  beforeMount() {},
};
</script>

<style scoped>
.wr {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  color: var(--color-black);
}
.wr__section {
  justify-self: start;
  width: 50%;
  height: 100%;
  padding-top: 2rem;
}
.wr__section-left {
  /* background: var(--color-red); */
}
.wr__section-right {
  background: var(--color-green);
}
.wrapper_titlefield {
  color: var(--color-primary-dark);
  display: flex;
  gap: 2rem;
  margin-left: 2rem;
  margin-bottom: 2rem;
  justify-content: space-between;
}
label {
  font-size: 2rem;
  font-weight: bold;
  margin-right: 2rem;
}
input {
  border: none;
  background-image: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  outline: none;
  min-width: 16rem;
  /* margin-left: 0.5rem; */
  padding: 0 0 0 1rem;
  font-size: 1.93rem;
}

/*************
/* SCROLL STYLES */
/* width */
::-webkit-scrollbar {
  width: 1rem;
}
</style>
