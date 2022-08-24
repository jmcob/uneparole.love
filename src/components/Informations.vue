<template>
  <div class="informations">
    <div class="count">
      <p>
        Il y a actuellement
        <strong>{{ wordcount }} paroles</strong> différentes,
        {{ ps.length }} issues de psaumes, {{ gosp.length }} d'évangiles,
        {{ at.length }} du reste de l'ancien testament, et {{ nt.length }} du
        reste du nouveau.
      </p>
    </div>
    <div class="adoration">
      <p>
        Les extraits ont été initialement choisis pour l'adoration eucharistique
        : sous la houlette et avec la participation active de la coordinatrice
        de l’adoration perpétuelle au Sacré-Cœur à Bordeaux.
      </p>
    </div>
    <div class="148">
      <p>
        Version 1.1, août 2022 –
        <strong>traduction liturgique <a href="aelf.org">AELF</a></strong
        >.
      </p>
      <p>
        <a href="https://www.uneparole.love/pains/153xuneparole.pdf"
          >153 paroles en PDF</a
        >
        pour une utilisation en église. Fonctionne mieux avec Firefox.
      </p>
    </div>
    <div class="cookie">
      <p>
        Ce site ne vous suit pas, ni par des cookies, ni par de la télémétrie,
        ou de l'analyse. C'est un simple service perfectible, qui ne veut que
        votre sainteté.
      </p>
    </div>
    <div class="ajout">
      <p>
        Voici le lien pour
        <router-link class="about" to="/contact"
          >soumettre une nouvelle parole</router-link
        >
        de la Bible sur le site.
      </p>
    </div>
  </div>
</template>

<script>
export default {
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
