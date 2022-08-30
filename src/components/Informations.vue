<template>
  <div class="informations">
    <div class="count">
    <h2>Informations du site</h2>
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
    <div class="adoration">
    <h3>Une parole pour adorer</h3>
      <p>
        Les extraits ont été initialement sélectionnés pour l'adoration eucharistique
        : sous la houlette et avec la participation active de la coordinatrice
        de l’adoration perpétuelle au Sacré-Cœur à Bordeaux.
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
    <div class="cookie">
    <h3>N'ayez pas peur</h3>
      <p>
        Ce site ne vous suit pas, ni par des cookies, ni par de la télémétrie,
        ou de l'analyse. C'est un simple service perfectible, qui ne veut que
        votre sainteté.
        <br>
        <br>
        La distribution des paroles est libre et gratuite, la redistribution de ce site est autorisée à des fins écclésiales. Vous pouvez participer a la construction de ce site gràce à GitHub en faisant <a href="https://github.com/jmcob/uneparole.love">un "fork" du projet</a>.
      </p>
    </div>
    <div class="ajout">
    <h3>Vous avez une idée de parole ?</h3>
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
