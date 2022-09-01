<template>
  <div
    v-if="this.$store.state.wordClick && biggerFont"
    :style="{ fontSize: 'larger' }"
    id="uneparole"
  >
    <p class="center about" @click="biggerFont = !biggerFont">
      Choisir une police plus petite
    </p>
    <br />
    <div class="papier">
      <p><span v-html="uneparole"></span></p>
      <br />

      <p class="ref">
        <em>{{ uneref }}</em>
      </p>
    </div>
    <br />
    <p class="center info">Si cette parole vous plaît, portez la en prière.</p>
  </div>
  <div v-else-if="this.$store.state.wordClick" :style="{ fontSize: 'large' }">
    <p class="center about" @click="biggerFont = !biggerFont">
      Afficher une police plus grande
    </p>
    <br />
    <div id="uneparole">
      <div class="papier">
        <p><span v-html="uneparole"></span></p>
        <br />

        <p class="ref">
          <em>{{ uneref }}</em>
        </p>
      </div>
      <br />
      <p class="center info">
        Si cette parole vous plaît, portez la en prière.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    uneparole: "",
    uneref: "",
  },
  data() {
    return {
      biggerFont: false,
    };
  },
};
</script>
