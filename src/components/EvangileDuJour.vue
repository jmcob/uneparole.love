<template>
  <div id="evangileDuJour">
    <p><span v-html="this.uneparole.contenu"></span></p>
    <p>{{ this.uneparole.ref }}</p>
  </div>
  <p class="center">Source AELF</p>
</template>

<script>
import dayjs from "dayjs";

export default {
  data() {
    return {
      uneparole: [],
      today: dayjs().format("YYYY-MM-DD"),
      api: "",
    };
  },
  methods: {
    getGospel() {
      this.api = "https://api.aelf.org/v1/messes/" + this.today + "/france";
      const res = this.axios.get(this.api).then((res) => {
        console.log(res.data.messes[0].lectures);
        this.uneparole = res.data.messes[0].lectures;
        this.uneparole.forEach((lecture) => {
          if ((lecture.type = "evangile")) {
            this.uneparole = lecture;
          }
        });
      });
    },
  },
  mounted() {
    this.getGospel();
  },
};
</script>
