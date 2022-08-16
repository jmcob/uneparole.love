<template>
  <div class="wrapper">
    <div class="cadre about info">
      <HeaderCross />
      <Informations />
      <FooterInfo />
    </div>
  </div>
</template>

<script>
import HeaderCross from "../components/HeaderCross.vue";
import Informations from "../components/Informations.vue";
import FooterInfo from "../components/FooterInfo.vue";

export default {
  components: { HeaderCross, Informations, FooterInfo },
};
</script>

<style lang="sass" scoped></style>
