<template>
  <div @keyup.space="GetParolesFromDB()" class="button-container">
    <h1>
      <button
        v-if="animation && wordClick"
        @click="GetParolesFromDB()"
        :style="{ animationName: 'spin' }"
        class="button"
      >
        Dis seulement une parole
      </button>
      <div v-else-if="!wordClick && this.animation"></div>
      <div v-else-if="!wordClick"></div>
      <button v-else @click="GetParolesFromDB()" class="button">
        Dis seulement une parole
      </button>
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    GetParolesFromDB: Function,
    animation: Boolean,
    wordClick: Boolean,
  },
};
</script>
