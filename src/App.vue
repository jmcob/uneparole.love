<template>
  <div class="wrapper">
    <div class="cadre">
      <HeaderTitle :loadWord="this.loadWord" />
      <div id="uneparole" v-if="wordClick">
        <p>{{ uneparole.parole }}</p>
        <p class="ref">
          <em>{{ uneparole.ref }}</em>
        </p>
      </div>
      <br /><br />
      <AboutVue />
    </div>
  </div>
</template>
<script>
import HeaderTitle from "./components/HeaderTitle.vue";
import AboutVue from "./components/AboutVue.vue";
import paroles from "./json/paroles.json";

export default {
  name: "app",
  components: { HeaderTitle, AboutVue },
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
    };
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
