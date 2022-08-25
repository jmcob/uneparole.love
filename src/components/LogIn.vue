<template>
  <HeaderCross />
  <Arrow />
  <form v-if="!this.$store.state.user.email" action="submit">
    <p>
      Cet accès est réservé à la gestion de la base de données de paroles. Vous
      pouvez en demander l'accès sous conditions en me contactant sur
      <a href="mailto:jeanmaxime@uneparole.love">cette adresse mail</a>. <br />
    </p>
    <br />
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
    <br />
    <router-link to="/print">
      <h3>1. Gestionnaire d'impression</h3></router-link
    >
    <br />
    Le pdf des paroles est disponible derriere l'icone "imprimante" de la page
    d'accueil.
    <h4>Pour générer un nouveau pdf de toutes les paroles</h4>
    Demander l'impression au navigateur (Ctrl + P)
    <router-link to="/print"> de cette page</router-link>
    désélectionner l'impression avec marges, et imprimer en pdf (sélectionner
    l'imprimante PDF a la place de votre imprimante).
    <br />
    Cette fonction a priori n'est utile qu'à moi (jeanmaxime) afin de refaire un
    pdf avec les nouvelles paroles, mais on ne sait jamais. Bien vérifier qu'il
    n'y a pas de decalage des blocs au fur et a mesure des pages avant
    impression. Si c'est le cas il faut m'appeler. Fonctionne mieux avec
    Firefox, parce que conçu avec.

    <br />
    <form action="submit">
      <br />
      <h3>
        2. Soumettre une parole, à la base de donnée d'<a
          href="http://uneparole.love"
          >uneparole.love</a
        >
        <br /><br />
      </h3>
      <p>
        1 à 5 versets en version liturgique, pris sur
        <a href="http://www.aelf.org">AELF.org</a> de préférence, et
        <strong>sans les numéros de verset</strong> (car vous les incluez dans
        la référence ensuite). Si vous voulez insérez des sauts de ligne (et ne
        pas afficher un bloc de texte donc), insérez <strong>\n</strong> à
        l'endroit du ou des sauts de ligne, (antislash, n).
      </p>
      <textarea
        v-model="parole"
        id="parole"
        cols="30"
        rows="12"
        placeholder="Une Parole de la Bible"
      ></textarea>
      <br />
      <p>
        <br />
        La référence de la parole, exemple :
        <em
          >Première lettre aux Corinthiens, chapitre 13, versets 12 et 13 :</em
        >
      </p>
      <textarea
        v-model="ref"
        id="ref"
        cols="30"
        rows="3"
        placeholder="La référence de votre Parole"
      ></textarea>
      <br />
      <input type="radio" v-model="part" value="0" />Evangile
      <br />
      <input type="radio" v-model="part" value="1" />Psaume
      <br />
      <input type="radio" v-model="part" value="2" />Autres Nouveau Testament
      <br />
      <input type="radio" v-model="part" value="3" />Autres Ancien Testament
      <p>
        <br />
        Attention, ce formulaire ajoute directement votre Parole à la base de
        données. Il fonctionne.
        <br />
        <br />
        Votre mail est associé a la Parole que vous envoyez, je pourrais
        apporter des corrections éventuelles.
        <br /><br />
        En cas de doute, appelez moi !
      </p>
      <br />
      <button class="login" @click.prevent="this.Submit(parole, ref)">
        Soumettre votre Parole
      </button>
    </form>
    <p v-if="sent" :class="{ sent_transition: sent }" class="sent">
      <strong>Votre parole est publiée.</strong>
    </p>
    <br />
    <button class="logout" @click="LogOut()">Déconnexion</button>
  </div>
</template>

<script>
import { auth, db } from "../firebaseInit";
import { mapMutations } from "vuex";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import HeaderCross from "./HeaderCross.vue";
import Arrow from "./Arrow.vue";
import { collection, addDoc } from "firebase/firestore";

export default {
  data() {
    return {
      email: "",
      password: "",
      parole: "",
      ref: "",
      sent: false,
      // partie de la bible selectionnée :
      part: 0,
      gosp: false,
      ps: false,
      nt: false,
      at: false,
    };
  },
  components: { HeaderCross, Arrow },
  methods: {
    ...mapMutations(["whoAmI"]),

    createUser(email, password) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          this.$store.state.user = userCredential.user;
          console.log(userCredential);
          console.log(userCredential.user);
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
          localStorage.setItem("user", JSON.stringify(userCredential.user));
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
          this.$store.state.user = "";
          localStorage.clear();
          location.href = "https://www.uneparole.love/";
        })
        .catch((error) => {
          console.log(error);
        });
    },
    Submit(parole, ref) {
      if (this.part == 0) {
        this.gosp = true;
      } else if (this.part == 1) {
        this.ps = true;
      } else if (this.part == 2) {
        this.nt = true;
      } else if (this.part == 3) {
        this.at = true;
      }
      console.log(this.part, this.gosp, this.ps, this.at, this.nt);
      // Add a new document in collection "word"
      // Add a new document with a generated id.
      const docRef = addDoc(collection(db, "word"), {
        parole: parole,
        ref: ref,
        email: this.$store.state.user.email,
        gosp: this.gosp,
        ps: this.ps,
        nt: this.nt,
        at: this.at,
        date: Date.now(),
      });
      console.log("Document written by: ", docRef.email);
      this.parole = "";
      this.ref = "";
      this.sent = true;
      this.at = false;
      this.nt = false;
      this.gosp = false;
      this.ps = false;
    },
  },
  created() {
    this.whoAmI();
  },
};
</script>
<style scoped>
textarea,
input {
  background-color: lightblue;
}
.sent {
  color: crimson;
}
.logout {
  background-color: midnightblue;
  color: white;
  padding: 5px;
}
</style>
