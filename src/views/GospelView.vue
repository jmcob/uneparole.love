<template>
  <div class="wrapper">
    <HeaderCross :DisplayParole="this.DisplayParole" />
    <Arrow />
    <EvangileDuJour />
    <FooterInfo />
  </div>
</template>

<script>
import HeaderCross from "../components/HeaderCross.vue";
import EvangileDuJour from "../components/EvangileDuJour.vue";
import FooterInfo from "../components/FooterInfo.vue";
import Arrow from "../components/Arrow.vue";

export default {
  components: { HeaderCross, EvangileDuJour, FooterInfo, Arrow },
  created() {
    this.$store.state.outOfHome = true;
  },
};
</script>
