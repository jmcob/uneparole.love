<template>
  <div
    v-if="wordClick && biggerFont"
    :style="{ fontSize: 'x-large' }"
    id="uneparole"
  >
    <p class="center about" @click="biggerFont = !biggerFont">
      Choisir une police plus petite
    </p>
    <p>{{ this.uneparole.parole }}</p>
    <p class="ref">
      <em>{{ this.uneparole.ref }}</em>
    </p>
  </div>
  <div v-else-if="wordClick" id="uneparole">
    <p class="center" @click="biggerFont = !biggerFont">
      Afficher une police plus grande
    </p>
    <p>{{ this.uneparole.parole }}</p>
    <p class="ref">
      <em>{{ this.uneparole.ref }}</em>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    uneparole: {
      parole: "",
      ref: "",
    },
    wordClick: Boolean,
  },
  data() {
    return {
      biggerFont: false,
    };
  },
};
</script>
