<template>
  <form v-if="(this.online = false)" action="submit">
    <input type="text" label="email" v-model="email" id="" />
    <input type="text" label="password" v-model="password" id="" />
    <button class="login" @click.prevent="this.createUser(email, password)">
      Connect
    </button>
  </form>
  <h2 v-else>Bonjour {{ this.$store.state.user }}</h2>
</template>

<script>
import { auth } from "../firebaseInit";

import { createUserWithEmailAndPassword } from "firebase/auth";

export default {
  data() {
    return {
      email: "",
      password: "",
      online: false,
    };
  },
  methods: {
    createUser(email, password) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          this.$store.state.user = userCredential.user;
          this.online = true;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    },
  },
};
</script>
