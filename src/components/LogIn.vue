<template>
  <h2 v-if="online">Bonjour {{ this.$store.state.user.email }}</h2>
  <form v-else action="submit">
    <input type="text" label="email" v-model="email" id="" />
    <input type="text" label="password" v-model="password" id="" />
    <button class="login" @click.prevent="this.createUser(email, password)">
      Connect
    </button>
  </form>
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
          console.log(userCredential);
          console.log(userCredential.user);
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
