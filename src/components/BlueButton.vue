<template>
  <div class="button-container">
    <div v-if="this.$store.state.wordClick"></div>
    <div class="buttons" v-else>
      <h1
        @click="BookBooleanActivator(), DisplayParole(all, ps, gosp)"
        :style="{ animationName: 'spin' }"
        class="button"
      >
        <button>Dis seulement une parole</button>
      </h1>
      <br />

      <div>
        <v-radio-group v-model="livres" column>
          <v-radio
            type="radio"
            label="Dans toute la Bible"
            color="indigo"
            value="all"
          ></v-radio>
          <v-radio
            type="radio"
            label="Parmi les psaumes"
            color="orange"
            value="ps"
          ></v-radio
          ><v-radio
            type="radio"
            label="Dans l'évangile"
            color="blue"
            value="gosp"
          ></v-radio>
        </v-radio-group>
      </div>
      <v-btn
        @click="BookBooleanActivator(), DisplayParole(all, ps, gosp)"
        color="green"
        variant="outlined"
        >Et je serai guéri !</v-btn
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    DisplayParole: Function,
    animation: Boolean,
  },
  data() {
    return {
      all: false,
      gosp: false,
      ps: false,
      livres: "all",
    };
  },
  methods: {
    BookBooleanActivator() {
      if (this.livres === "all") {
        this.all = true;
        this.gosp = false;
        this.ps = false;
      }
      if (this.livres === "gosp") {
        this.all = false;
        this.gosp = true;
        this.ps = false;
      }
      if (this.livres === "ps") {
        this.all = false;
        this.gosp = false;
        this.ps = true;
      }
    },
  },
};
</script>
