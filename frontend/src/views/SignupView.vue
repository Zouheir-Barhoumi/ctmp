<template>
  <div class="signup">
    <form @submit.prevent="submit">
      <h1>Task Management Platform</h1>
      <div class="container">
        <fieldset>
          <legend>Create a free account</legend>
          <div class="container_field">
            <label>Firstname : </label>
            <input
              v-model="first"
              @input="checkForm"
              type="text"
              placeholder=""
              name="firstname"
              required
              :class="{ danger: firstErr }"
            />
          </div>
          <div class="container_field">
            <label>Lastname : </label>
            <input
              v-model="last"
              @input="checkForm"
              type="text"
              placeholder=""
              name="lastname"
              required
              :class="{ danger: lastErr }"
            />
          </div>
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
          <div class="register">
            <button type="submit">Signup</button>
            <a href="/"> You already have an account? Login </a>
          </div>
        </fieldset>
      </div>
    </form>
  </div>
</template>

<script>
import {
  getFirst,
  getLast,
  getEmail,
  getPwd,
  setFirst,
  setLast,
  setEmail,
  setPwd,
} from "../content";

export default {
  name: "SignupView",
  data() {
    return {
      first: getFirst(),
      last: getLast(),
      email: getEmail(),
      email: getEmail(),
      pwd: getPwd(),
      errors: [],
      firstErr: false,
      lastErr: false,
      emailErr: false,
      pwdErr: false,
    };
  },
  components: {},
  methods: {
    async submit() {
      setFirst(this.first);
      setLast(this.last);
      setEmail(this.email);
      setPwd(this.pwd);
      if (this.first && this.last && this.email && this.pwd) {
        let obj = {};
        obj.firstname = this.first;
        obj.lastname = this.last;
        obj.email = this.email;
        obj.password = this.pwd;
        try {
          const res = await fetch("http://localhost:5000/users/signup", {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            credentials: "include",
          });
          const data = await res.json();
          console.log(data);
          if (data.email) {
            this.emailErr = data.email;
            this.errors.push(data.email);
          }
          if (data.password) {
            this.pwdErr = data.password;
            this.errors.push(data.password);
          }
          if (data.user) {
            // redierct
            location.assign("/");
            // this.$router.push("/profile");
          }
        } catch (error) {
          console.log(error);
        }
      }
    },
    checkForm() {
      this.firstErr = false;
      this.lastErr = false;
      this.emailErr = false;
      this.pwdErr = false;
      this.errors = [];
      if (!this.first) {
        this.firstErr = true;
        this.errors.push("First name required.");
      }
      if (!this.last) {
        this.lastErr = true;
        this.errors.push("Last name required.");
      }
      if (!this.email) {
        this.emailErr = true;
        this.errors.push("Email required.");
      }
      if (!this.pwd) {
        this.pwdErr = true;
        this.errors.push("Passowrd required.");
      }
      if (this.first && this.last && this.email && this.pwd) {
        if (this.first.length < 3) {
          this.errors.push("First name must be at least 3 characters");
          this.firstErr = true;
        }
        if (this.last.length < 3) {
          this.errors.push("Last name must be at least 3 characters");
          this.lastErr = true;
        }
        if (this.email.length < 5) {
          this.emailErr = true;
        }
        if (this.pwd.length < 8) {
          this.pwdErr = true;
          this.errors.push("Password must be at least 8 characters");
        }
      }
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
  min-width: 30vw;
  max-width: 35vw;
  margin: 1rem auto 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  gap: 3rem;
  text-align: center;
  width: 100%;
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
  outline: none;
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
.register {
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
