<template>
  <div class="wrapper">
    <div class="cadre">
      <HeaderCross />
      <NavBar
        :animation="this.animation"
        :DisplayParole="this.DisplayParole"
        :uneparole="this.uneparole"
        :uneref="this.uneref"
      />
      <FooterInfo :DisplayParole="this.DisplayParole" />
    </div>
  </div>
</template>
<script>
import HeaderCross from "../components/HeaderCross.vue";
import FooterInfo from "../components/FooterInfo.vue";
import BlueButton from "../components/BlueButton.vue";
import NavBar from "../components/NavBar.vue";
import UneParole from "../components/UneParole.vue";
import { getDocs, collection } from "firebase/firestore";
import LogIn from "../components/LogIn.vue";
import { db } from "../firebaseInit";
import { mapState } from "vuex";

export default {
  name: "app",
  components: { HeaderCross, BlueButton, NavBar, UneParole, FooterInfo, LogIn },
  data() {
    return {
      // une parole et une ref come from paroles et refs in DisplayParoles()
      uneparole: "",
      uneref: "",
      // paroles and refs come from firestore
      paroles: [],
      refs: [],
      // wordClick and animation are activated with the button
      animation: true,
    };
  },
  created() {
    setTimeout(() => (this.animation = false), 700);
    this.GetParolesFromDB();
    this.$store.state.wordClick = false;
  },
  methods: {
    async GetParolesFromDB() {
      this.$store.state.querySnapshot = await getDocs(collection(db, "word"));
      this.$store.state.ps = [];
      this.$store.state.gosp = [];
      this.$store.state.at = [];
      this.$store.state.nt = [];
      this.$store.state.querySnapshot.forEach((doc, index) => {
        // doc.data() is never undefined for query doc snapshots
        this.paroles.push(doc.data().parole);
        this.refs.push(doc.data().ref);
        if (doc.data().ps) this.$store.state.ps.push(doc.data().ps);
        if (doc.data().gosp) this.$store.state.gosp.push(doc.data().gosp);
        if (doc.data().at) this.$store.state.at.push(doc.data().at);
        if (doc.data().nt) this.$store.state.nt.push(doc.data().nt);
      });
      this.$store.state.wordcount = this.paroles.length;
    },
    // la fonction qui affiche la parole sur la page
    async DisplayParole() {
      let random = 0;
      random = this.GetRandomIndex(this.paroles.length);
      console.log(random);
      this.uneref = this.refs[random];
      this.uneparole = this.paroles[random];
      const replaceWith = `<br>`;
      this.uneparole = this.uneparole.replaceAll(/\\n/g, replaceWith);
      this.SpecialEffects();
    },
    // La randomisation de la parole
    GetRandomIndex(index) {
      const random = Math.random() * (index - 1);
      const roundedIndex = Math.round(random);
      return roundedIndex;
    },
    // apparition et disparition du bouton, et de l'animation
    SpecialEffects() {
      this.$store.state.wordClick = true;
      this.animation = true;
      setTimeout(() => (this.animation = false), 700);
    },
  },
  computed: mapState([
    // map this.wordLength to store.state.wordLength
    "wordcount",
  ]),
};
</script>
