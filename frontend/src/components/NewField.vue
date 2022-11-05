<template>
  <div>
    <button @click.prevent="transmitAdd">
      <slot></slot>
    </button>
    <input
      v-model="userinput"
      @input="transmitData"
      type="text"
      :placeholder="text"
      @keydown="onkeydown"
      @keyup="onkeyup"
      :maxlength="limit"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      userinput: "",
      chars: 0,
      longPress: false,
    };
  },
  props: {
    text: String,
    limit: { type: Number, default: 45 },
  },
  methods: {
    transmitData(event) {
      this.$emit("transmit-data", this.userinput);
    },
    transmitAdd(event) {
      // console.log(event);
      this.$emit("transmit-add", event);
      this.userinput = "";
      this.chars = 0;
    },
    onkeyup(event) {
      this.longPress = false;
      let val = this.userinput;
      let len = val.length;

      this.chars = len;

      // prevent leading and trailing whitespace
      if (this.userinput) {
        if (len == 1) {
          if (event.keyCode == 32) {
            console.log("up " + this.userinput);
            this.userinput = this.userinput.trim();
            this.chars = 0;
          }
        }
      }
    },
    onkeydown(event) {
      // if the key pressed is a char
      if (
        (event.keyCode >= 45 && event.keyCode <= 90) ||
        (event.keyCode >= 96 && event.keyCode <= 111) ||
        (event.keyCode >= 186 && event.keyCode <= 222)
      ) {
        // if the char key is pressed detect long press (no keyup event)
        if (this.longPress) {
          // prevent long press
          event.preventDefault();
        }
        // this.longPress = true;
      }
    },
  },
};
</script>

<style scoped>
div {
  display: flex;
  align-items: center;
}
input {
  width: 40vw;
  max-width: 40rem;
  padding: 0.5rem 0.6rem;
  font-family: "Noto Sans", sans-serif;
  font-weight: 500;
  font-size: var(--font-sm);
  transform: translateY(-0.1rem);
  margin: 1rem;
  border-radius: 0.2rem;
  color: var(--color-primary-dark);

  border: none;
  background-image: none;
  background-color: var(--color-white);
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  outline: none;
}
input::placeholder {
  color: var(--color-tertiary-light);
}
button {
  cursor: pointer;
  color: var(--color-white);
  background: var(--color-secondary-yellow);
  height: 3rem;
  /* min-width: 4rem; */
  padding: 0.8rem 1rem;
  font-weight: bold;
  transform: translateY(-0.1rem);
}
</style>
