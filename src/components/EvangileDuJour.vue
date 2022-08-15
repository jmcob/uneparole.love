<template>
  <div id="evangileDuJour">
    <p class="about info">
      <span
        class="colorCircle"
        :style="{ backgroundColor: `${this.color}`, color: `${this.color}` }"
        >:-D</span
      >
      {{ this.todayTemplate }} <br />
      {{ this.desInfos.jour_liturgique_nom }}
    </p>
    <p><span v-html="this.uneparole.contenu"></span></p>
    <p>{{ this.uneparole.ref }}</p>
  </div>
  <p class="center">Source AELF</p>
</template>

<script>
import dayjs from "dayjs";
import "dayjs/locale/fr";
import axios from "axios";

export default {
  data() {
    return {
      uneparole: [],
      desInfos: {},
      todayAPI: dayjs().format("YYYY-MM-DD"),
      todayTemplate: dayjs().locale("fr").format("dddd DD MMMM YYYY"),
      api: "",
      color: "",
    };
  },
  methods: {
    async getGospel() {
      this.api = "https://api.aelf.org/v1/messes/" + this.todayAPI + "/france";
      const res = await axios.get(this.api).then((res) => {
        this.uneparole = res.data.messes[0].lectures;
        this.uneparole.forEach((lecture) => {
          if ((lecture.type = "evangile")) {
            this.uneparole = lecture;
          }
        });
      });
      this.timesColor();
    },
    async getInfos() {
      this.api =
        "https://api.aelf.org/v1/informations/" + this.todayAPI + "/france";
      await axios.get(this.api).then((res) => {
        this.desInfos = res.data.informations;
      });
    },
    timesColor() {
      if (this.desInfos.couleur === "vert") this.color = "green";
      if (this.desInfos.couleur === "violet") this.color = "purple";
      if (this.desInfos.couleur === "rouge") this.color = "red";
      if (this.desInfos.couleur === "blanc") this.color = "white";
    },
  },
  mounted() {
    this.getGospel();
    this.getInfos();
  },
};
</script>
