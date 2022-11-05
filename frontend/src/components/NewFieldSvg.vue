<template>
  <div>
    <button @click.prevent="transmitAdd">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
        width="29"
        height="29"
        viewBox="0 0 29 29"
        xml:space="preserve"
      >
        <desc>Created with Fabric.js 3.6.3</desc>
        <defs></defs>
        <g transform="matrix(0.73 0 0 0.73 14.63 14.63)">
          <g style="">
            <g transform="matrix(1 0 0 1 0 0)">
              <rect
                style="
                  stroke: none;
                  stroke-width: 1;
                  stroke-dasharray: none;
                  stroke-linecap: butt;
                  stroke-dashoffset: 0;
                  stroke-linejoin: miter;
                  stroke-miterlimit: 4;
                  fill: rgb(242, 153, 74);
                  fill-rule: nonzero;
                  opacity: 1;
                "
                x="-20"
                y="-20"
                rx="4"
                ry="4"
                width="40"
                height="40"
              />
            </g>
            <g transform="matrix(1 0 0 1 0 -0.67)">
              <rect
                style="
                  stroke: none;
                  stroke-width: 1;
                  stroke-dasharray: none;
                  stroke-linecap: butt;
                  stroke-dashoffset: 0;
                  stroke-linejoin: miter;
                  stroke-miterlimit: 4;
                  fill: rgb(255, 255, 255);
                  fill-rule: nonzero;
                  opacity: 1;
                "
                x="-13.33335"
                y="-3.333335"
                rx="0"
                ry="0"
                width="26.6667"
                height="6.66667"
              />
            </g>
            <g transform="matrix(1 0 0 1 0.67 0)">
              <rect
                style="
                  stroke: none;
                  stroke-width: 1;
                  stroke-dasharray: none;
                  stroke-linecap: butt;
                  stroke-dashoffset: 0;
                  stroke-linejoin: miter;
                  stroke-miterlimit: 4;
                  fill: rgb(255, 255, 255);
                  fill-rule: nonzero;
                  opacity: 1;
                "
                x="-3.333335"
                y="-13.33335"
                rx="0"
                ry="0"
                width="6.66667"
                height="26.6667"
              />
            </g>
          </g>
        </g>
      </svg>
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
    <input v-if="this.chars > 0" v-model="chars" class="char" disabled />
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
        this.longPress = true;
      }
    },
  },
};
</script>

<style scoped>
div {
  display: flex;
  align-items: center;
  position: relative;
}
input {
  width: 40vw;
  max-width: 40rem;
  padding: 0.6rem 2.5rem 0.6rem 0.5rem;
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

  /* transform: translateY(-0.1rem); */
}
.char {
  color: var(--color-red);
  font-size: 1.4rem;
  width: 2.5rem;
  height: 3rem;
  margin: 0;
  padding: 0;
  position: absolute;
  display: block;
  right: 0.8rem;
}
</style>
