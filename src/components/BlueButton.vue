<template>
  <div class="button-container">
    <div v-if="this.$store.state.wordClick"></div>
    <div v-else>
      <h1
        @click="DisplayParole(all, ps, gosp)"
        :style="{ animationName: 'spin' }"
        class="button"
      >
        <button>Dis seulement une parole</button>
      </h1>
      <br />

      <div>
        <input type="radio" id="all" name="drone" v-model="all" checked />
        <label for="all">Dans toute la Bible</label>
      </div>

      <div>
        <input type="radio" id="ps" name="drone" v-model="ps" />
        <label for="ps">Parmi les psaumes</label>
      </div>

      <div>
        <input type="radio" id="gosp" name="drone" v-model="gosp" />
        <label for="gosp">Dans l'évangile</label>
      </div>
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
    };
  },
};
</script>
