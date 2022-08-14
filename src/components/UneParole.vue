<template>
  <div v-if="biggerFont" :style="{ textSizeAdjust: 'x-Large' }" id="uneparole">
    <div id="uneparole" v-if="wordClick">
      <p class="center" @click="biggerFont = !biggerFont">Taille de police</p>
      <p>{{ this.uneparole.parole }}</p>
      <p class="ref">
        <em>{{ this.uneparole.ref }}</em>
      </p>
    </div>
  </div>

  <div id="uneparole" v-if="wordClick">
    <p class="center" @click="biggerFont = !biggerFont">Taille de police</p>
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
