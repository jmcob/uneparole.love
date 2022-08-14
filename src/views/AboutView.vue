<template>
  <div class="wrapper">
    <div class="cadre about info">
      <HeaderCross />
      <Informations />
    </div>
  </div>
</template>

<script>
import HeaderCross from "../components/HeaderCross.vue";
import Informations from "../components/Informations.vue";

export default {
  components: { HeaderCross, Informations },
};
</script>

<style lang="sass" scoped></style>
