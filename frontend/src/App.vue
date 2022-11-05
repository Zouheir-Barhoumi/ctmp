<template>
  <div class="logo">
    <img src="@/assets/Logo.svg" alt="" />
  </div>
  <nav>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <Header v-if="condition" />
  </nav>
  <router-view />
</template>
<script>
import Header from "@/components/Header.vue";

export default {
  components: {
    Header,
  },
  computed: {
    condition() {
      let route = this.$route.name;
      return (
        route == "lists" ||
        route == "projects" ||
        route == "profile" ||
        route == "teams"
      );
    },
  },
  methods: {
    redirectToLogin() {
      this.$router.push("/");
    },
  },
  beforeMount() {
    if (!this.$store.state.loggedIn) {
      this.redirectToLogin();
    }
  },
};
</script>
<style>
/* RESET */
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%; /* 1rem = 10px = 62.5% of browser's default font-size (16px) */
}

a {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:hover {
  cursor: pointer;
}

li {
  list-style-type: none;
}

li:hover {
  cursor: pointer;
}

button {
  background: none;
  border: none;
  outline: none;
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}
/* dummy reset */
element {
  border: none;
  background-image: none;
  background-color: transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  outline: none;
}
/* END OF RESET */
/*********************
*********************
********************
*******************
********************
*********************
**********************/
/* ROOT STYLE */
:root {
  /* UTILS */
  --space-lg: 5rem;
  --space-md: 2.5rem;
  --space-sm: 1.5rem;

  --font-xs: 1.4rem;
  --font-sm: 1.6rem;
  --font-md: 1.8rem;
  --font-lg: 2rem;
  --font-xl: 2.8rem;
  /* END OF UTILS
  *
  */

  /* COLORS STYLE */
  --color-white: #fff;
  --color-red: #eb5757;
  --color-green: #27ae60;

  --color-primary-gradient: linear-gradient(
    180deg,
    rgba(86, 204, 242) 0%,
    rgba(45, 156, 219) 100%
  );
  --color-secondary-gradient: linear-gradient(
    180deg,
    rgba(86, 204, 242, 0) 0%,
    #56ccf2 100%
  );
  --color--tertiary-gradient: linear-gradient(
    180deg,
    rgba(39, 174, 96) 0%,
    rgba(30, 145, 79) 100%
  );

  --color-primary-blue: #56ccf2;
  --color-secondary-blue: #2d9cdb;

  --color-primary-dark: #332e2c;
  --color-secondary-dark: #222f3e;
  --color-black: #332e2c;

  --color-primary-light: #f9f9f9;
  --color-secondary-light: #eef7fa;
  --color-tertiary-light: #96a5ad;

  --color-primary-yellow: #f0cd69;
  --color-secondary-yellow: #feca57;
  /* END OF COLORS */
}
/* END OF ROOT */
/*********************
*********************
********************
*******************
********************
*********************
**********************/
/* GLOBAL STYLE */
/* FONTS */
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600&display=swap");
html {
}
body {
  font-size: 1.4rem;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  line-height: 1.75;
  color: var(--color-white);
  background: var(--color-secondary-blue);
}

p {
  margin-bottom: 1rem;
}

h1,
h2,
h3,
h4,
h5 {
  margin: 3rem 0 1.38rem;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  line-height: 1.3;
}

h1 {
  margin-top: 0;
  font-size: 3.052rem;
}

h2,
legend {
  font-size: 2.441rem;
}

h3 {
  font-size: 1.953rem;
}

h4 {
  font-size: 1.563rem;
}

h5 {
  font-size: 1.25rem;
}

small,
.text_small {
  font-size: 0.8rem;
}
/* END OF FONTS */

.main_container {
  width: 80vw;
  max-width: 113rem;
  min-width: 45rem;
  height: 85vh;
  margin: 0 auto 0 auto;
  background: var(--color-primary-light);
  padding: 2rem 2.5rem 0 2.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
}
.logo img {
  width: 4rem;
  /* height: 3.5rem; */
  position: absolute;
  left: 2rem;
  top: 1rem;
}
.wrapper {
  min-height: 15rem;
  width: 100%;
  background: var(--color-secondary-light);
  border: 0.1rem solid var(--color-secondary-blue);
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: start;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

#card {
  display: grid;
}
#card img {
  width: 3.5rem;
  justify-self: center;
  opacity: 0.5;
}

/***************
******************
*****************
/* Modal style */
.popup {
  color: var(--color-primary-dark);
  width: 100vw;
  height: 100vw;
  position: fixed;
  background: rgba(0, 0, 0, 0.25);
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  font-display: column;
}

.popup__modal {
  color: var(--color-primary-dark);
  width: 40vw;
  height: 10vw;
  position: absolute;
  background: var(--color-primary-light);
  top: 20vw;
  left: 50vw;
  transform: translate(-50%, -50%);
  z-index: 1001;
  font-size: 2rem;
  padding: 1rem 2.5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  flex-direction: column;
  border-radius: 0.5rem;
}

.popup__text {
  display: flex;
  align-items: start;
  flex-direction: row;
  margin-top: 1.2rem;
  width: 100%;
}

.popup label {
  margin: 0;
  padding: 0;
  width: 100%;
}
.popup input {
  border: none;
  background-image: none;
  background-color: var(--color-white);
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  outline: none;
  /*  */
  /* width: 40vw; */
  padding: 0.6rem 2.5rem 0.6rem 0.5rem;
  font-family: "Noto Sans", sans-serif;
  font-weight: 500;
  font-size: var(--font-sm);
  /* transform: translateY(-0.1rem); */
  border-radius: 0.2rem;
  color: var(--color-primary-dark);
  margin: 0;
  width: 100%;
}
.popup__btngroup {
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: row;
  flex-direction: row-reverse;
}
.popup__btngroup button {
  color: var(--color-white);
  padding: 1rem 1.6rem;
  font-size: 1.8rem;
  border-radius: 0.4rem;
  cursor: pointer;
}
.popup__btngroup button:first-of-type {
  background: var(--color-secondary-dark);
}
.popup__btngroup button:last-of-type {
  background: var(--color-green);
  margin-left: 2rem;
}
.popup__btngroup-right {
  width: 100%;
  display: flex;
  flex-direction: row;
}
/* .popup__btngroup-left {
  width: 60%;
} */

/***************
******************
****************
/* END OF listsview style */

/* END OF GLOBAL STYLE */

@media (max-width: 1050px) {
  :root {
    --font-xs: 1rem;
    --font-sm: 1.2rem;
    --font-md: 1.4rem;
    --font-lg: 1.6rem;
    --font-xl: 1.8rem;
  }
  .logo img {
    width: 3rem;
  }
}
</style>
