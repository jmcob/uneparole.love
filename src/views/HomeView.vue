<template>
  <div class="wrapper">
    <div class="cadre">
      <HeaderCross />
      <NavBar
        :animation="this.animation"
        :loadWord="this.loadWord"
        :wordClick="this.wordClick"
        :uneparole="this.uneparole"
      />
    </div>
  </div>
</template>
<script>
import HeaderCross from "../components/HeaderCross.vue";

import BlueButton from "../components/BlueButton.vue";
import NavBar from "../components/NavBar.vue";
import UneParole from "../components/UneParole.vue";
import paroles from "../json/paroles.json";

export default {
  name: "app",
  components: { HeaderCross, BlueButton, NavBar, UneParole },
  data() {
    return {
      paroles: paroles,
      uneparole: {
        parole: "",
        ref: "",
      },
      tampon: {
        parole: "",
        ref: "",
      },
      aboutClick: false,
      wordClick: false,
      animation: true,
    };
  },
  created() {
    setTimeout(() => (this.animation = false), 700);
  },
  methods: {
    GetRandomWord() {
      const index = Math.random() * this.paroles.length;
      const roundedIndex = Math.round(index);
      if (roundedIndex > this.paroles.length) {
        this.GetRandomWord();
      }
      const uneparole = this.paroles[roundedIndex];
      return uneparole;
    },
    loadWord() {
      this.tampon = this.uneparole;
      this.wordClick = true;
      this.animation = true;
      setTimeout(() => (this.animation = false), 700);
      this.uneparole = this.GetRandomWord();
      while (this.uneparole === undefined) {
        this.uneparole = this.GetRandomWord();
      }
      if (this.sameWord()) this.loadWord();
    },
    sameWord() {
      if (this.uneparole === this.tampon) return true;
    },
  },
};
</script>
