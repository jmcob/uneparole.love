<template>
  <img src="../assets/cross.svg" class="cross" alt="croix" />
  <div @keyup.space="loadWord()" class="button-container">
    <h1>
      <button class="button" @click="loadWord()">
        Prenez une parole de Dieu au hasard
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

<style>
.cross {
  width: 60px;
}
</style>
