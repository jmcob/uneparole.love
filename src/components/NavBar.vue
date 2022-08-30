<template>
  <div class="about info center" id="infos">
    <div id="infoContainer">{{ this.date }}, {{ this.desInfos.fete }}</div>
    <br />
  </div>
  <v-tabs
    v-model="tab"
    background-color="white-accent-4"
    centered
    stacked
    slider-color="midnightblue"
  >
    <v-tab class="text-body-1" value="tab-2">
      <v-icon>mdi-calendar-range</v-icon>
      Evangile du jour
    </v-tab>

    <v-tab class="text-body-1" value="tab-1">
      <v-icon>mdi-book-cross</v-icon>
      Une Parole
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
    <v-window-item value="tab-1">
      <v-card class="center">
        <br />
        <UneParole :uneref="this.uneref" :uneparole="this.uneparole" />
        <br />
        <BlueButton
          :animation="this.animation"
          :DisplayParole="this.DisplayParole"
        />
      </v-card>
    </v-window-item>
  </v-window>
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
