<template>
  <div
    v-if="wordClick && biggerFont"
    :style="{ fontSize: 'larger' }"
    id="uneparole"
  >
    <p class="center about" @click="biggerFont = !biggerFont">
      Choisir une police plus petite
    </p>
    <br />
    <p class="center info">Portez cette parole en prière :</p>
    <br />
    <p><span v-html="uneparole"></span></p>
    <br />
    <p class="ref">
      <em>{{ uneref }}</em>
    </p>
  </div>
  <div v-else-if="wordClick" :style="{ fontSize: 'large' }">
    <p class="center about" @click="biggerFont = !biggerFont">
      Afficher une police plus grande
    </p>
    <br />
    <p class="center info">Portez cette parole en prière :</p>
    <br />
    <div id="uneparole">
      <p><span v-html="uneparole"></span></p>
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
