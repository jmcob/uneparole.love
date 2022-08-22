<template>

  <HeaderCross />
  <form v-if="!online" action="submit">
    <input type="text" label="email" v-model="email" placeholder="email" />
    <br />
    <input
      type="text"
      label="password"
      v-model="password"
      placeholder="mot de passe"
    />
    <br />
    <button class="login" @click.prevent="this.LogIn(email, password)">
      Se connecter

    </button>
    <br />
  </form>

  <div v-else>
    <h2>Hello {{ this.$store.state.user.email }} !</h2>
    <form action="submit">
      <p>
        Soumettre une parole, à la base de donnée d'uneparole.love. Un à Cinq
        verset en version liturgique, pris sur
        <a href="http://www.aelf.org">AELF.org</a> de préférence :
      </p>
      <textarea v-model="parole" id="parole" cols="30" rows="10"></textarea>
      <p>
        La référence de la parole, exemple :
        <em
          >Première lettre aux Corinthiens, chapitre 13, versets 12 et 13 :</em
        >
      </p>
      <textarea v-model="ref" id="ref" cols="30" rows="3"></textarea>
      <br />
      Attention, ce formulaire ajoute directement votre parole à la base de
      données. Il fonctionne. En cas de doute, appelez moi !
      <button class="login" @click.prevent="this.Submit(parole, ref)">
        Soumettre la parole
      </button>
    </form>
    <p v-if="sent"><strong>Votre parole a été publiée.</strong></p>
    <button @click="LogOut()">Déconnexion</button>
  </div>

</template>

<script>
import { auth, db } from "../firebaseInit";

import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import HeaderCross from "./HeaderCross.vue";
import { collection, addDoc } from "firebase/firestore";

export default {
  data() {
    return {
      email: "",
      password: "",
      online: false,
      parole: "",
      ref: "",
      sent: false,
    };
  },
  components: { HeaderCross },
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
    LogIn(email, password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          this.$store.state.user = userCredential.user;
          this.online = true;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    },
    LogOut() {
      signOut(auth)
        .then(() => {
          this.online = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    Submit(parole, ref) {
      // Add a new document in collection "word"
      // Add a new document with a generated id.
      const docRef = addDoc(collection(db, "word"), {
        parole: parole,
        ref: ref,
        email: this.$store.state.user.email,
      });
      console.log("Document written with ID: ", docRef.id);
      this.parole = "";
      this.ref = "";
      this.sent = true;
    },
  },
};
</script>
<style scoped>
textarea,
input {
  background-color: lightblue;
}
</style>
