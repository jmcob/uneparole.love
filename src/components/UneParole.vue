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
    <p>{{ uneparole }}</p>
    <br />
    <p class="ref">
      <em>{{ uneref }}</em>
    </p>
  </div>
  <div v-else-if="wordClick">
    <p class="center about" @click="biggerFont = !biggerFont">
      Afficher une police plus grande
    </p>
    <br />
    <div id="uneparole">
      <p>{{ uneparole }}</p>
      <br />
      <p class="ref">
        <em>{{ uneref }}</em>
      </p>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    uneparole: "",
    uneref: "",
    wordClick: Boolean,
  },
  data() {
    return {
      biggerFont: false,
    };
  },
};
</script>
