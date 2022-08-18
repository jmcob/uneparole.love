<template>
  <div @keyup.space="loadWord()" class="button-container">
    <h1>
      <button
        v-if="animation"
        @click="loadWord()"
        :style="{ animationName: 'spin' }"
        class="button"
      >
        Dis seulement une parole
      </button>
      <button v-else @click="loadWord()" class="button">
        Dis seulement une parole
      </button>
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    loadWord: Function,
    animation: Boolean,
  },
};
</script>
