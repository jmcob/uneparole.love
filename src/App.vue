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
      <br />
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

<style>
@import url("https://fonts.googleapis.com/css2?family=Arima&family=Karla:ital,wght@0,400;0,700;1,400&family=Tiro+Gurmukhi:ital@0;1&display=swap");

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cadre {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  width: 80vw;
  max-width: 350px;
}

#about {
  font-family: "Karla", sans-serif;
  font-size: large;
  text-indent: 2em;
  text-align: justify;
}
#uneparole {
  text-indent: 2em;
  font-family: "Tiro Gurmukhi", serif;
  font-size: x-large;
  white-space: pre-wrap;
  text-align: justify;
}

.ref {
  color: midnightblue;
}
.about,
.center {
  cursor: pointer;
  text-decoration: underline;
  text-align: center;
  font-family: "Karla", sans-serif;
  text-indent: 0;
}
h1 {
  font-size: large;
}

.button {
  width: 150px;
  height: 150px;
  margin: 10px;
  padding: 10px;
  font-size: large;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    125deg,
    rgba(2, 0, 36, 1) 1%,
    rgba(9, 9, 121, 1) 10%,
    rgba(0, 212, 255, 1) 100%
  );
  color: white;
  border-radius: 5px;
  cursor: pointer;
  border-radius: 50%;
  font-family: "Karla", sans-serif;
}
.button:hover,
.button:active {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    125deg,
    rgba(2, 0, 36, 1) 17%,
    rgba(9, 9, 121, 1) 55%,
    rgba(0, 212, 255, 1) 100%
  );
}
</style>
