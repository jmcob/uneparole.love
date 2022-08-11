<template>
  <div class="cadre">
    <button class="button" @click="loadWord()">
      Afficher une parole de Dieu aléatoire
    </button>
    <div class="uneparole" v-if="wordClick">
      <p>{{ this.uneparole.parole }}</p>
      <p class="ref">
        <em>{{ this.uneparole.ref }}</em>
      </p>
    </div>
    <br />

    <br />
    <br /><br />
    <button @click="toggleAbout()">A propos de ce site</button>
    <div class="about" v-if="aboutClick">
      <p>
        Bientôt 148 paroles de Dieu // <br />
        Les extraits ont été initialement choisis pour l'adoration
        eucharistique. <br />
        Pains de vie choisis sous la houlette et avec la participation active de
        la coordinatrice de l’adoration perpétuelle au Sacré-Cœur à Bordeaux.
        <br />
        Version août 2022 – 65 extraits courants de la Bible puis 83 extraits de
        psaumes, <strong>traduction liturgique</strong>. <br />
        // jeanmaxime
      </p>
    </div>
  </div>
</template>
<script>
import HeaderTitle from "./components/HeaderTitle.vue";
export default {
  name: "app",
  components: {
    HeaderTitle,
  },
  data() {
    return {
      paroles: [
        {
          parole: `Voici que vient le jour du Seigneur, brûlant comme la fournaise. Tous les arrogants, tous ceux qui commettent l’impiété, seront de la paille. Le jour qui vient les consumera, – dit le Seigneur de l’univers –, il ne leur laissera ni racine ni branche.
Mais pour vous qui craignez mon nom, le Soleil de justice se lèvera : il apportera la guérison dans son rayonnement. Vous sortirez en bondissant comme de jeunes veaux à la pâture.`,
          ref: `Livre de Malachie, chapitre 3, versets 19 & 20`,
        },

        {
          parole: ` Venez à moi, vous tous qui peinez sous le poids du fardeau, et moi, je vous procurerai le repos.
Prenez sur vous mon joug, devenez mes disciples, car je suis doux et humble de cœur, et vous trouverez le repos pour votre âme.
Oui, mon joug est facile à porter, et mon fardeau, léger.`,
          ref: `Évangile selon saint Matthieu, chapitre 11, versets 28 à 30`,
        },

        {
          parole: `Dans son enseignement, il disait : « Méfiez-vous des scribes, qui tiennent à se promener en vêtements d’apparat et qui aiment les salutations sur les places publiques,
les sièges d’honneur dans les synagogues, et les places d’honneur dans les dîners.
Ils dévorent les biens des veuves et, pour l’apparence, ils font de longues prières : ils seront d’autant plus sévèrement jugés. »`,
          ref: `Évangile selon saint Marc, chapitre 12, versets 38 à 40`,
        },

        {
          parole: `Et ceux-ci persécutaient Jésus parce qu’il avait fait cela le jour du sabbat.
Jésus leur déclara : « Mon Père est toujours à l’œuvre, et moi aussi, je suis à l’œuvre. »
C’est pourquoi, de plus en plus, les Juifs cherchaient à le tuer, car non seulement il ne respectait pas le sabbat, mais encore il disait que Dieu était son propre Père, et il se faisait ainsi l’égal de Dieu.`,
          ref: `Évangile selon saint Jean, chapitre 5, versets 16 à 18`,
        },

        {
          parole: `Jésus leur répondit : « Amen, amen, je vous le dis : vous me cherchez, non parce que vous avez vu des signes, mais parce que vous avez mangé de ces pains et que vous avez été rassasiés.
Travaillez non pas pour la nourriture qui se perd, mais pour la nourriture qui demeure jusque dans la vie éternelle, celle que vous donnera le Fils de l’homme, lui que Dieu, le Père, a marqué de son sceau. »`,
          ref: `Évangile selon saint Jean, chapitre 6, versets 26 & 27`,
        },

        {
          parole: `De nouveau, Jésus leur parla : « Moi, je suis la lumière du monde. Celui qui me suit ne marchera pas dans les ténèbres, il aura la lumière de la vie. »`,
          ref: `Évangile selon saint Jean, chapitre 8, verset 12`,
        },

        {
          parole: `Marie, sœur de Lazare, arriva à l’endroit où se trouvait Jésus. Dès qu’elle le vit, elle se jeta à ses pieds et lui dit : « Seigneur, si tu avais été ici, mon frère ne serait pas mort. »
Quand il vit qu’elle pleurait, et que les Juifs venus avec elle pleuraient aussi, Jésus, en son esprit, fut saisi d’émotion, il fut bouleversé,
et il demanda : « Où l’avez-vous déposé ? » Ils lui répondirent : « Seigneur, viens, et vois. »
Alors Jésus se mit à pleurer.`,
          ref: `Évangile selon saint Jean, chapitre 11, versets 32 à 35.`,
        },

        {
          parole: `Ainsi s’accomplit pour eux la prophétie d’Isaïe : Vous aurez beau écouter, vous ne comprendrez pas. Vous aurez beau regarder, vous ne verrez pas.
Le cœur de ce peuple s’est alourdi : ils sont devenus durs d’oreille, ils se sont bouché les yeux, de peur que leurs yeux ne voient, que leurs oreilles n’entendent, que leur cœur ne comprenne, qu’ils ne se convertissent, – et moi, je les guérirai.`,
          ref: `
Évangile selon saint Matthieu, chapitre 13, versets 14 & 15`,
        },
        {
          parole: `Aussi j’ai prié, et le discernement m’a été donné. J’ai supplié, et l’esprit de la Sagesse est venu en moi.`,
          ref: `Livre de la Sagesse, chapitre 7, verset 7`,
        },
        {
          parole: `Un scribe qui avait entendu la discussion, et remarqué que Jésus avait bien répondu, s’avança pour lui demander : « Quel est le premier de tous les commandements ? »
Jésus lui fit cette réponse : « Voici le premier : Écoute, Israël : le Seigneur notre Dieu est l’unique Seigneur.
Tu aimeras le Seigneur ton Dieu de tout ton cœur, de toute ton âme, de tout ton esprit et de toute ta force.
Et voici le second : Tu aimeras ton prochain comme toi-même. Il n’y a pas de commandement plus grand que ceux-là. »`,
          ref: `Évangile selon saint Marc, chapitre 12, versets 28 à 31`,
        },
        {
          parole: `Dans son cœur, l’homme propose ; par sa parole, Dieu dispose.
L’homme, en son cœur, fait des projets de route, et le Seigneur dirige ses pas.`,
          ref: `Livre des Proverbes, chapitre 16, versets 1 & 9`,
        },
        {
          parole: `Je bénirai le Seigneur en tout temps, sa louange sans cesse à mes lèvres.
Je me glorifierai dans le Seigneur : que les pauvres m'entendent et soient en fête !`,
          ref: `Psaume 33, versets 2 & 3`,
        },
        {
          parole: `C'est toi qui as créé mes reins, qui m'as tissé dans le sein de ma mère.
Je reconnais devant toi le prodige, l'être étonnant que je suis : * étonnantes sont tes œuvres toute mon âme le sait.`,
          ref: `Psaume 138, versets 13 et 14`,
        },
        {
          parole: `Heureux est l'homme qui n'entre pas au conseil des méchants, + qui ne suit pas le chemin des pécheurs, * ne siège pas avec ceux qui ricanent,
mais se plaît dans la loi du Seigneur et murmure sa loi jour et nuit !
Il est comme un arbre planté près d'un ruisseau, + qui donne du fruit en son temps, * et jamais son feuillage ne meurt ; tout ce qu'il entreprend réussira,`,
          ref: `Psaume 1, versets 1 à 3`,
        },
        {
          parole: `Pitié pour moi, mon Dieu, dans ton amour, selon ta grande miséricorde, efface mon péché. Lave-moi tout entier de ma faute, purifie-moi de mon offense.
Oui, je connais mon péché, ma faute est toujours devant moi.`,
          ref: `Psaume 50, versets 3 à 5`,
        },
        {
          parole: `En toi, Seigneur, j'ai mon refuge : garde-moi d'être humilié pour toujours.
Dans ta justice, défends-moi, libère-moi, tends l'oreille vers moi, et sauve-moi.
Sois le rocher qui m'accueille, toujours accessible ; * tu as résolu de me sauver : ma forteresse et mon roc, c'est toi !`,
          ref: `Psaume 70, 3 premiers versets`,
        },
        {
          parole: `Crée en moi un cœur pur, ô mon Dieu, renouvelle et raffermis au fond de moi mon esprit.
Ne me chasse pas loin de ta face, ne me reprends pas ton esprit saint.
Rends-moi la joie d'être sauvé ; que l'esprit généreux me soutienne.
Aux pécheurs, j'enseignerai tes chemins ; vers toi, reviendront les égarés.`,
          ref: `Psaume 50, versets 12 à 15`,
        },
        {
          parole: `Mon âme est collée à la poussière ; fais-moi vivre selon ta parole.
J'énumère mes voies : tu me réponds ; apprends-moi tes commandements.
Montre-moi la voie de tes préceptes, que je médite sur tes merveilles.
La tristesse m'arrache des larmes : relève-moi selon ta parole.`,
          ref: `Psaume 118, versets 25 à 28`,
        },
        {
          parole: `On rappellera tes immenses bontés ; tous acclameront ta justice.
Le Seigneur est tendresse et pitié, lent à la colère et plein d'amour ;
la bonté du Seigneur est pour tous, sa tendresse, pour toutes ses œuvres.`,
          ref: `Psaume 144, versets 7 à 9`,
        },
        {
          parole: `La grâce du Seigneur Jésus Christ soit avec votre esprit. Amen.`,
          ref: `Lettre aux Philippiens, chapitre 4, verset 23`,
        },
        {
          parole: `Je t'exalterai, mon Dieu, mon Roi, je bénirai ton nom toujours et à jamais !
Chaque jour je te bénirai, je louerai ton nom toujours et à jamais.
Il est grand, le Seigneur, hautement loué ; à sa grandeur, il n'est pas de limite.`,
          ref: `Psaume 144, 3 premiers versets`,
        },
      ],
      uneparole: {},
      aboutClick: false,
      wordClick: false,
    };
  },
  methods: {
    GetRandomWordOfGod() {
      const index = Math.random() * this.paroles.length;
      const roundedIndex = Math.round(index);
      if (roundedIndex === this.paroles.length) {
            GetRandomWordOfGod()
      }
      const result = this.paroles[roundedIndex];
      return result;
    },
    loadWord() {
      this.wordClick = true;
      let stopBis = {};
      if (this.uneparole !== {}) {
        stopBis = this.uneparole;
      }

      this.uneparole = this.GetRandomWordOfGod();
      if (this.uneparole === stopBis) this.loadWord();
    },
    toggleAbout() {
      this.aboutClick = !this.aboutClick;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Tiro+Gurmukhi&display=swap");

* {
  font-family: "Tiro Gurmukhi", serif;
}

.cadre {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 50px;
}

p {
  font-size: large;
}

.ref {
  color: midnightblue;
}

.button {
  width: 250px;
  margin: 10px;
  padding: 10px;
  font-size: larger;
  background-color: lightskyblue;
  border-radius: 5px;
  cursor: pointer;
}
</style>
