<template>
  <div class="home">
    <form @submit.prevent="submit">
      <h1>Task Management Platform</h1>
      <div class="container">
        <fieldset>
          <legend>Login To Your Account</legend>
          <div class="container_field">
            <label>Email : </label>
            <input
              v-model="email"
              @input="checkForm"
              type="email"
              placeholder=""
              name="email"
              required
              :class="{ danger: emailErr }"
            />
          </div>
          <div class="container_field">
            <label>Password : </label>
            <input
              v-model="pwd"
              @input="checkForm"
              type="password"
              placeholder=""
              name="password"
              required
              :class="{ danger: pwdErr }"
            />
          </div>
          <ul v-for="error in errors" :key="error" class="errors">
            <li>{{ error }}</li>
          </ul>
          <div class="container_field submit">
            <button type="submit">Login</button>
            <a href="/signup"> Don't have an account? Signup </a>
          </div>
        </fieldset>
      </div>
    </form>
  </div>
</template>

<script>
// import _ from "lodash";
import { getEmail, getPwd, setEmail, setPwd, setUser } from "../content";
export default {
  name: "HomeView",
  data() {
    return {
      email: getEmail(),
      pwd: getPwd(),
      errors: [],
      emailErr: false,
      pwdErr: false,
    };
  },
  components: {},
  methods: {
    // updateEmail: _.debounce((event) => {
    //   this.email = event.target.value;
    // }, 300),
    // updatePwd: _.debounce((event) => {
    //   this.pwd = event.target.value;
    // }, 300),
    async submit() {
      setEmail(this.email);
      setPwd(this.pwd);
      if (this.email && this.pwd) {
        let obj = {};
        obj.email = this.email;
        obj.password = this.pwd;

        try {
          const res = await fetch("http://localhost:5000/users/login", {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            credentials: "include",
          });
          const data = await res.json();
          if (data.errors) {
            if (data.errors.email) {
              this.emailErr = data.errors.email;
              this.errors.push(data.errors.email);
            }
            if (data.errors.password) {
              this.pwdErr = data.errors.password;
              this.errors.push(data.errors.password);
            }
          }
          if (data.user) {
            const user = data.user;
            // console.log(user);
            this.$store.state.loggedIn = true;
            setUser(data.user);
            await this.$store.commit("SET_user", user);
            // console.log(this.$store.state.user);
            // location.assign("/profile");
            this.$router.push("/profile");
          }
        } catch (error) {
          console.log(error);
        }

        // this.$store.dispatch("POST_login", obj);
        // const data = this.$store.state.loginRes;
        // console.log(data);
        // if (data.errors) {
        //   // emailErr = data.errors.email;
        //   // pwdErr = data.errors.password;
        //   this.errors.push(data.errors.email);
        //   this.errors.push(data.errors.password);
        //   console.log(data);
        // }
        // if (data.user) {
        //   // redierct
        //   this.$router.push("/profile");
        // }
      }
    },
    checkForm() {
      this.emailErr = false;
      this.pwdErr = false;
      this.errors = [];
      if (!this.email) {
        this.emailErr = true;
        this.errors.push("Email required.");
      }
      if (!this.pwd) {
        this.pwdErr = true;
        this.errors.push("Passowrd required.");
      }
      if (this.email && this.pwd) {
        if (this.email.length < 5) {
          this.emailErr = true;
        }
        if (this.pwd.length < 8) {
          this.pwdErr = true;
          this.errors.push("Password must be at least 8 characters");
          this.errors.push("Password must be at least 8 characters");
        }
      }

      // this.$router.push({ name: "profile" });
    },
  },
};
</script>
<style scoped>
.danger {
  border: 1px solid var(--color-red);
}
h1 {
  margin-bottom: 5rem;
  font-size: 3.2rem;
}
form {
  z-index: 100;
  /* min-width: 40rem; */
  min-width: 30vw;
  max-width: 35vw;
  margin: 1rem auto 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  gap: 3rem;
  text-align: center;
}
.container {
  background: var(--color-primary-gradient);
  background: var(--color-secondary-gradient);
  display: flex;
  width: 100%;
}
.container_field {
  display: flex;
}

fieldset {
  /* padding: 1rem 3rem 2rem 3rem; */
  padding: 1rem;
  border: none;
  margin: auto;
}
legend {
  margin-bottom: 2rem;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-weight: bold;
}
label {
  text-align: left;
  display: block;
  margin: 1rem;
  font-size: 1.8rem;
  width: 30%;
  font-weight: bold;
}
input {
  border: none;
  background-image: none;
  background-color: var(--color-white);
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  outline: var(--color-red);
  /*  */
  /* width: 40vw; */
  padding: 0.6rem 2.5rem 0.6rem 0.5rem;
  font-family: "Noto Sans", sans-serif;
  font-weight: 500;
  font-size: var(--font-sm);
  /* transform: translateY(-0.1rem); */
  margin: 1rem;
  border-radius: 0.2rem;
  color: var(--color-primary-dark);
}
button {
  margin: 1rem;
  display: block;
  text-align: left;
}
button {
  text-align: center;
  /* background: var(--color-green); */
  background: var(--color--tertiary-gradient);
  color: var(--color-white);
  padding: 0.7rem 1.2rem;
  border-radius: 0.5rem;
  font-weight: bold;
  align-self: start;
  justify-self: start;
  cursor: pointer;
  font-size: 1.6rem;
}
.submit {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: end;
  height: 7rem;
}
a {
  display: block;
  text-align: left;
  color: var(--color-secondary-dark);
  align-self: end;
}
.errors li {
  list-style: square;
  color: var(--color-red);
}
</style>
