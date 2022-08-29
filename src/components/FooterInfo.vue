<template>
  <v-footer>
    <v-card elevation="0" rounded="0" width="100%" class="white text-center">
      <v-card-text>
        <router-link to="/about">
          <v-btn
            class="mx-4"
            icon="mdi-information-outline"
            variant="plain"
          ></v-btn
        ></router-link>
        <router-link to="/contact">
          <v-btn
            class="mx-4"
            icon="mdi-lightbulb-on-outline"
            variant="plain"
          ></v-btn
        ></router-link>
        <a href="https://www.uneparole.love/pains/153xuneparole.pdf">
          <v-btn class="mx-4" icon="mdi-printer" variant="plain"></v-btn
        ></a>
        <div
          @click="this.$store.state.wordClick = !this.$store.state.wordClick"
        >
          <v-btn class="mx-4" icon="mdi-reload" variant="plain"></v-btn>
        </div>
      </v-card-text>

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
  methods: {
    reload() {
      location.href = "https://www.uneparole.com";
    },
  },
};
</script>
