<template>
  <div class="wrapper">
    <div class="cadre">
      <HeaderTitle />
      <div class="button-container">
        <button class="button" @click="loadWord()">
          Afficher une parole de Dieu aléatoire
        </button>
      </div>
      <div id="uneparole" v-if="wordClick">
        <p>{{ uneparole.parole }}</p>
        <p class="ref">
          <em>{{ uneparole.ref }}</em>
        </p>
      </div>
      <br />

      <br />
      <br /><br />
      <div class="aboutText" v-if="aboutClick">
        <p class="about" @click="toggleAbout()">Fermer</p>
        <p>
          Bientôt 148 paroles de Dieu. <br /><br />
          Les extraits ont été initialement choisis pour l'adoration
          eucharistique : sous la houlette et avec la participation active de la
          coordinatrice de l’adoration perpétuelle au Sacré-Cœur à Bordeaux.
          <br />
          Version 1, août 2022 – 65 extraits courants de la Bible puis 83
          extraits de psaumes,
          <strong>traduction liturgique <a href="aelf.org">AELF</a></strong
          >. <br />
          <a href="http://www.uneparole.love/pains/pains-de-vie.pdf"
            >Télécharger le PDF complet des paroles de Dieu sélectionnées</a
          >
          <br />
          Ici vous êtes libres : pas de télémétrie, pas de cookie, pas de pub,
          pas de suivi inter-site, pas de copyright, juste un service, que du
          bonheur !
          <br /><a href="http://jmxi.art">jeanmaxime</a>
        </p>
      </div>
      <div v-else><p class="about" @click="toggleAbout()">A propos</p></div>
    </div>
  </div>
</template>
<script>
import HeaderTitle from "./components/HeaderTitle.vue";
export default {
  name: "app",
  components: { HeaderTitle },
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
        {
          parole: ` C’est pourquoi je tombe à genoux devant le Père,
de qui toute paternité au ciel et sur la terre tient son nom.
Lui qui est si riche en gloire, qu’il vous donne la puissance de son Esprit, pour que se fortifie en vous l’homme intérieur.`,
          ref: `Lettres aux Éphésiens, chapitre 3, versets 14 à 16`,
        },
        {
          parole: `Soyez toujours dans la joie du Seigneur ; je le redis : soyez dans la joie.
Que votre bienveillance soit connue de tous les hommes. Le Seigneur est proche.
Ne soyez inquiets de rien, mais, en toute circonstance, priez et suppliez, tout en rendant grâce, pour faire connaître à Dieu vos demandes.`,
          ref: `Lettre aux Philippiens, chapitre 4, versets 4 à 6`,
        },
        {
          parole: `Efforcez-vous d’atteindre la charité. Recherchez avec ardeur les dons spirituels, surtout celui de prophétie.`,
          ref: `Première lettre aux Corinthiens, chapitre 14, premier verset`,
        },
        {
          parole: `Que le Christ habite en vos cœurs par la foi ; restez enracinés dans l'amour, établis dans l'amour.
Ainsi vous serez capables de comprendre avec tous les fidèles quelle est la largeur, la longueur, la hauteur, la profondeur…
Vous connaîtrez ce qui dépasse toute connaissance : l’amour du Christ. Alors vous serez comblés jusqu’à entrer dans toute la plénitude de Dieu.`,
          ref: `Lettres aux Éphésiens, chapitre 3, versets 17 à 19`,
        },
        {
          parole: `Ayez en vous les dispositions qui sont dans le Christ Jésus : Le Christ Jésus,
ayant la condition de Dieu, ne retint pas jalousement le rang qui l’égalait à Dieu.
Mais il s’est anéanti, prenant la condition de serviteur, devenant semblable aux hommes. Reconnu homme à son aspect,
il s’est abaissé, devenant obéissant jusqu’à la mort, et la mort de la croix.
C’est pourquoi Dieu l’a exalté : il l’a doté du Nom qui est au-dessus de tout nom,
afin qu’au nom de Jésus tout genou fléchisse au ciel, sur terre et aux enfers,
et que toute langue proclame : « Jésus Christ est Seigneur » à la gloire de Dieu le Père.`,
          ref: `Lettre aux Philippiens, chapitre 2, versets 5 à 11`,
        },
        {
          parole: `Alors, vous, puisque vous êtes avides d’inspirations, cherchez à progresser, mais en vue de construire l’Église.`,
          ref: `Première lettre aux Corinthiens, chapitre 14, verset 12`,
        },
        {
          parole: `Béni soit Dieu, le Père de notre Seigneur Jésus Christ ! Il nous a bénis et comblés des bénédictions de l’Esprit, au ciel, dans le Christ.
Il nous a choisis, dans le Christ, avant la fondation du monde, pour que nous soyons saints, immaculés devant lui, dans l’amour.
Il nous a prédestinés à être, pour lui, des fils adoptifs par Jésus, le Christ. Ainsi l’a voulu sa bonté,
à la louange de gloire de sa grâce, la grâce qu’il nous donne dans le Fils bien-aimé.`,
          ref: `Lettre aux Ephésiens, chapitre 1, versets 3 à 6`,
        },
        {
          parole: `Prenant la parole, Jésus lui dit : « Que veux-tu que je fasse pour toi ? » L’aveugle lui dit : « Rabbouni, que je retrouve la vue ! »
Et Jésus lui dit : « Va, ta foi t’a sauvé. » Aussitôt l’homme retrouva la vue, et il suivait Jésus sur le chemin.`,
          ref: `Évangile selon saint Marc, chapitre 10, versets 51 et 52`,
        },
        {
          parole: `Ensuite, il arriva que Jésus, passant à travers villes et villages, proclamait et annonçait la Bonne Nouvelle du règne de Dieu. Les Douze l’accompagnaient,
ainsi que des femmes qui avaient été guéries de maladies et d’esprits mauvais : Marie, appelée Madeleine, de laquelle étaient sortis sept démons,
Jeanne, femme de Kouza, intendant d’Hérode, Suzanne, et beaucoup d’autres, qui les servaient en prenant sur leurs ressources.`,
          ref: `Évangile selon saint Luc, chapitre 8, 3 premiers versets`,
        },
        {
          parole: `Personne, après avoir allumé une lampe, ne la couvre d’un vase ou ne la met sous le lit ; on la met sur le lampadaire pour que ceux qui entrent voient la lumière.
Car rien n’est caché qui ne doive paraître au grand jour ; rien n’est secret qui ne doive être connu et venir au grand jour.
Faites attention à la manière dont vous écoutez. Car à celui qui a, on donnera ; et à celui qui n’a pas, même ce qu’il croit avoir sera enlevé. »`,
          ref: `Évangile selon saint Luc, chapitre 8, versets 16 à 18`,
        },
        {
          parole: `Le jeûne qui me plaît, n’est-ce pas ceci : faire tomber les chaînes injustes, délier les attaches du joug, rendre la liberté aux opprimés, briser tous les jougs ?
N’est-ce pas partager ton pain avec celui qui a faim, accueillir chez toi les pauvres sans abri, couvrir celui que tu verras sans vêtement, ne pas te dérober à ton semblable ?
Alors ta lumière jaillira comme l’aurore, et tes forces reviendront vite. Devant toi marchera ta justice, et la gloire du Seigneur fermera la marche.
Alors, si tu appelles, le Seigneur répondra ; si tu cries, il dira : « Me voici. » Si tu fais disparaître de chez toi le joug, le geste accusateur, la parole malfaisante,
si tu donnes à celui qui a faim ce que toi, tu désires, et si tu combles les désirs du malheureux, ta lumière se lèvera dans les ténèbres et ton obscurité sera lumière de midi.`,
          ref: `Livre d’Isaïe, chapitre 58, versets 6 à 10`,
        },
        {
          parole: `(Salomon répondit au Seigneur après que celui-ci lui ait dit en songe « Demande ce que je dois te donner. ») :
Donne à ton serviteur un cœur attentif pour qu’il sache gouverner ton peuple et discerner le bien et le mal ; sans cela, comment gouverner ton peuple, qui est si important ? »
Cette demande de Salomon plut au Seigneur, qui lui dit :
« Puisque c’est cela que tu as demandé, et non pas de longs jours, ni la richesse, ni la mort de tes ennemis, mais puisque tu as demandé le discernement, l’art d’être attentif et de gouverner,
je fais ce que tu as demandé : je te donne un cœur intelligent et sage, tel que personne n’en a eu avant toi et que personne n’en aura après toi.`,
          ref: `Premier livre des Rois, chapitre 3, versets 9 à 12`,
        },
        {
          parole: `Les disciples lui demandaient ce que signifiait cette parabole.
Il leur déclara : « À vous il est donné de connaître les mystères du royaume de Dieu, mais les autres n’ont que les paraboles. Ainsi, comme il est écrit : Ils regardent sans regarder, ils entendent sans comprendre.`,
          ref: `Évangile selon saint Luc, chapitre 8, versets 9 & 10`,
        },
        {
          parole: `La mère et les frères de Jésus vinrent le trouver, mais ils ne pouvaient pas arriver jusqu’à lui à cause de la foule.
On le lui fit savoir : « Ta mère et tes frères sont là dehors, qui veulent te voir. »
Il leur répondit : « Ma mère et mes frères sont ceux qui écoutent la parole de Dieu et la mettent en pratique. »`,
          ref: `Évangile selon saint Luc, chapitre 8, versets 19 à 21`,
        },
        {
          parole: `Les Apôtres dirent au Seigneur : « Augmente en nous la foi ! »
Le Seigneur répondit : « Si vous aviez de la foi, gros comme une graine de moutarde, vous auriez dit à l’arbre que voici : “Déracine-toi et va te planter dans la mer”, et il vous aurait obéi.`,
          ref: `Évangile selon saint Luc, chapitre 17, versets 5 & 6`,
        },
        {
          parole: `Simon-Pierre lui répondit : « Seigneur, à qui irions-nous ? Tu as les paroles de la vie éternelle.
Quant à nous, nous croyons, et nous savons que tu es le Saint de Dieu. »`,
          ref: `Évangile selon saint Jean, chapitre 6, versets 68 & 69`,
        },
        {
          parole: `Moi, je vous dis : Demandez, on vous donnera ; cherchez, vous trouverez ; frappez, on vous ouvrira.
En effet, quiconque demande reçoit ; qui cherche trouve ; à qui frappe, on ouvrira.
Quel père parmi vous, quand son fils lui demande un poisson, lui donnera un serpent au lieu du poisson ?
ou lui donnera un scorpion quand il demande un œuf ?
Si donc vous, qui êtes mauvais, vous savez donner de bonnes choses à vos enfants, combien plus le Père du ciel donnera-t-il l’Esprit Saint à ceux qui le lui demandent ! »`,
          ref: `Évangile selon saint Luc, chapitre 11, versets 9 à 13`,
        },
        {
          parole: `Jésus déclara : « Il faut que le Fils de l’homme souffre beaucoup, qu’il soit rejeté par les anciens, les grands prêtres et les scribes, qu’il soit tué, et que, le troisième jour, il ressuscite. »
Il leur disait à tous : « Celui qui veut marcher à ma suite, qu’il renonce à lui-même, qu’il prenne sa croix chaque jour et qu’il me suive.
Car celui qui veut sauver sa vie la perdra ; mais celui qui perdra sa vie à cause de moi la sauvera.
Quel avantage un homme aura-t-il à gagner le monde entier, s’il se perd ou se ruine lui-même ?
Celui qui a honte de moi et de mes paroles, le Fils de l’homme aura honte de lui, quand il viendra dans la gloire, la sienne, celle du Père et des saints anges.`,
          ref: `Évangile selon saint Luc, chapitre 9, versets 22 à 26`,
        },
      ],
      uneparole: {
        parole: "",
        ref: "",
      },
      tampon: {
        parole: "",
        ref: "",
      },
      aboutClick: false,
      wordClick: false,
    };
  },
  methods: {
    GetRandomWord() {
      const index = Math.random() * this.paroles.length;
      const roundedIndex = Math.round(index);
      if (roundedIndex > this.paroles.length) {
        this.GetRandomWord();
      }
      const uneparole = this.paroles[roundedIndex];
      return uneparole;
    },
    loadWord() {
      this.i++;
      this.tampon = this.uneparole;
      this.wordClick = true;
      this.uneparole = this.GetRandomWord();
      while (this.uneparole === undefined) {
        this.uneparole = this.GetRandomWord();
      }
      if (this.sameWord()) this.loadWord();
    },
    sameWord() {
      if (this.uneparole === this.tampon) return true;
    },
    toggleAbout() {
      this.aboutClick = !this.aboutClick;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,400;1,400&display=swap");

* {
  font-family: "Josefin Sans", sans-serif;
}
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cadre {
  display: flex;
  flex-direction: column;
  text-align: justify;
  align-items: center;
  padding: 50px;
  width: 80vw;
  max-width: 350px;
}
#uneparole {
  text-indent: 2em;
}
p {
  font-size: x-large;
}

.ref {
  color: midnightblue;
}
.about {
  cursor: pointer;
  text-decoration: underline;
}
.button {
  width: 150px;
  height: 150px;
  margin: 10px;
  padding: 10px;
  font-size: larger;
  background-color: lightskyblue;
  border-radius: 5px;
  cursor: pointer;
  border-radius: 50%;
}
.button:active {
  background-color: midnightblue;
  color: white;
}
</style>
