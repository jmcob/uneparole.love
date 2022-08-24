<template>
  <div class="paperWrap">
    <div class="papier" v-for="papier in papiers">
      {{ papier.parole }}
      <br />
      <em>{{ papier.ref }}</em>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paroles: [],
      refs: [],
      papiers: [],
    };
  },
  methods: {
    forEachParoles() {
      this.$store.state.querySnapshot.forEach((doc, index) => {
        this.paroles.push(doc.data().parole);
        this.refs.push(doc.data().ref);
      });
      this.paroles.forEach((parole, index) => {
        parole = parole.replaceAll(/\\n/g, " ");
        this.papiers.push({ parole: parole, ref: this.refs[index] });
      });
    },
  },
  created() {
    this.forEachParoles();
  },
};
</script>
<style scoped>
.papier {
  font-family: "Times New Roman", Times, serif;
  font-size: 13pt;
  width: 10cm;
  height: 9.41cm;
  padding: 1mm;
  border: 1px dashed black;
  overflow: hidden;
  line-height: 1.2em;
  padding: 3mm;
}
.paperWrap {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5mm;
}
body {
  width: 210mm;
  height: 297mm;
}
</style>
