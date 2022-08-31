<template>
  <UneParole :uneref="this.uneref" :uneparole="this.uneparole" />
  <BlueButton :animation="this.animation" :DisplayParole="this.DisplayParole" />
  <div
    v-show="this.$store.state.wordClick"
    @click="
      this.$store.state.wordClick
        ? (this.$store.state.wordClick = !this.$store.state.wordClick)
        : DisplayParole()
    "
  >
    <br />
    <v-btn icon="mdi-reload" prepend></v-btn>
  </div>
  <div class="about info center" id="infos">
    <br />
    <div id="infoContainer">{{ this.date }}, {{ this.desInfos.fete }}</div>
  </div>
</template>

<script>
import ContactForm from "./ContactForm.vue";
import OfTheMonth from "./OfTheMonth.vue";
import Informations from "./Informations.vue";
import EvangileDuJour from "./EvangileDuJour.vue";
import BlueButton from "./BlueButton.vue";
import UneParole from "./UneParole.vue";
import "dayjs/locale/fr";
import dayjs from "dayjs";
import axios from "axios";

export default {
  components: {
    ContactForm,
    OfTheMonth,
    Informations,
    EvangileDuJour,
    BlueButton,
    EvangileDuJour,
    UneParole,
  },
  props: {
    animation: Boolean,
    DisplayParole: Function,
    wordClick: Boolean,
    uneparole: "",
    uneref: "",
  },
  data() {
    return {
      today: dayjs().format("YYYY-MM-DD"),
      date: dayjs().locale("fr").format("DD MMMM"),
      api: "",
      desInfos: [],
      color: "",
      tab: null,
    };
  },
  methods: {
    async getInfos() {
      this.api =
        "https://api.aelf.org/v1/informations/" + this.today + "/france";
      await axios.get(this.api).then((res) => {
        this.desInfos = res.data.informations;
      });
    },
  },
  created() {
    this.getInfos();
  },
};
</script>
