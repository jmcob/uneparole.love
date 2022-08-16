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
          <v-btn class="mx-4" icon="mdi-email" variant="plain"></v-btn
        ></router-link>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="black">
        {{ new Date().getFullYear() }} — <strong>jeanmaxime</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
