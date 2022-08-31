<template>
  <div class="wrapper">
    <div class="cadre about info">
      <HeaderCross />
      <Arrow />
      <Informations />
      <FooterInfo />
    </div>
  </div>
</template>

<script>
import HeaderCross from "../components/HeaderCross.vue";
import Informations from "../components/Informations.vue";
import FooterInfo from "../components/FooterInfo.vue";
import Arrow from "../components/Arrow.vue";

export default {
  components: { HeaderCross, Informations, FooterInfo, Arrow },
};
</script>

<style lang="sass" scoped></style>
