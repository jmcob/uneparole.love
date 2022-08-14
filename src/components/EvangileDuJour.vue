<template>
  <div id="evangileDuJour">
    <p><span v-html="this.uneparole.contenu"></span></p>
    <p>{{ this.uneparole.ref }}</p>
  </div>
  <p class="center">Source AELF</p>
</template>

<script>
export default {
  data() {
    return {
      api: "https://api.aelf.org/v1/messes/2022-08-14/france",
      uneparole: {},
    };
  },
  methods: {
    getGospel() {
      const res = this.axios.get(this.api).then((res) => {
        console.log(res.data.messes[0].lectures);
        this.uneparole = res.data.messes[0].lectures;
        this.uneparole.forEach((lecture, index) => {
          if ((lecture.type = "evangile")) {
            this.uneparole = lecture;
          }
        });
      });
    },
  },
  created() {
    this.getGospel();
  },
};
</script>
