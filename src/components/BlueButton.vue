<template>
  <div @keyup.space="DisplayParole()" class="button-container">
    <h1>
      <div v-if="this.$store.state.wordClick"></div>

      <button
        v-else
        @click="DisplayParole()"
        :style="{ animationName: 'spin' }"
        class="button"
      >
        Dis seulement une parole
      </button>
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    DisplayParole: Function,
    animation: Boolean,
  },
};
</script>
