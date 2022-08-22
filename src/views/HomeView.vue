<template>
  <div class="wrapper">
    <div class="cadre">
      <HeaderCross />
      <NavBar
        :animation="this.animation"
        :DisplayParole="this.DisplayParole"
        :wordClick="this.wordClick"
        :uneparole="this.uneparole"
        :uneref="this.uneref"
      />
      <FooterInfo />
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
      uneparole: "",
      uneref: "",
      paroles: [],
      refs: [],
      tampon: {},
      aboutClick: false,
      wordClick: false,
      animation: true,
    };
  },
  created() {
    setTimeout(() => (this.animation = false), 700);
    this.GetParolesFromDB();
  },
  methods: {
    async GetParolesFromDB() {
      const querySnapshot = await getDocs(collection(db, "word"));
      querySnapshot.forEach((doc, index) => {
        // doc.data() is never undefined for query doc snapshots
        this.paroles.push(doc.data().parole);
        this.refs.push(doc.data().ref);
      });
      this.$store.state.wordcount = this.paroles.length;
    },
    async DisplayParole() {
      let random = 0;
      random = this.GetRandomIndex(this.paroles.length);
      this.uneref = this.refs[random];
      this.uneparole = this.paroles[random];
      this.SpecialEffects();
    },
    GetRandomIndex(index) {
      const random = Math.random() * index;
      const roundedIndex = Math.round(random);
      if (roundedIndex === index) this.GetRandomIndex();
      return roundedIndex;
    },
    SpecialEffects() {
      this.wordClick = true;
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
