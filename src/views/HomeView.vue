<template>
  <div class="wrapper">
    <div class="cadre">
      <HeaderCross />
      <NavBar
        :animation="this.animation"
        :GetParolesFromDB="this.GetParolesFromDB"
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

export default {
  name: "app",
  components: { HeaderCross, BlueButton, NavBar, UneParole, FooterInfo, LogIn },
  data() {
    return {
      uneparole: "",
      uneref: "",
      tampon: {},
      aboutClick: false,
      wordClick: false,
      animation: true,
    };
  },
  created() {
    setTimeout(() => (this.animation = false), 700);
  },
  methods: {
    async GetParolesFromDB() {
      const querySnapshot = await getDocs(collection(db, "word"));
      const refs = [];
      const paroles = [];
      let random = 0;
      querySnapshot.forEach((doc, index) => {
        // doc.data() is never undefined for query doc snapshots
        paroles.push(doc.data().parole);
        refs.push(doc.data().ref);
      });
      random = this.GetRandomIndex(paroles.length);
      this.uneref = refs[random];
      this.uneparole = paroles[random];
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
    // loadWord() {
    //   this.tampon = this.uneparole;
    //   this.wordClick = true;
    //   this.animation = true;
    //   setTimeout(() => (this.animation = false), 700);
    //   this.uneparole = this.GetParolesFromDB();
    //   console.log(this.uneparole);
    //   while (this.uneparole === undefined) {
    //     this.uneparole = this.GetParolesFromDB();
    //   }
    //   if (this.sameWord()) this.loadWord();
    // },
    // sameWord() {
    //   if (this.uneparole === this.tampon) return true;
    // },
  },
};
</script>
