<template>
  <v-footer>
    <v-card elevation="0" rounded="0" width="100%" class="white text-center">
      <v-list density="compact">
        <v-list-subheader>Menu</v-list-subheader>
        <v-list-item v-if="this.$store.state.outOfHome" to="/">
          <template v-slot:prepend> <v-icon icon="mdi-home"></v-icon></template>
          <v-list-item-title v-text="item.text"></v-list-item-title
        ></v-list-item>
        <v-list-item
          v-else
          active-color="indigo"
          v-show="this.$store.state.wordClick"
          @click="
            this.$store.state.wordClick
              ? (this.$store.state.wordClick = !this.$store.state.wordClick)
              : DisplayParole(all, ps, gosp)
          "
        >
          <template v-slot:prepend> <v-icon icon="mdi-home"></v-icon></template>
          <v-list-item-title v-text="item.text"></v-list-item-title
        ></v-list-item>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :value="item"
          :to="item.route"
          active-color="indigo"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>

          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-card-text class="black">
        {{ new Date().getFullYear() }} —
        <span class="font-weight-thin"
          ><a href="http://jmxi.art">jeanmaxime</a> -
          <router-link to="/ajout">gestion du site</router-link></span
        >
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  props: { DisplayParole: Function },
  data: () => ({
    item: { text: "Accueil" },
    items: [
      {
        text: "Evangile du jour",
        icon: "mdi-calendar-range",
        route: "/evangile",
      },
      {
        text: "D'où vient ce site ?",
        icon: "mdi-information-outline",
        route: "/about",
      },
      {
        text: "Soumettre une parole",
        icon: "mdi-lightbulb-on-outline",
        route: "/contact",
      },
      {
        text: "Impression (pour l'église)",
        icon: "mdi-printer",
        route: "/impression",
      },
    ],
  }),
};
</script>
<style scoped>
v-footer {
  display: flex;
  flex-direction: column;
}
</style>
