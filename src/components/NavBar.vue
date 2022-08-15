<template>
  <div class="about info center" id="infos">
    <div id="infoContainer">
      {{ this.date }}, {{ this.desInfos.jour_liturgique_nom }}
    </div>
    <br />
  </div>
  <v-tabs
    v-model="tab"
    background-color="white-accent-4"
    centered
    stacked
    slider-color="midnightblue"
  >
    <v-tab value="tab-2">
      <v-icon>mdi-calendar-range</v-icon>
      Evangile
    </v-tab>

    <v-tab value="tab-3">
      <v-icon>mdi-information-outline</v-icon>
      Info
    </v-tab>
    <v-tab value="tab-1">
      <v-icon>mdi-book-cross</v-icon>
      1Parole
    </v-tab>
  </v-tabs>

  <v-window v-model="tab">
    <v-window-item value="tab-2">
      <v-card>
        <br />
        <EvangileDuJour />
      </v-card>
    </v-window-item>
  </v-window>
  <v-window v-model="tab">
    <v-window-item value="tab-3">
      <v-card class="about info"
        ><br />
        <Informations
      /></v-card>
    </v-window-item>
  </v-window>
  <v-window v-model="tab">
    <v-window-item value="tab-1">
      <v-card class="center">
        <br />
        <BlueButton :animation="this.animation" :loadWord="this.loadWord" />
        <br />
        <UneParole :wordClick="this.wordClick" :uneparole="this.uneparole" />
      </v-card>
    </v-window-item>
  </v-window>
</template>

<script>
import paroles from "../json/paroles.json";
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
    loadWord: Function,
    wordClick: Boolean,
    uneparole: {},
  },
  data() {
    return {
      today: dayjs().format("YYYY-MM-DD"),
      date: dayjs().locale("fr").format("DD MMMM"),
      api: "",
      desInfos: [],
      paroles: paroles,
      paroleDuMois: false,
      color: "",
      tab: null,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
