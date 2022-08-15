<template>
  <div
    v-if="wordClick && biggerFont"
    :style="{ fontSize: 'x-large' }"
    id="uneparole"
  >
    <p class="center about" @click="biggerFont = !biggerFont">
      Choisir une police plus petite
    </p>
    <br />
  </div>
  <div v-else-if="wordClick">
    <p class="center about" @click="biggerFont = !biggerFont">
      Afficher une police plus grande
    </p>
    <br />
  </div>
  <div id="uneparole">
    <p>{{ this.uneparole.parole }}</p>
    <br />
    <p class="ref">
      <em>{{ this.uneparole.ref }}</em>
    </p>
    <br />
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
