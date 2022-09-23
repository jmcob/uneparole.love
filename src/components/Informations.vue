<template>
  <div class="informations">
    <div class="count">
    <h2>Informations du site</h2>
    <br>
    <h3>L'idée initiale</h3>
    <p>Tirer une parole à l'Eglise, c'est bien. Mais si elle est trop courte, si on ne la ressitue pas dans son contexte, cela peut porter a confusion. <br><br> Nous avons donc choisi des textes un peu plus long dans l'ensemble, <strong>entre 1 et 5 versets tirés a quatre épingles qui ne disent "que ce qu'ils veulent dire"</strong>. <br><br> Ce n'est pas Jésus qui vous parle directement, c'est un tout petit algorithme qui met les paroles au hasard. Dieu est partout, même dans le hasard, certes, mais aussi dans nos intelligences devant sa parole !</p>
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
        Version 1.3 : septembre 2022 –
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
