<template>
  <div class="wrapper">
    <div class="cadre">
      <HeaderCross :DisplayParole="this.DisplayParole" />
      <Arrow />
      <h2>Imprimer pour l'Eglise</h2>
      <br />
      <p>
        <br />
        <a href="https://www.uneparole.com/pains/256paroles.pdf"
          >256 paroles a imprimer pour une utilisation en Eglise</a
        >
        Ce sont les 153 premières paroles sélectionnées en aout 2022, dont 92
        psaumes, ainsi que des paroles qui ont été sélectionnées au fur et a mesure. Idéales pour l'adoration ou une soirée en communauté.
        <br />
        <br />
        Les psaumes ont été choisis par la coordinatrice de l'adoration
        perpétuelle à Bordeaux. J'ai choisi le reste des paroles. Elles sont
        faites pour être faciles a découper (toutes les pages ont le même
        format).
      </p>
      <FooterInfo />
    </div>
  </div>
</template>
<script>
import HeaderCross from "../components/HeaderCross.vue";
import Arrow from "../components/Arrow.vue";
import FooterInfo from "../components/FooterInfo.vue";

export default {
  components: { HeaderCross, Arrow, FooterInfo },
  created() {
    this.$store.state.outOfHome = true;
  },
};
</script>
