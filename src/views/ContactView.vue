<template>
  <div class="wrapper">
    <HeaderCross :DisplayParole="this.DisplayParole" />
    <Arrow />
    <ContactForm />
    <FooterInfo />
  </div>
</template>

<script>
import HeaderCross from "../components/HeaderCross.vue";
import ContactForm from "../components/ContactForm.vue";
import FooterInfo from "../components/FooterInfo.vue";
import Arrow from "../components/Arrow.vue";

export default {
  components: { HeaderCross, ContactForm, FooterInfo, Arrow },
  created() {
    this.$store.state.outOfHome = true;
  },
};
</script>
