<template>
  <h1 v-if="this.$store.state.outOfHome">
    <router-link to="/">
      <img src="../assets/cross.svg" class="cross" alt="La croix" />
    </router-link>
  </h1>
  <h1 v-else>
    <img src="../assets/cross.svg" class="cross" alt="La croix" />
  </h1>
</template>

<script>
export default {
  props: { DisplayParole: Function },
};
</script>
