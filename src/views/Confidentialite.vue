<template>
  <div class="wrapper">
    <HeaderCross :DisplayParole="this.DisplayParole" />
    <Arrow />
    <div class="cadre">
      <div class="cookie">
        <h2>N'ayez pas peur</h2>
        <p>
          <br />
          <h3>1. Les hébergeurs nous connaissent</h3>
          Ce site en sa base de données est hébergé par Vercel ; le serveur de
          cette page est sur le même hébergeur gratuit : Vercel. Cet hébergeur
          surveillent nos pas par l'adresse IP.
          <br />
          <br>
          <h3>2. Pas de suivi ici</h3>
          Je n'ai installé aucune télémétrie sur le site pour la consultation de
          la Parole de Dieu, ni aucun cookie, Google Analytics n'est pas installé. 
          <br /><br />
          Je sais juste, parce que le site est sur la recherche de Google, quels
          termes mènent ici et en quelle quantité, et encore pour le moment ce sont des chiffres très petits.
                    <br />
          <br>
          <h3>3. Un humble service</h3>
          C'est un simple service perfectible, qui ne veut que votre sainteté.
          <br />
          <br>
          <h3>4. Redistribution</h3>
          La distribution des paroles est libre et gratuite, après tout c'est la
          parole de Dieu version AELF, la redistribution de ce site est
          autorisée à des fins écclésiales. Vous pouvez participer a la
          construction de ce site gràce à GitHub en faisant
          <a href="https://github.com/jmcob/uneparole.love"
            >un "fork" du projet</a
          >. <br /><br />
          Jean-Maxime Cobac
        </p>
      </div>
    </div>
    <FooterInfo />
  </div>
</template>
<script>
import HeaderCross from "../components/HeaderCross.vue";
import FooterInfo from "../components/FooterInfo.vue";
import Arrow from "../components/Arrow.vue";

export default {
  components: {
    HeaderCross,
    FooterInfo,
    Arrow,
  },
};
</script>
