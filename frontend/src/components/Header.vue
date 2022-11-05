<template>
  <div class="header">
    <div class="name">
      <avatar :fullname="fullname"></avatar>
      <span>{{ fullname }}</span>
    </div>
    <div class="nav">
      <li @click="propagate" :class="{ active: currentRoute == 'profile' }">
        <router-link to="/profile"> Profile </router-link>
      </li>
      <li @click="propagate" :class="{ active: currentRoute == 'projects' }">
        <router-link to="/projects"> Projects </router-link>
      </li>
      <li @click="propagate" :class="{ active: currentRoute == 'teams' }">
        <router-link to="/teams"> Teams </router-link>
      </li>
      <li @click="propagate" :class="{ active: currentRoute == 'lists' }">
        <router-link to="/lists"> Lists </router-link>
      </li>
    </div>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar.vue";
import { getUser, setUser } from "../content";

export default {
  components: {
    Avatar,
  },
  computed: {
    currentRoute() {
      return this.$route.name;
    },
    fullname() {
      return this.$store.state.user.username;
    },
  },
  methods: {
    propagate(event) {
      console.log(event.target.firstChild);
      event.target.firstChild.click();
    },
    getUser() {
      const user = getUser();
      this.$store.commit("SET_user", user);
    },
  },
  beforeMount() {},
};
</script>

<style scoped>
.header {
  height: 15vh;
  width: 80vw;
  max-width: 113rem;
  min-width: 45rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: end;
}
.name {
  height: 6rem;
  font-size: var(--font-lg);
  display: flex;
  gap: 1rem;
  align-items: center;
}
.nav {
  display: flex;
  /* background: goldenrod; */
  /* height: 4rem; */
  /* background: var(--color-tertiary-light); */
  font-size: var(--font-md);
  text-align: center;
  /* padding: 0.5rem 0; */
}
li {
  background: var(--color-tertiary-light);
  position: relative;
  padding: 0.5rem 0;
  min-width: 8rem;
  width: 10vw;
  /* z-index: 1; */
}
li a {
  color: white;
}
li:hover a {
  color: var(--color-black);
}
.nav > *:where(:not(:last-of-type))::after {
  display: block;
  position: absolute;
  content: "";
  width: 0.2rem;
  height: calc(100%);
  background: var(--color-white);
  top: 0;
  right: 0;
}
.active {
  background: var(--color-primary-light);
  color: var(--color-black);
}
.active a {
  color: var(--color-black);
}

nav li:hover,
nav li.router-link-active,
nav li.router-link-exact-active {
  background-color: var(--color-white);
  cursor: pointer;
}
</style>
