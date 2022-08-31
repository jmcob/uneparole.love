<template>
  <div class="informations">
    <div class="count">
    <h2>Informations du site</h2>
        <div class="adoration">
    <h3>Une parole pour adorer</h3>
      <p>
        Les extraits ont été initialement sélectionnés pour l'adoration eucharistique
        : sous la houlette et avec la participation active de la coordinatrice
        de l’adoration perpétuelle au Sacré-Cœur à Bordeaux.
      </p>
    </div>
      <p>
        Il y a actuellement
        <strong>{{ wordcount }} paroles</strong> différentes :
        <br>
        <ul>
            <li>{{ ps.length }} issues de psaumes,</li>
            <li> {{ gosp.length }} trouvées dans l'évangile,</li>
            <li>{{ at.length }} tirées de l'ancien testament, hormis les psaumes,</li>
            <li>et {{ nt.length }} choisies dans le
        reste du nouveau testament, en dehors des évangiles.</li>
        </ul>
        </p>
    </div>

    <div class="148">
    <h3>Version et impression</h3>
      <p>
        Version 1.2 : août 2022 –
        <strong>traduction liturgique <a href="aelf.org">AELF</a></strong
        >.
      </p>
      <p>
        <a href="https://www.uneparole.love/pains/153xuneparole.pdf"
          >153 paroles en PDF</a
        >
        pour une utilisation en église.
      </p>
    </div>

  </div>
</template>

<script>
export default {
  created() {
    this.$store.state.outOfHome = true;
  },
  computed: {
    // arrow functions can make the code very succinct!
    wordcount() {
      return this.$store.state.wordcount;
    },
    // length of ps, gosp, nt and at are in informations; they could be filters too.
    ps() {
      return this.$store.state.ps;
    },
    gosp() {
      return this.$store.state.gosp;
    },
    at() {
      return this.$store.state.at;
    },
    nt() {
      return this.$store.state.nt;
    },
  },
};
</script>
<style scoped>
div {
  margin: 20px 0px;
}
</style>
