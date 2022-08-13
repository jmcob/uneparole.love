<template>
  <img src="../assets/cross.svg" class="cross" alt="croix" />
  <div @keyup.space="loadWord()" class="button-container">
    <h1>
      <button class="button" @click="loadWord()">
        Piocher une parole de Dieu au hasard
      </button>
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    loadWord: Function,
  },
};
</script>
